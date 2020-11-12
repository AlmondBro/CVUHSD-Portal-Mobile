import React, { forwardRef } from 'react';
import { Text, StyleSheet } from 'react-native';

import RNPickerSelect from 'react-native-picker-select';
import { ValidationOptions, FieldError } from 'react-hook-form';

import { InputContainer, TextInputStyled, Select, ErrorText, DownArrow } from './InputStyledComponents.js';

const Input = forwardRef((props, ref) => {
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

        const DownArrowIcon  =  () => (
                                <DownArrow 
                                    districtPosition    =   { districtPosition }
                                    renderAsStudent     =   { renderAsStudent   }
                                />
        ); //end DownArrowIcon()

        return (
            <InputContainer>
                {label && !noOuterLabel && <Text>{label}</Text>}
                {
                    usePicker ? (
                        <RNPickerSelect
                        ref                         =   {   ref } 
                        usePicker                   =   {   usePicker   }

                        name                        =   {   name }
                        useNativeAndroidPickerStyle =   {   false   }
                        items                       =   { categories }
                        placeholder                 =   {
                                                            {
                                                                label: 'Select a sport...',
                                                                value: null,
                                                                color: 'red',
                                                            }
                                                        }

                        style                       =   {   {...pickerSelectStyle}  }
                        Icon                        =   {   DownArrowIcon }
                        onValueChange               =   {   (value) => console.log(value)   }
                        onDonePress                 =   {   () => onSubmitEditing()         }
                    />
                    ) : (
                        <TextInputStyled
                            ref                 =   { ref } 
                            districtPosition    =   { districtPosition }
                            renderAsStudent     =   { renderAsStudent }
        
                            name                =   { name }
                            theme               =   { theme }
                            mode                =   { mode }
                            label               =   {  label }
                            autoCapitalize      =   "none"
                            onSubmitEditing     =   { onSubmitEditing  }
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