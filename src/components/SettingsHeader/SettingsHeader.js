import React from 'react';
import { Alert, Platform } from 'react-native';

import Constants from 'expo-constants';

import { Reactotron } from './../../config/reactotron.dev.js';

import Logo from './../../assets/images/wp-portal-logo-white.svg';
//Import the styled sub-components
import { Container, PortalLogo, InfoIconTouchOpacity, SettingsIcon } from './SettingsHeaderStyledComponents.js';

const { nativeAppVersion: version } = Constants;

const isDev = __DEV__;

const ReactotronDebug = (isDev &&  Reactotron) ? Reactotron : console;

const SettingsHeader = ({ districtPosition, renderAsStudent }) => {
    const imagesObjectPath = (Platform.OS === "web") ? require('./../../assets/images/index.js') : require('@images');
    const Images = imagesObjectPath.default;

    const portalLogoSource = (districtPosition === "Student" || renderAsStudent === true) 
                                ? Images.appHeader.portalLogoRed : Images.appHeader.portalLogoBlue;

    const alertTitle = "App version" ;

    ReactotronDebug.log("version", version);
    return (
        <Container
            districtPosition    =   { districtPosition }
            renderAsStudent     =   { renderAsStudent  }
        >
            <Logo
                width   =   { 40 } 
                height  =   { 40 } 
            />
            <InfoIconTouchOpacity
                onPress = {
                    () => 
                    Alert.alert(
                        alertTitle,
                        version,
                        [
                          {
                            text: "OK",
                            onPress: () => console.log("OK Pressed"),
                            style: "cancel"
                          },
                        ],
                        { cancelable: false }
                      )
                }
            >
                <SettingsIcon 
                                    name    =   "information" 
                                    size    =   {   30  } 
                                    color   =   "white" 
                />
            </InfoIconTouchOpacity>
        </Container>
    ); //end return statement
}; //end SettingsHeader()

export default SettingsHeader;
