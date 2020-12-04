import React from 'react';
import { Alert, Platform } from 'react-native';

//Import the styled sub-components
import { Container, PortalLogo, InfoIconTouchOpacity, SettingsIcon } from './SettingsHeaderStyledComponents.js';

import { version }  from './../../../package.json';

import { Reactotron } from './../../config/reactotron.dev.js';

const isDev = __DEV__;

const ReactotronDebug = (isDev &&  Reactotron) ? Reactotron : console;

const SettingsHeader = ({ districtPosition, renderAsStudent }) => {
    const imagesObjectPath = (Platform.OS === "web") ? require('./../../assets/images/index.js') : require('@images');
    const Images = imagesObjectPath.default;

    const portalLogoSource =  Images.appHeader.portalLogoRed;

    const alertTitle = "App version" ;

    ReactotronDebug.log("version", version);
    return (
        <Container
            districtPosition    =   { districtPosition }
            renderAsStudent     =   { renderAsStudent  }
        >
            <PortalLogo
                source  =   { portalLogoSource} 
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
