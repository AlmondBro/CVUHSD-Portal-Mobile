import React from 'react';
import styled from 'styled-components/native';

import { TextInput } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

import { FontAwesome } from '@expo/vector-icons'; 

import css from 'styled-css/native';

const InputContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 100%;

    margin-top: 10;
    margin-bottom: 10;
`;
const TextInputStyled = styled(TextInput).attrs(props => ({
    selectionColor  :   ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93",
    underlineColor  :   ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93",
    theme           :   props.theme
}))`

    display:  flex;
    flex-direction: column;
    align-self: center;

    position: relative;

    width: 90%;

    margin-top: 0;
    margin-bottom: 0;

    padding-top: 0;
    padding-bottom: 0;

    color:  ${props => ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"};

    border-radius: 50px;
`;

const ErrorText = styled.Text`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    font-family: SourceSansPro_700Bold;
    font-weight: bold;

    color:  ${props => ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"};

    width: 90%;

    margin-top: 5;   
    margin-bottom: 10;   

`;

const ErrorTextItalicalized = styled(ErrorText)`
    font-family: SourceSansPro_400Regular_Italic;
`;

const DownArrow  = ({ districtPosition, renderAsStudent }) =>  (
                        <FontAwesome 
                            name    =   "angle-down" 
                            size    =   {20} 
                            color   =   { ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93" } 
                        />
); //end DownArrow()

const LabelText = styled.Text`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;

    width: 90%;
    /* background-color: green; */

    color: ${props => ( (props.districtPosition === "student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93" }; 

    font-weight: bold;
`;

const Select = styled(RNPickerSelect).attrs(props => ({
    style : {
        backgroundColor: "red"
    }
}))`
    color: red !important;

    background-color: green !important;
`;
export {  InputContainer, LabelText, TextInputStyled, Select, ErrorText, ErrorTextItalicalized, DownArrow };
