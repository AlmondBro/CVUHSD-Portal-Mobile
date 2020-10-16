import React from 'react';
import { ImageBackground, ActivityIndicator } from 'react-native';

import { HomeScreenContainerView, OpenSSOContainer, SignInButtonTouchableOpacity } from './HomeScreen_StyledComponents.js';

const HomeScreen = ({ renderAsStudent, title, authLoading, children }) => {
    const backgroundImage = require('./../../assets/images/theCVway-white.png');

    return (
        <HomeScreenContainerView>
            <ImageBackground
                source  =   { backgroundImage }
                style   =   { 
                                { 
                                    flex: 1,
                                    resizeMode: "contain",
                                    justifyContent: "center"
                                }
                            }
            >
                <OpenSSOContainer
                    title           =   { title }
                    renderAsStudent =   { renderAsStudent } 
                >
                    <SignInButtonTouchableOpacity 
                        buttonTitle     =   "Sign In" 
                        color           =   "white"
                        onPress         =   { props.openADSingleSignOn || console.log("No onPress function")}

                        title           =   { title }
                        renderAsStudent =   { renderAsStudent } 
                    >
                    {
                        authLoading ? (
                            <ActivityIndicator 
                                size        =   "large" 
                                color       =   { (title === null) 
                                                    ? "#B41A1F" 
                                                    : (title === "Student" || renderAsStudent) 
                                                        ? "#B41A1F" : "#1E6C93" 
                                                } 
                                animating   =   { authLoading  }
                            />
                            )
                            : null
                    } 
                    </SignInButtonTouchableOpacity>
                    { children }
                </OpenSSOContainer> 
            </ImageBackground>
        </HomeScreenContainerView>
    );
};

export default HomeScreen;