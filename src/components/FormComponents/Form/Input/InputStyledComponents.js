import React from 'react';
import { TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';

//Import 3rd-party components
import { TextInput } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';

import { FontAwesome } from '@expo/vector-icons'; 

const baseMarginTop = 38;
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

    ${
        props => props.height ? `height: ${props.height};` : null
    }
`;

const ErrorText = styled.Text`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    font-family: 'SourceSansPro_700Bold';
    font-size: 11px;

    color:  ${props => ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"};

    width: 90%;

    margin-top: 5px;   
    margin-bottom: 10px;   

`;

const ErrorTextItalicalized = styled(ErrorText)`
    font-family: 'SourceSansPro_400Regular_Italic';
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

    font-family: "SourceSansPro_600SemiBold";
    font-size: 14px;
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

const TextArea = styled(AutoGrowingTextInput)`
    position: relative;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex: 1;

    font-size: 16px;
   
    width: ${props => props.width ? props.width : "90%"};
    color: ${props => ( (props.districtPosition === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93" }; 
    background-color:  #F6F6F6;


    /* margin-top: ${baseMarginTop + "px"}; */
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : "100px"};
    padding-left: 10px /* Indent space */;

    border-width: 1px;
    border-color: ${    props => props.districtPosition ?
                                            ( (props.districtPosition.toLowerCase() === "student") || props.renderAsStudent) ? 
                                                `rgba(147, 30, 29, 0.47)`: `rgba(30, 108, 147, 0.47)`
                                            :   `rgba(147, 30, 29, 0.47)`
                        };
    border-radius: 10px;
`;


export {  InputContainer, LabelText, TextInputStyled, TextArea, Select, ErrorText, ErrorTextItalicalized, DownArrow, EyeSymbol };
