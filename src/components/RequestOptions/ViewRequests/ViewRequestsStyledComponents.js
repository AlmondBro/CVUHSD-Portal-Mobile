import React from 'react';

import styled from 'styled-components/native';

import { AntDesign, FontAwesome5 } from '@expo/vector-icons'; 

const Container = styled.SafeAreaView`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    background-color: white;
`;

const RequestTypeTitle = styled.Text`
    margin-top: 38px;
    color:  ${props => ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"};
    font-family: SourceSansPro_400Regular_Italic;
    font-size: 18px;

    text-align: center;
`;

const RequestPreviewContainer = styled.View`
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: white;
`;

export { Container, RequestTypeTitle, RequestPreviewContainer};