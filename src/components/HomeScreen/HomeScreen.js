import React from 'react';
import { ImageBackground, ActivityIndicator } from 'react-native';

import { HomeScreenContainerView, OpenSSOContainer, SignInButtonTouchableOpacity } from './HomeScreen_StyledComponents.js';

const HomeScreen = (props) => {
    const backgroundImage = require('./../../assets/images/theCVway-white.png');

    return (
        <HomeScreenContainerView>
            <ImageBackground
                source={ backgroundImage }
                style={ 
                    { 
                        flex: 1,
                        resizeMode: "contain",
                        justifyContent: "center"
                    }
                }
            >
            <OpenSSOContainer>
                <SignInButtonTouchableOpacity 
                    buttonTitle="Sign In" 
                    color="white"
                    onPress={ props.openADSingleSignOn || console.log("No onPress function")}
                >
                   {
                       props.authLoading ? (
                        <ActivityIndicator 
                            size="large" 
                            color="#B41A1F"
                            animating   =  { props.authLoading  }
                        />
                        )
                        : null
                   } 
                </SignInButtonTouchableOpacity>
                { props.children }
            </OpenSSOContainer> 
            </ImageBackground>
        </HomeScreenContainerView>
    );
};

export default HomeScreen;