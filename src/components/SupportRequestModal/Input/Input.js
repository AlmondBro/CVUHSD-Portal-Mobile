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

import {  TextInput } from 'react-native';
//import { TextInput } from 'react-native-paper';

const Input = forwardRef(
    (props, ref) => {
        const { label, labelStyle, error, name, ...inputProps } = props;

        return (
            <View>
                {label && <Text>{label}</Text>}
                <TextInput
                    label  = {  label }
                    autoCapitalize  =   "none"
                    onSubmitEditing =   { inputProps.onSubmitEditing  }
                    ref             =   { ref } 
                    name            =   { name }
                                        {...inputProps}
                />
                <Text>{error && error.message}</Text>
            </View>
        )
    }
); //end forwarRef()

export default Input;