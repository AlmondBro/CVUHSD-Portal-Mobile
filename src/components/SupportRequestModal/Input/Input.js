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

import { TextInput } from 'react-native-paper';

const Input = forwardRef(
    (props, ref) => {
        const { label, labelStyle, error, ...inputProps } = props;

        return (
            <View>
                {label && <Text>{label}</Text>}
                <TextInput
                    label  = {  label }
                    autoCapitalize  =   "none"
                    ref             =   { ref } 
                                        {...inputProps}
                />
                <Text>{error && error.message}</Text>
            </View>
        )
    }
); //end forwarRef()

export default Input;