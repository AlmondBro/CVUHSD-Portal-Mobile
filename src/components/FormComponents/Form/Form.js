import React, { useRef, useEffect, Fragment } from 'react';
import Input from './Input/Input';

import { formatPhoneNumber } from './../../../utility-functions.js';

const Form = ({ register, errors, setValue, getValues, validation, children }) => {
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

                                const onChangeText = (value) => {
                                    if (child.props.keyboardType === "phone-pad") {
                                        setValue(child.props.name, formatPhoneNumber(value), true); 
                                    } else {
                                        setValue(child.props.name, value, true); 
                                    }
                                }; //onChangeText()

                                // console.log("child.props:\t", child.props);
                                return child.props.name ? (
                                    <Input
                                        ref             =   { (instance) => { Inputs.current[i] = instance; }}
                                        onChangeText    =   { onChangeText }
                                        onSubmitEditing =   { 
                                                                () => {
                                                                    Inputs.current[i + 1] 
                                                                        ?   (Inputs.current[i + 1].props.usePicker === true)
                                                                                ? Inputs.current[i + 1].togglePicker() 
                                                                                : Inputs.current[i + 1].focus() 
                                                                        :   Inputs.current[i].blur()

                                                                        // console.log("child props:\t", child.props);
                                                                }
                                                            }
                                        blurOnSubmit    =   { false }
                                        getValues       =   { getValues }
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