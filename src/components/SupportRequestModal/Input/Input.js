import React, { forwardRef } from 'react';

import RNPickerSelect from 'react-native-picker-select';

import color from 'color';

import { FontAwesome } from '@expo/vector-icons'; 

import {
    View,
    Text,
    StyleSheet,
    ViewStyle,
    TextStyle,
    TextInputProps,
  } from 'react-native';

import { ValidationOptions, FieldError } from 'react-hook-form';

import { InputContainer, TextInputStyled, ErrorText } from './InputStyledComponents.js';

const Input = forwardRef(
    (props, ref) => {
        const { appWidth, districtPosition, renderAsStudent, usePicker, label, labelStyle, error, name, onSubmitEditing, noOuterLabel, theme, placeholder, mode,...inputProps } = props;

        const pickerSelectStyle = StyleSheet.create({
            placeholder: {
                color:  districtPosition ?
                            ( (districtPosition === "student") || renderAsStudent === true) ? 
                                " rgba(147, 30, 29, 0.6)": "rgba(30, 108, 147, 0.6)"
                            : "rgba(147, 30, 29, 0.6)",
            },
            inputIOS: {
                position: "relative",
                width: (appWidth * 0.9),
                fontSize: 16,
                paddingVertical: 12,
                paddingHorizontal: 10,
                borderWidth: 1,
                borderColor:  districtPosition ?
                                ( (districtPosition === "student") || renderAsStudent === true) ? 
                                    " rgba(147, 30, 29, 0.5)": "rgba(30, 108, 147, 0.5)"
                                : "rgba(147, 30, 29, 0.5)",
                borderRadius: 10,
                backgroundColor: '#F6F6F6',
                color: ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93",
                paddingRight: 30, // to ensure the text is never behind the icon
            },
            inputAndroid: {
                position: "relative",
                width: (appWidth * 0.9),
                fontSize: 16,
                paddingVertical: 12,
                paddingHorizontal: 10,
                borderWidth: 1,
                borderColor:  districtPosition ?
                                ( (districtPosition === "student") || renderAsStudent === true) ? 
                                    " rgba(147, 30, 29, 0.5)": "rgba(30, 108, 147, 0.5)"
                                : "rgba(147, 30, 29, 0.5)",
                borderRadius: 10,
                backgroundColor: '#F6F6F6',
                color: ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93",
                paddingRight: 30, // to ensure the text is never behind the icon
            },
            iconContainer: {
                position: 'absolute',
                left: '90%',
                color: ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93",
                top: 16,
                translateX: -50,
            }
          });

        const staffCategories = [
            { label: "Computer Issue"},
            { label: "Printer Issue"},
            { label: "Projector Issue"},
            { label: "Password Issue"},
            { label: "Canvas"},
            { label: "PowerSchool"},
            { label: "Illuminate"},
            { label: "Google"},
            { label: "Wi-fi Issue"},
            { label: "Eno Pen -- Board"},
            { label: "Software Installation"},
            { label: "Student Chromebook"},
            { label: "Phone Issue"},
            { label: "Other"}
        ];

        const studentCategories = [
            { label: "Password Issue"},
            { label: "Canvas"},
            { label: "PowerSchool"},
            { label: "Illuminate"},
            { label: "Google"},
            { label: "Wi-fi Issue"},
            { label: "Software Installation"},
            { label: "Student Chromebook"},
            { label: "Other"}
        ];

        const categories = (districtPosition === "student") ? studentCategories : staffCategories;

        return (
            <InputContainer>
                {label && !noOuterLabel && <Text>{label}</Text>}
                {
                    usePicker ? (
                        <RNPickerSelect
                        ref                 =   { ref } 
                        name                =   { name }
                        onValueChange={(value) => console.log(value)}
                        style={{...pickerSelectStyle}}
                        items={ categories}
                        placeholder={{
                            label: 'Select a sport...',
                            value: null,
                            color: 'red',
                          }
                        }
                        useNativeAndroidPickerStyle={false}
                        Icon={() =>  <FontAwesome 
                            name    =   "angle-down" 
                            size    =   {20} 
                            color   =   { ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93" } 
                        />}

                        usePicker   =   {   usePicker   }

                        onDonePress = { () => onSubmitEditing() }
                    />
                    ) : (
                        <TextInputStyled
                        districtPosition    =   { districtPosition }
                        renderAsStudent     =   { renderAsStudent }
    
                        label               = {  label }
                        autoCapitalize      =   "none"
                        onSubmitEditing     =   { onSubmitEditing  }
                        ref                 =   { ref } 
                        name                =   { name }
                        theme               =   { theme }
                        mode                =   { mode }
                                                {...inputProps}
                    />
                    )
                }
              
                <ErrorText>{error && error.message}</ErrorText>
            </InputContainer>
        )
    }
); //end forwarRef()

export default Input;