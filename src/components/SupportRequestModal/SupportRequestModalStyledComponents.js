import React from 'react';
//import { Modal } from 'react-native';
import styled from 'styled-components/native';

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
  background-color  : red;

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

export { SafeAreaViewStyled, ModalStyled, ModalContentContainer, KeyboardAwareScrollViewStyled };


