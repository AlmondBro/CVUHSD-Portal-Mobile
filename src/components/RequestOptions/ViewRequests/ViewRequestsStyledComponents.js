import React from 'react';
import { TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';

import { AntDesign, FontAwesome5 } from '@expo/vector-icons'; 

const Container = styled.View`
    flex: 1;
    flex-direction: column;
    background-color: white;
`;

const RequestTypeTitle = styled.Text`
    color:  ${props => ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"};
    font-family: SourceSansPro_400Regular_Italic;
    font-size: 16px;
`;

export { Container, RequestTypeTitle };