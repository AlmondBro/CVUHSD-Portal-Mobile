import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { FontAwesome } from '@expo/vector-icons'; 

import Modal from 'react-native-modal';

import { SafeAreaView } from 'react-native-safe-area-context'; //Import SafeAreaView so that elements do not overlap with status bars or notches

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

let SafeAreaViewStyled = styled(SafeAreaView)`
    flex: 1;

    overflow: hidden;
`;

const ModalStyled = styled(Modal).attrs((props) => ({
    isVisible           :   props.isVisible,
    hasBackdrop         :   props.hasBackdrop,
    onBackdropPress     :   props.onBackdropPress,
    onSwipeComplete     :   props.onSwipeComplete, 
    swipeDirection      :   props.swipeDirection,
    javaScriptEnabled   :   props.javaScriptEnabled,
    injectJavaScript    :   props.injectJavaScript,
    injectedJavaScript  :   props.injectedJavaScript,
    onMessage           :   props.onMessage,
    mixedContentMode    :   props.mixedContentMode,
    animationType       :   props.animationType,
    presentationStyle   :   props.presentationStyle,
    onDismiss           :   props.onDismiss
}))`
  flex              : 1;
  flex-direction    : row;
  justify-content   : flex-start; 
  align-items       : flex-end;

  position          : relative;
  background-color  : white;

  margin            :   0;

  width             : 100%;
  height            : 100%;

  border-top-left-radius: 10;
  border-top-right-radius: 10;
`;

const ModalContentContainer = styled.View`
    flex: 1;
    border-radius: 20;

    width: 100%;
    padding: 0;

    background-color:  red;
`;

const KeyboardAwareScrollViewStyled = styled(KeyboardAwareScrollView)`

`;

const ButtonContainer = styled.View`

    display: flex;
    flex-direction: row;
    justify-content: center;

    background-color:  ${props => ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"};

    border-radius: 15;

    width: 120;

    padding-top: 10;
    padding-bottom: 10;

    margin: auto;

    margin-top: 15;
    margin-bottom:  15;
`;

const ButtonText= styled.Text`
    display: flex;
    flex-direction: row;
    justify-content: center;

    color: white;

    font-family: 'SourceSansPro_600SemiBold';
    /* 'SourceSansPro_400Regular','SourceSansPro_200ExtraLight', 'SourceSansPro_200ExtraLight_Italic','SourceSansPro_300Light','SourceSansPro_300Light_Italic','SourceSansPro_400Regular_Italic','SourceSansPro_600SemiBold', 'SourceSansPro_600SemiBold_Italic','SourceSansPro_700Bold','SourceSansPro_700Bold_Italic', 'SourceSansPro_900Black', 'SourceSansPro_900Black_Italic'; */

    font-size: 20;
    font-weight: bold;
`;

const Button = ({ renderAsStudent, districtPosition, buttonTitle, children, onPress }) => {
    return (
        <TouchableOpacity
            activeOpacity   =   { 0.5 }
            onPress         =   { onPress }
        >
            <ButtonContainer
                districtPosition           =   { districtPosition }
                renderAsStudent =   { renderAsStudent } 
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

const HeaderContainer = styled.View`
    display: flex;
    flex: 0.5;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color:  ${props => ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"};
/* 
    padding-top: 5;
    padding-bottom: 5; */
`;

const HeaderText = styled.Text`
    color: white;

    font-size: 18;
    font-weight: bold;

    margin-right: 5;
`;


const Header = ({ districtPosition, renderAsStudent, title }) => {
    return (
        <HeaderContainer
            districtPosition    =   { districtPosition } 
            renderAsStudent     =   { renderAsStudent }
        >
            <HeaderText>
                { title }
            </HeaderText>
            <FontAwesome 
                    name    =   "ticket" 
                    size    =   {   30  } 
                    color   =   "white" 
            />
        </HeaderContainer>
    ); //end return statement
}; 

export { SafeAreaViewStyled, ModalStyled, ModalContentContainer, KeyboardAwareScrollViewStyled, Header, Button };


