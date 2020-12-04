import React from 'react';
import { Platform } from 'react-native';
//Import the styled sub-components
import { Container, PortalLogo, SettingsFAIcon } from './SettingsHeaderStyledComponents.js';

const imagesObjectPath = (Platform.OS === "web") ? require('./../../assets/images/index.js') : require('@images');
const Images = imagesObjectPath.default;

const portalLogoSource =  Images.appHeader.portalLogoRed;

const SettingsHeader = ({ districtPosition, renderAsStudent }) => {
    return (
        <Container
            districtPosition    =   { districtPosition }
            renderAsStudent     =   { renderAsStudent  }
        >
            <PortalLogo
                source  =   { portalLogoSource} 
            />
            <SettingsFAIcon 
                                name    =   { renderAsStudent ? "user" : "graduation-cap" } 
                                size    =   {   30  } 
                                color   =   "gear" 
            />
        </Container>
    ); //end return statement
}; //end SettingsHeader()

export default SettingsHeader;