import React, { useRef, useEffect, Fragment } from 'react';
import { TextInput, KeyboardAvoidingView, findNodeHandle, Text } from 'react-native';
import { ValidationOptions, FieldError } from 'react-hook-form';
import Input from '../Input/Input';

const Form = ({ register, errors, setValue, validation, children }) => {
    useEffect(() => {
        (Array.isArray(children) ? [...children] : [children]).forEach((child) => {

            if (child.props.name)
      
              register({ name: child.props.name }, validation[child.props.name]);
      
          });
    }, [ register ]);

    let InputComponent  = (InputComponent) => <InputComponent/>;

    console.log("children[0].props.name:\t", children[0].props.name);
    return (
        <Fragment>
            {
                ///*
                children.length > 1
                    ?   [ children ].map((child, i) => {
                            return true ? (
                                <Component
                                    ref             =   { (e) => { Inputs.current[i] = e; }}
                                    onChangeText    =   { (v) => setValue(child.props.name, v, true) }
                                    onSubmitEditing =   { 
                                                            () => {
                                                                Inputs.current[i + 1] 
                                                                    ?   Inputs.current[i + 1].focus()
                                                                    :   Inputs.current[i].blur()
                                                            }
                                                        }
                                    blurOnSubmit    =   { false }
                                    // error           =   { errors[child.props.name] }
                                    // key             =   { child.props.name }
                                    {...child.props}
                                />
                            ) : child
                        }) //end map()
                    :   [...children]
               // */
            }
            {/* <Text>
                { children[2].props.name }
            </Text> */}
        </Fragment>
    ); //end return statement
}; //end Form()

export default Form;