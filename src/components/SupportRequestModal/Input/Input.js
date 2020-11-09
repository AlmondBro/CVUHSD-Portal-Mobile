import React, { forwardRef } from 'react';

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
        const { districtPosition, renderAsStudent,  label, labelStyle, error, name, onSubmitEditing, noOuterLabel, theme,  mode,...inputProps } = props;

        return (
            <InputContainer>
                {label && !noOuterLabel && <Text>{label}</Text>}
                <TextInputStyled
                    districtPosition    =   { districtPosition }
                    renderAsStudent     =   { renderAsStudent }

                    label               = {  label }
                    autoCapitalize      =   "none"
                    onSubmitEditing     =   { onSubmitEditing  }
                    ref                 =   { ref } 
                    name                =   { name }
                    theme               =   { theme  }
                    mode                =   { mode }
                                            {...inputProps}
                />
                <ErrorText>{error && error.message}</ErrorText>
            </InputContainer>
        )
    }
); //end forwarRef()

export default Input;