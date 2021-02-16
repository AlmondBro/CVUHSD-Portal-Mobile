import React, { useState } from 'react';
import { Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';

import { useForm } from 'react-hook-form';
import validation from './validation.js';

import Form from './../../FormComponents/Form/Form.js';
import Input from './../../FormComponents/Form/Input/Input.js';
import SubmitFooterContainer from './../../FormComponents/SubmitFooterContainer/SubmitFooterContainer.js';
import TouchableButton from './../../TouchableButton/TouchableButton.js';

import { Container, KeyboardAwareScrollViewStyled, Divider } from './RequestReplyStyledComponents.js';

import { PORTAL_LIVE_LINK, NODEJS_SERVER_PORT, IP_ADDRESS_DEV } from "@env";

/**
 * React functional component that displays the main metadata of a request, such as time and date submitted, subject, and description
 * @param { Object } navigation  object passed from React Navigation's Navigation Container. Houses methods to navigate across the different streams.
 * @param { string } districtPosition the role of the school district user
 * @param { boolean } renderAsStudent dictates whether a staff member is choosing to view the app through a student's eyes
 */
const RequestReply = ({ navigation, route, districtPosition, renderAsStudent, email }) => {
    const isDev = __DEV__;
    const metadataIconsSize = 22;

    const { alert } = Alert;

    const { handleSubmit, register, setValue, getValues, clearErrors, errors }  = useForm();

    let [ isLoading, setIsLoading ]         = useState(false);
    let [ submitEnabled, setSubmitEnabled ] = useState(true);

    const { id, subject, techEmail } = route.params;

    const replySubject = `Re: [Request ID: ##RE-${id}##]: ${subject} `;

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

    const sendReplyReq = async (id, description) => {
        const sendReplyReq_URL = `${isDev ? `http://${IP_ADDRESS_DEV}:${NODEJS_SERVER_PORT}` : `https://${PORTAL_LIVE_LINK}/server`}/helpdesk/request/${id}/reply`;
        const sendReplyReq_Headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Credentials": true
        };
    
        let sendReplyReqResult = await fetch(sendReplyReq_URL, {
            method: 'POST',
            headers: sendReplyReq_Headers,
            body: JSON.stringify({subject: replySubject, description, email: email})
        })
        .then((serverResponse) => serverResponse.json()) //Parse the JSON of the response
        .then((jsonResponse) => jsonResponse)
        .catch((error) => {
            console.error(`getReqConvos() Catching error:\t ${error}`);
            return;
        });

        return sendReplyReqResult;
    }; //end getReqConvos

    const validateReply = async (description) => {
        if (submitEnabled && !isLoading) {
            setSubmitEnabled(false);
            setIsLoading(true);

            let sendReplyReqResult = await sendReplyReq(id, description);
            
            setIsLoading(false);

            console.log("sendReplyReqResult:\t", sendReplyReqResult);
            
            if (sendReplyReqResult && !sendReplyReqResult.error) {
                alert("Success", `Successfully replied to request #${id}.`);

                setValue("description", null); //Empty the form
                setSubmitEnabled(true);
            } else {
                alert("Error", `Error in replying to request #${id}.`);

                setSubmitEnabled(true);
            }
        }
    };

    const submitReply = async () => {
        let formField = getValues();

        let { description } = formField;

        await validateReply(description);
    }; //end onSubmit


    return (
        <Container>
            <KeyboardAwareScrollViewStyled>
                {/* <TouchableOpacity activeOpacity={1.0}> */}
                    <Form {...{ register, setValue, getValues, validation, errors }} >
                      <Input 
                            // appWidth            =   { appWidth }
                            name                =   "description" 
                            label               =   "Respond to ticket:" 
                            placeHolderText     =   "What is the issue at hand?"

                            mode                =   "outlined"
                            theme               =   { inputColorsTheme }

                            secureTextEntry     =   { false } 

                            districtPosition    =   { districtPosition } 
                            renderAsStudent     =   { renderAsStudent }

                            noOuterLabel        =   { false }

                            numberOfLines       =   { 5 }

                            getValues           =   { getValues }

                            //AutoGrowingTextInput Properties
                            maxHeight            =   { 200 }
                            minHeight            =   { 105 }
                            placeholder          =   'Your Message'

                            textArea             =  { true }
                        /> 
                    </Form>
            
            <SubmitFooterContainer>
                <Divider
                    districtPosition    =   { districtPosition } 
                    renderAsStudent     =   { renderAsStudent }
                />
                <TouchableButton 
                    buttonTitle         =   "Respond" 
                    onPress             =     {  handleSubmit(submitReply) } 

                    color               =   "white"         
                    bgColor             =   { (districtPosition === "Student" || renderAsStudent) ? "#B41A1F" : "#1E6C93"}
                    
                    districtPosition    =   { districtPosition } 
                    renderAsStudent     =   { renderAsStudent }
                >
                    {
                        isLoading ? (
                            <ActivityIndicator 
                                size        =   "large" 
                                color       =   "white"
                                animating   =   { isLoading  }
                            />
                            )
                            : null
                    } 
                </TouchableButton>
            </SubmitFooterContainer>
                 
            {/* </TouchableOpacity> */}
            </KeyboardAwareScrollViewStyled>
        </Container>
    ); //end return statement
}; //end RequestPreview()

export default RequestReply;