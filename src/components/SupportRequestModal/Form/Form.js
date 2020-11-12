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

                                console.log("child.props:\t", child.props);
                                return child.props.name ? (
                                    <Input
                                        ref             =   { (instance) => { Inputs.current[i] = instance; }}
                                        onChangeText    =   { (value) => setValue(child.props.name, value, true) }
                                        onSubmitEditing =   { 
                                                                () => {
                                                                    Inputs.current[i + 1] 
                                                                        ?   (Inputs.current[i + 1].props.usePicker === true)
                                                                                ? Inputs.current[i + 1].togglePicker() 
                                                                                : Inputs.current[i + 1].focus() 
                                                                        :   Inputs.current[i].blur()

                                                                        console.log("child props:\t", child.props);
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