import React from 'react';
import TouchableButton from './../../TouchableButton/TouchableButton.js';

import styled from 'styled-components/native';

import { AntDesign, FontAwesome5 } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

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

const SortFilterButtonsContainer = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
`;

const RequestPreviewContainer = styled.ScrollView.attrs((props) => ({
    contentContainerStyle : { flexGrow: 1 }
}))`
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: white;
`;

const FilterText = styled.Text`
    color: white;
    font-size: 17px;
`;


const NoRequestsMessage = styled.Text`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;

    color:  ${ props => props.districtPosition ?
                                      ( (props.districtPosition.toLowerCase() === "student") || props.renderAsStudent) ? 
                                          "#931E1D": "#1E6C93"
                                    : "#931E1D"
            };
    width: 100%;   
`;

const Button = ({ districtPosition, renderAsStudent, width, iconName, text, onPress }) => {
    return (
        <TouchableButton
            districtPosition    =   { districtPosition } 
            renderAsStudent     =   { renderAsStudent }
            width               =   { width || "120px" }
            bgColor             =   { ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93" }
            onPress             =   { onPress }
        >
            <FontAwesome5
                name    =   { iconName }
                size    =   { 20 }
                color   =   "white"
            >
                {
                    text ? (
                        <FilterText>{ text }</FilterText>

                    ) : null
                }
            </FontAwesome5>
        </TouchableButton>
    ); //end return statement
}; //end FilterButton

export { Container, RequestTypeTitle, SortFilterButtonsContainer, Button, RequestPreviewContainer, NoRequestsMessage};