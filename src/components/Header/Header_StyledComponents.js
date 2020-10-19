import React from 'react';
import { TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';
import css from 'styled-css/native';

let HeaderContainerView = styled.View`
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex: 1;
`;

let PortalLogoImage = styled.Image.attrs( (props) => {
  
})`
    width: 130;
    height: 130;

    margin-top: 5;
`;

let UpdateAppView = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: transparent;

    margin-top: 15;
    margin-bottom: 5;

    padding-left: 50;
    padding-right: 50;
    padding-top: 15;
    padding-bottom: 15;

    border-radius: 10;

    width: 95%;
`; 

let UpdateTextDescription = styled.Text`
    font-size: 14; 
    padding-left: 8;
    padding-right: 8;
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

    margin-top: 0;

    align-self: center;

    margin-top: 5;
`;

const SchoolNameLogoView = styled.View`
    flex-direction: row;
    justify-content:  center;
    margin-bottom: 5;
`;

const SchoolLogo = styled.Image`
    flex-direction: row;
    height: 25;
    width: 25;

    margin-left: 5;

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

    border-radius: 15;

    width: 120;

    margin-top: 15;
    
    padding-top: 10;
    padding-bottom: 10;
`;

const UpdateButtonText= styled.Text`
    color: white;

    font-family: 'SourceSansPro_600SemiBold';
    /* 'SourceSansPro_400Regular','SourceSansPro_200ExtraLight', 'SourceSansPro_200ExtraLight_Italic','SourceSansPro_300Light','SourceSansPro_300Light_Italic','SourceSansPro_400Regular_Italic','SourceSansPro_600SemiBold', 'SourceSansPro_600SemiBold_Italic','SourceSansPro_700Bold','SourceSansPro_700Bold_Italic', 'SourceSansPro_900Black', 'SourceSansPro_900Black_Italic'; */

    font-size: 20;
    font-weight: bold;
    flex-direction: row;

    justify-content: center;
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

export { HeaderContainerView, PortalLogoImage, UpdateAppView, UpdateTextDescription, UserInfoText, SchoolNameLogoView, SchoolLogo, UpdateButtonTouchableOpacity }; 