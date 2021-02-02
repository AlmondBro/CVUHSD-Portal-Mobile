import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { useForm } from 'react-hook-form';
import validation from './validation.js';

import Form from './../../FormComponents/Form/Form.js';
import Input from './../../FormComponents/Form/Input/Input.js';

import { Container, KeyboardAwareScrollViewStyled, TextArea } from './RequestReplyStyledComponents.js';


/**
 * React functional component that displays the main metadata of a request, such as time and date submitted, subject, and description
 * @param { Object } navigation  object passed from React Navigation's Navigation Container. Houses methods to navigate across the different streams.
 * @param { string } districtPosition the role of the school district user
 * @param { boolean } renderAsStudent dictates whether a staff member is choosing to view the app through a student's eyes
 */
const RequestReply = ({ navigation, route, isLoading, districtPosition, renderAsStudent, email }) => {
    const metadataIconsSize = 22;

    const { handleSubmit, register, setValue, getValues, clearErrors, errors }  = useForm();

    const inputColorsTheme  = {
        colors: {
            primary     :   ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93",
            background  :   "#F6F6F6",
            text        :   ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93",  
            placeholder :   districtPosition ?
                            ( (districtPosition === "Student") || (renderAsStudent === true) ) ? 
                                " rgba(147, 30, 29, 0.5)": "rgba(30, 108, 147, 0.5)"
                            : "rgba(147, 30, 29, 0.5)",
        }
    }; //end inputColorsTheme


    return (
        <Container>
            <KeyboardAwareScrollViewStyled>
                <TouchableOpacity activeOpacity={1.0}>
                    {/* <Form {...{ register, setValue, getValues, validation, errors }} >
                      <Input 
                            // appWidth            =   { appWidth }

                            name                =   "description" 
                            label               =   "Description:" 
                            placeHolderText     =   "What is the issue at hand?"

                            mode                =   "outlined"
                            theme               =   { inputColorsTheme }

                            secureTextEntry     =   { false } 

                            districtPosition    =   { districtPosition } 
                            renderAsStudent     =   { renderAsStudent }

                            noOuterLabel        =   { false }

                            numberOfLines       =   { 5 }

                            height              =   { 300 }
                            getValues           =   { getValues }
                        /> 
                    </Form> */}
                    <TextArea 
                        maxHeight={200}
                        minHeight={105}
                        placeholder =   {'Your Message'} 
                    />
                </TouchableOpacity>
            </KeyboardAwareScrollViewStyled>
        </Container>
    ); //end return statement
}; //end RequestPreview()

export default RequestReply;