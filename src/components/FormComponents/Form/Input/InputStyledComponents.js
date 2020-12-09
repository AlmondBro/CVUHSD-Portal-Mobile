import React from 'react';
import { TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';

import { TextInput } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

import { FontAwesome } from '@expo/vector-icons'; 

const InputContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    width: 100%;

    margin-top: 12px;
    margin-bottom: 12px;
`;
const TextInputStyled = styled(TextInput).attrs(props => ({
    selectionColor      :   ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93",
    underlineColor      :   ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93",
    theme               :   props.theme,
    paddingVertical     :   0,
    paddingHorizontal   :   0,
    multiline           :   props.multiline

    // keyboardType    :   props.keyboardType,
    // textContentType :   props.textContentType
}))`

    display:  flex;
    flex-direction: column;
    align-self: center;

    position: relative;

    width: 90%;
    height: 48px;

    margin-top: 0px;
    margin-bottom: 0px;

    padding-top: 0px;
    padding-bottom: 0px;

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

    margin-top: 5px;   
    margin-bottom: 10px;   

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

    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 0px;
    padding-bottom: 0px;

    width: 90%;
    /* background-color: green; */

    color: ${props => ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93" }; 

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

const EyeSymbolContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    position: absolute;
    right: 30px;
    bottom: 11px;
    z-index: 3px;

    width: 30px;

    background-color: #F6F6F6;
`;
const EyeSymbol = ({ districtPosition, renderAsStudent, showPassword, onFocus, onPress }) => {
    return (
        <EyeSymbolContainer>
            <TouchableOpacity
                onFocus =   { onFocus }
                onPress =   { onPress }
                hitSlop =   {
                    {
                        top: 25, 
                        bottom: 25, 
                        left: 25, 
                        right: 25
                    }
                }
            >
                <FontAwesome 
                    name    =   { showPassword ? "eye-slash" : "eye" } 
                    size    =   {   30  } 
                    color   =   { ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93" } 
                />
            </TouchableOpacity>
        </EyeSymbolContainer>
    ); //end return statement
}; //return EyeSymbol


export {  InputContainer, LabelText, TextInputStyled, Select, ErrorText, ErrorTextItalicalized, DownArrow, EyeSymbol };
