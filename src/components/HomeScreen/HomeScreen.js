import React from 'react';
import { ImageBackground, ActivityIndicator } from 'react-native';

import { HomeScreenContainerView, OpenSSOContainer } from './HomeScreen_StyledComponents.js';

import TouchableButton from './../TouchableButton/TouchableButton.js';

const HomeScreen = ({ renderAsStudent, title, authLoading, openADSingleSignOn, children }) => {
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
                    <TouchableButton 
                        buttonTitle         =   "Sign In" 
                        color               =   "white"
                        onPress             =   { openADSingleSignOn || console.log("No onPress function")}

                        districtPosition    =   { title }
                        renderAsStudent     =   { renderAsStudent } 
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
                    </TouchableButton>
                    { children }
                </OpenSSOContainer> 
            </ImageBackground>
        </HomeScreenContainerView>
    );
};

export default HomeScreen;