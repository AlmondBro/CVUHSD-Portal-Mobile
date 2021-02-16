import React from 'react';
import { TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';

import WPTypography from './../../assets/images/wp-typography-red.svg';

let HeaderContainerView = styled.View`
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex: 1;
`;

let PortalLogoImage = styled.Image.attrs( (props) => {
  
})`
    width: 130px;
    height: 130px;

    margin-top: 5px;
`;

let UpdateAppView = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: white;

    margin-top: 20px;
    margin-bottom: 20px;

    border-radius: 10px;

    width: 100%;
`; 

let UpdateTextDescription = styled.Text`
    font-size: 14px; 
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 10px;
    padding-bottom: 10px;
    align-self: center;
    color:  ${   props => (props.title === null) 
                            ? "#B41A1F" : 
                            (props.title === "Student" || props.renderAsStudent) 
                                ? "#B41A1F" : "#1E6C93" 
             };
`;

let UserInfoText = styled.Text`
    color: ${props => (props.title === "Student" || props.renderAsStudent) ? "#B41A1F" : "#1E6C93" };
    
    font-weight: ${props => props.bold ? "bold" : "normal"};
    font-style: ${props => props.italic ? "italic" : "normal"};

    font-family: ${props => (props.italic && props.bold) ? "SourceSansPro_600SemiBold_Italic" : "SourceSansPro_400Regular"};

    margin-top: 0px;

    align-self: center;

    margin-top: 5px;
`;

const SchoolNameLogoView = styled.View`
    flex-direction: row;
    justify-content:  center;
    margin-bottom: 5px;
`;

const SchoolLogo = styled.Image`
    flex-direction: row;
    height: 25px;
    width: 25px;

    margin-left: 5px;

    overflow: visible;
`;

const UpdateButtonView = styled.View`
    flex-direction: row;
    justify-content: center;

    background-color:   ${   props => (props.title === null) 
                            ? "#B41A1F" : 
                            (props.title === "Student" || props.renderAsStudent) 
                                ? "#B41A1F" : "#1E6C93" 
                        };
    color: white;

    border-radius: 15px;

    width: 120px;

    margin-top: 10px;
    margin-bottom: 10px;

    
    padding-top: 8px;
    padding-bottom: 8px;
`;

const UpdateButtonText= styled.Text`
    color: white;

    font-family: 'SourceSansPro_600SemiBold';
    /* 'SourceSansPro_400Regular','SourceSansPro_200ExtraLight', 'SourceSansPro_200ExtraLight_Italic','SourceSansPro_300Light','SourceSansPro_300Light_Italic','SourceSansPro_400Regular_Italic','SourceSansPro_600SemiBold', 'SourceSansPro_600SemiBold_Italic','SourceSansPro_700Bold','SourceSansPro_700Bold_Italic', 'SourceSansPro_900Black', 'SourceSansPro_900Black_Italic'; */

    font-size: 15px;
    font-weight: bold;
    flex-direction: row;

    justify-content: center;
`;


const WayPointTypography = styled(WPTypography)`
    margin-top: 5px;
    margin-bottom: 0px;
    margin-left: 8px;
    display: flex;
    align-self: center;

`;

const UpdateButtonTouchableOpacity = ({ renderAsStudent, title, buttonTitle, accessibilityLabel, onPress }) => {
    return (
        <TouchableOpacity
            activeOpacity       =   { 0.8 }
            accessibilityLabel  =   { accessibilityLabel }
            onPress             =   { onPress }
        >
            <UpdateButtonView
                title           =   { title }
                renderAsStudent =   { renderAsStudent } 
            >
                {   (buttonTitle) ? 
                    (
                        <UpdateButtonText
                            title           =   { title }
                            renderAsStudent =   { renderAsStudent } 
                        >
                            { buttonTitle || "Sign In" }
                        </UpdateButtonText>
                    )   : null
                }
            </UpdateButtonView>
        </TouchableOpacity>
    ); //end return
}; //SignInButtonTouchableOpacity

export { HeaderContainerView, PortalLogoImage, UpdateAppView, UpdateTextDescription, UserInfoText, SchoolNameLogoView, SchoolLogo, UpdateButtonTouchableOpacity, WayPointTypography }; 