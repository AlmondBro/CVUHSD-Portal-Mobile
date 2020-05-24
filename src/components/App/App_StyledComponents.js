import styled from 'styled-components/native';
import css from 'styled-css/native';

import SafeAreaView from "react-native-safe-area-view";

let UpdateAppView = styled.View`
    background-color: "#F4F7F9";
    margin-bottom: 12;
`; 

let UpdateTextDescription = styled.Text`
    font-size: 16; 
    padding-left: 8;
    padding-right: 8;
    align-self: "center";
    color: "#15516b";
`;

let BlueSectionContainer = styled.View`
    flex-direction: column;
    align-self: stretch;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
    width: ${props => props.width ? props.width : "auto"};
`;

let SafeAreaViewStyled = styled.SafeAreaView.attrs( (props) => ({
    forceInset: { bottom: 'never' },
}))`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-self: stretch;
    background-color: #F4F7F9;
    padding: 0;
    margin: 0
`;

let ScrollViewStyled = styled.ScrollView.attrs((props) => ({
    contentContainerStyle:  css`
        flex-direction: column;
        align-self: center;
        justify-content: flex-start;
        padding: 0;
        background-color: #F4F7F9;
        width: ${ props.width ? props.width : "auto" };
    `,
}))`
  flex: 1;
  
`;

export { UpdateAppView, UpdateTextDescription, ScrollViewStyled, SafeAreaViewStyled, BlueSectionContainer };