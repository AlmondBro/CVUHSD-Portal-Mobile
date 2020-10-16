import React from 'react';

import styled from 'styled-components/native';

import Modal from 'react-native-modal';
import { WebView } from 'react-native-webview';

import { SafeAreaView } from 'react-native-safe-area-context'; //Import SafeAreaView so that elements do not overlap with status bars or notches

const ModalStyled = styled(Modal).attrs((props) => ({
    isVisible           :   props.isVisible,
    onBackdropPress     :   props.onBackdropPress,
    onSwipeComplete     :   props.onSwipeComplete, 
    swipeDirection      :   props.swipeDirection,
    javaScriptEnabled   :   props.javaScriptEnabled,
    injectJavaScript    :   props.injectJavaScript,
    injectedJavaScript  :   props.injectedJavaScript,
    onMessage           :   props.onMessage,
    mixedContentMode    :   props.mixedContentMode
}))`
  flex              : 1;
  flex-direction    : column;
  justify-content   : center; 
  align-self        : center;

  position          : relative;
  width             : 90%;
  background-color  : transparent;
`;


let WebViewContainer = styled.View`
    flex: 1;
    border-radius: 20;
    width: 100%;
    background-color:  ${   props => (props.title === null) 
                            ? "#B41A1F" : 
                            (props.title === "Student" || props.renderAsStudent === "true") 
                                ? "#B41A1F" : "#1E6C93" 
                        };
    padding: 0;
`;

let SafeAreaViewStyled = styled(SafeAreaView)`
    flex: 1;
    border-radius: 25;

    padding-top: 75;
    padding-bottom: 100;

    overflow: hidden;
`;

let ChangePasswordTextHeaderContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    align-self: stretch;


    flex: 0.1;
    border-radius: 20;
    width: 100%;
    background-color:  ${   props => (props.title === null) ? "#B41A1F" : 
                            (props.title === "Student" || props.renderAsStudent === "true") 
                                ? "#B41A1F" : "#1E6C93" 
                        };
    padding: 0;
`;

let ChangePasswordText = styled.Text`
    font-size: 25;

    color:  white;

    /* flex: 1; */
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-self: center;

    padding: 0;
`;


let ChangePasswordTextHeader = ({ title, renderAsStudent, children, ...props }) => {
    return (
        <ChangePasswordTextHeaderContainer
            title           = { title }
            renderAsStudent = { renderAsStudent }
        >
            <ChangePasswordText>{ children }</ChangePasswordText>
        </ChangePasswordTextHeaderContainer>
    );
};


const WebViewStyled = styled(WebView).attrs((props) => ({
    source              :  props.source,
    originWhitelist     :  props.originWhitelist,
    scalesPageToFit     :  props.scalesPageToFit,
    bounces             :  props.bounces,
    javaScriptEnabled   :  props.javaScriptEnabled,
    injectedJavaScript  :  props.injectedJavaScript,   
    injectJavaScript    :  props.injectJavaScript,
    mixedContentMode    :  props.mixedContentMode,
    onMessage           :  props.onMessage
}))`

  flex              :   1;
  flex-direction    : column;
  justify-content   : center;
`;

export { ModalStyled, SafeAreaViewStyled, WebViewContainer, WebViewStyled, ChangePasswordTextHeader };