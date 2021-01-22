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


const FilterButton = ({ districtPosition, renderAsStudent }) => {
    return (
        <TouchableButton
            districtPosition    =   { districtPosition } 
            renderAsStudent     =   { renderAsStudent }
            width               =   { "100px" }
            bgColor             =   { ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93" }
        >
            <FontAwesome5
                name    =   "filter"
                size    =   { 20 }
                color   =   "white"
            >
            <FilterText>Filter</FilterText>
            </FontAwesome5>
        </TouchableButton>
    ); //end return statement
}; //end FilterButton


const SortButton = ({ districtPosition, renderAsStudent }) => {
    return (
        <TouchableButton
            districtPosition    =   { districtPosition } 
            renderAsStudent     =   { renderAsStudent }
            width               =   { "80px" }
            bgColor             =   { ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93" }
        >
            <FontAwesome5
                name    =   "sort"
                size    =   { 20 }
                color   =   "white"
            >
            {/* <FilterText>Sort</FilterText> */}
            </FontAwesome5>
        </TouchableButton>
    ); //end return statement
}; //end FilterButton

export { Container, RequestTypeTitle, SortFilterButtonsContainer, FilterButton, SortButton, RequestPreviewContainer};