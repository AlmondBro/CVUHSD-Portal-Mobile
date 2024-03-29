import React from 'react';
import { Alert, Platform } from 'react-native';

//import Constants from 'expo-constants';

import { Reactotron } from './../../config/reactotron.dev.js';

import WhiteWPLogo from './../../assets/images/wp-portal-logo-white.svg';

import { version } from './../../../package.json';
//Import the styled sub-components

import { Container, WayPointText, InfoIconTouchOpacity, SettingsIcon } from './SettingsHeaderStyledComponents.js';

//const { nativeAppVersion: version } = Constants;

const isDev = __DEV__;

const ReactotronDebug = (isDev &&  Reactotron) ? Reactotron : console;

const SettingsHeader = ({ districtPosition, renderAsStudent }) => {
    const imagesObjectPath = (Platform.OS === "web") ? require('./../../assets/images/index.js') : require('@images');
    const Images = imagesObjectPath.default;

    const alertTitle = "App version" ;

    ReactotronDebug.log("version", version);
    return (
        <Container
            districtPosition    =   { districtPosition }
            renderAsStudent     =   { renderAsStudent  }
        >
            
            <WhiteWPLogo
                width   =   { 40 } 
                height  =   { 40 } 
            />
            <WayPointText>WayPoint</WayPointText>
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
