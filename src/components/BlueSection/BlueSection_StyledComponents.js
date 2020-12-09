import styled from 'styled-components/native';

import { WebView } from 'react-native-webview';
import Collapsible from 'react-native-collapsible';

let BlueSectionContainerView = styled.View`
    flex-direction: column;
    align-self: stretch;
    justify-content: center;
`;

let BlueSectionHeaderTouchableOpacity = styled.TouchableOpacity` 
    flex-direction: row;
    align-self: stretch;
    justify-content: center;

    background-color: ${props => (props.title === "Student" || props.renderAsStudent) ? "#B41A1F" : "#1E6C93" };
    
    padding-top: 8px;
    padding-bottom: 8px;

    border-bottom-color: #F4F7F9;
    border-bottom-width: ${props => props.expanded ? 1 : 0};
`;

let BlueSectionHeaderText = styled.Text`
    font-family: 'SourceSansPro_400Regular';
    
    color: white;
    font-size: 20px;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    text-align: center;
    margin-left: auto;
`;

const ToggleButtonTouchableOpacity = styled.TouchableOpacity`
    background-color: white;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 4px;
    padding-right: 3px;
    border-radius: 30px;
    border-width: 0px;
    height: 35px;
    width: 35px;

    margin-left: auto;

    margin-right: 8px;
`;

let ToggleButtonText  = styled.Text`
    font-size: 18px;
    text-align: center;
    color: ${props => (props.title === "Student" || props.renderAsStudent) ? "#B41A1F" : "#1E6C93" };
`;

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
    align-self: center;
    height: 150px;
    width: 250px;
    background-color: #E1E5E8;
`;

const CollapsibleStyled = styled(Collapsible)`
    flex-direction: column;
    justify-content: center;
    background-color: #E1E5E8;
`;
export { BlueSectionContainerView, BlueSectionHeaderTouchableOpacity, BlueSectionHeaderText, ToggleButtonTouchableOpacity, ToggleButtonText, WebViewStyled, CollapsibleStyled };