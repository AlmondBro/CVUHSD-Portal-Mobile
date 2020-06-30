import React from 'react';

import styled from 'styled-components/native';

import Modal from 'react-native-modal';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';

const ModalStyled = styled(Modal).attrs((props) => ({
    isVisible           :   props.isVisible,
    onBackdropPress     :   props.onBackdropPress,
    onSwipeComplete     :   props.onSwipeComplete, 
    swipeDirection      :   props.swipeDirection,
    javaScriptEnabled   :   props.javaScriptEnabled,
    injectJavaScript    :   props.injectJavaScript,
    injectedJavaScript  :   props.injectedJavaScript
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

let ChangePasswordTextHeaderContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    align-self: stretch;


    flex: 0.1;
    border-radius: 20;
    width: 100%;
    background-color:  ${   props => (props.title === null) 
                            ? "#B41A1F" : 
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

let ChangePasswordTextHeader = (props) => {
    return (
        <ChangePasswordTextHeaderContainer {...props}>
            <ChangePasswordText {...props}>{ props.title || props.children }</ChangePasswordText>
        </ChangePasswordTextHeaderContainer>
    );
};


const WebViewStyled = styled(WebView).attrs((props) => ({
    source          :   props.source,
    originWhitelist :   props.originWhitelist,
    bounces         :   props.bounces
}))`
  flex              :   1;
`;

export { ModalStyled, WebViewContainer, WebViewStyled, ChangePasswordTextHeader };