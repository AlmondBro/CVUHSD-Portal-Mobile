import React, { useRef, useEffect, Fragment } from 'react';
import { TextInput, KeyboardAvoidingView, findNodeHandle, Text, Alert } from 'react-native';
import { ValidationOptions, FieldError } from 'react-hook-form';
import Input from './../Input/Input';

const Form = ({ register, errors, setValue, validation, children }) => {
    const Inputs = useRef([]);
    
    useEffect(() => {
        (Array.isArray(children) ? [...children] : [children]).forEach((child) => {
            let { name } = child.props;

            if (name) {
              register({ name: name }, validation[name]);
            }

          });
    }, [ register ]);

    return (
            <Fragment>
            {
                // /*
                (children.length > 1)
                    ? [ ...children ].map((child, i) => {
                                return child.props.name ? (
                                    <Input
                                        ref             =   { (input) => { Inputs.current[i] = input; }}
                                        onChangeText    =   { (v) => setValue(child.props.name, v, true) }
                                        onSubmitEditing =   { 
                                                                () => {
                                                                    Inputs.current[i + 1] 
                                                                        ?   Inputs.current[i + 1].focus()
                                                                        :   Inputs.current[i].blur()
                                                                }
                                                            }
                                        blurOnSubmit    =   { false }
                                        error           =   { errors[child.props.name] }
                                        key             =   { child.props.name }
                                        {...child.props}
                                    />
                                ) : child
                            }) //end map()
                    :   [...children]
               // */
            }
            </Fragment>
    ); //end return statement
}; //end Form()

export default Form;