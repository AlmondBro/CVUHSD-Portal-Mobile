import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: space-evenly;
    /* background-color: red; */
`; 

const ButtonContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;

    background-color:  ${props => ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"};

    border-radius: 15px;

    width: 180px;

    padding-top: 10px;
    padding-bottom: 10px;

    margin: auto;

    margin-top: 15px;
    margin-bottom:  25px;
`;

const ButtonText = styled.Text`
    display: flex;
    flex-direction: row;
    justify-content: center;

    color: white;

    font-family: 'SourceSansPro_600SemiBold';
    /* 'SourceSansPro_400Regular','SourceSansPro_200ExtraLight', 'SourceSansPro_200ExtraLight_Italic','SourceSansPro_300Light','SourceSansPro_300Light_Italic','SourceSansPro_400Regular_Italic','SourceSansPro_600SemiBold', 'SourceSansPro_600SemiBold_Italic','SourceSansPro_700Bold','SourceSansPro_700Bold_Italic', 'SourceSansPro_900Black', 'SourceSansPro_900Black_Italic'; */

    font-size: 17px;
    font-weight: bold;

    text-align: center;
`;

const Button = ({ renderAsStudent, districtPosition, buttonTitle, children, onPress }) => {
    return (
        <TouchableOpacity
            activeOpacity   =   { 0.5 }
            onPress         =   { onPress }
        >
            <ButtonContainer
                districtPosition            =   { districtPosition }
                renderAsStudent             =   { renderAsStudent } 
            >
                {   (buttonTitle) ? 
                    (
                        <ButtonText
                            districtPosition    =   { districtPosition }
                            renderAsStudent     =   { renderAsStudent } 
                        >
                            {   buttonTitle || "Sign In" }
                        </ButtonText>
                    )   : null
                }
                { children }
            </ButtonContainer>
        </TouchableOpacity>
    ); //end return
}; //SignInButtonTouchableOpacity

export { Container, Button };