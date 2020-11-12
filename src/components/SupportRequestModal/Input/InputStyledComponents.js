import React from 'react';
import { StyleSheet } from 'react-native';

import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';
// import {  TextInput } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { FontAwesome } from '@expo/vector-icons'; 

import css from 'styled-css/native';

const InputContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 100%;

    margin-top: 3;
    margin-bottom: 3;
`;
const TextInputStyled = styled(TextInput).attrs(props => ({
    selectionColor  :   ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93",
    underlineColor  :   ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93",
    theme           :   props.theme
}))`
    position: relative;

    margin-top: 0;
    padding-top: 0;
    display:  flex;
    flex-direction: column;
    align-self: center;

    width: 90%;

    border-radius: 50px;

    color:  ${props => ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"};
`;

const ErrorText = styled.Text`
    display: flex;
    color:  red;
    font-weight: bold;
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
export {  InputContainer, LabelText, TextInputStyled, Select, ErrorText, DownArrow };
