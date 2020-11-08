import React, { useRef, useEffect, Fragment } from 'react';
import { TextInput, KeyboardAvoidingView, findNodeHandle } from 'react-native';
import { ValidationOptions, FieldError } from 'react-hook-form';

const Form = ({ register, errors, setValue, validation, children }) => {
    useEffect(() => {
        (Array.isArray(children) ? [...children] : [children]).forEach((child) => {

            if (child.props.name)
      
              register({ name: child.props.name }, validation[child.props.name]);
      
          });
    }, [ register ]);

    return (
        <Fragment>
            {
                Array.isArray(children) ? [...children] 
                    :   [ children ].map((child) => {
                        return child.props.name ? (
                            <Component
                                onChangeText    =   { (v) => setValue(child.props.name, v, true) }
                                error           =   { errors[child.props.name] }
                                key             =   { child.props.name }
                                {...child.props}
                            />
                        ) : null
                    }) //end map()
            }
        </Fragment>
    ); //end return statement
}; //end Form()

export default Form;