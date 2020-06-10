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



const WebViewStyled = styled(WebView).attrs((props) => ({
    source          :   props.source,
    originWhitelist :   props.originWhitelist,
    bounces         :   props.bounces
}))`
  flex              :   1;
`;

export { ModalStyled, WebViewStyled };