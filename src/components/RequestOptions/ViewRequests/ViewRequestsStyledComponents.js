import React from 'react';

import styled from 'styled-components/native';

import { AntDesign, FontAwesome5 } from '@expo/vector-icons'; 

const baseMarginTop = 38;
const Container = styled.SafeAreaView`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    background-color: white;
`;

const RequestTypeTitle = styled.Text`
    margin-top: ${baseMarginTop + 12}px;
    margin-bottom: 12px;

    color:  ${props => ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"};
    font-family: SourceSansPro_400Regular_Italic;
    font-size: 18px;

    text-align: center;
`;

const RequestPreviewContainer = styled.ScrollView.attrs((props) => ({
    contentContainerStyle : { flexGrow: 1 }
}))`
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: white;
`;

export { Container, RequestTypeTitle, RequestPreviewContainer};