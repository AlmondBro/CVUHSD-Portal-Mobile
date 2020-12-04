import React from 'react';
import { Platform } from 'react-native';

//Import the styled sub-components
import { Container, PortalLogo } from './SettingsHeaderStyledComponents.js';

const imagesObjectPath = (Platform.OS === "web") ? require('./../../assets/images/index.js') : require('@images');
const Images = imagesObjectPath.default;

const portalLogoSource =  Images.appHeader.portalLogoRed;

const SettingsHeader = () => {
    return (
        <Container>
            <PortalLogo
                source  =   { portalLogoSource} 
            />
        </Container>
    ); //end return statement
}; //end SettingsHeader()

export default SettingsHeader;