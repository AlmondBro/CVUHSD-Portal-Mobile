import React, { useState } from 'react';
import { Alert, Keyboard, ActivityIndicator } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { useForm } from 'react-hook-form';
import validation from './validation.js';

//Import subcomponents
import Header from './../FormComponents/Header/Header.js';
import Form from './../FormComponents/Form/Form.js';
import Input from './../FormComponents/Form/Input/Input.js';
import TouchableButton from './../TouchableButton/TouchableButton.js';

//Import styled components
import { SafeAreaViewStyled, ModalStyled, KeyboardAwareScrollViewStyled, SubmitContainer, Button, InstructionsText, Divider } from './ChangePasswordStyledComponents.js';

import { Reactotron } from './../../config/reactotron.dev.js';

const isDev = __DEV__;

const ChangePassword = ({ email, appWidth, districtPosition, site, renderAsStudent, showPasswordModal, setShowPasswordModal }) => {
    const { handleSubmit, register, setValue, getValues, clearErrors, errors }               = useForm();

    let [ isLoading, setIsLoading ]                                             = useState(false);
    let [ isRequestSuccessful, setIsRequestSuccessful ]                         = useState(null);
    let [ submitEnabled, setSubmitEnabled ]                                     = useState(true);

    const PORTAL_LIVE_LINK  = "portal.centinela.k12.ca.us";
    const IP_ADDRESS_DEV    = "10.2.64.175:3002";

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

    const changeUserPassword = async () => {
        let changePasswordReqResponse = "";

        let formField = getValues();
        const  { currentPassword, newPassword } = formField;

        const username = email.split('@')[0];

        if (submitEnabled && (isLoading === false) ) {
            Reactotron.log("Making API call...");

            setIsLoading(true);
    
            setSubmitEnabled(false);
        
            const changePassword_URL = `${isDev ? `http://${IP_ADDRESS_DEV}` : `http://${PORTAL_LIVE_LINK}/server`}/user-ops/password/update`;
            const changePassword_headers = {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                "Access-Control-Allow-Credentials": true
            };
        
            changePasswordReqResponse = await fetch(changePassword_URL, {
                method: 'POST',
                headers: changePassword_headers,
                body: JSON.stringify({ username, currentPassword, newPassword } )
            })
            .then((serverResponse) => {
                Reactotron.log("serverResponse:\t", serverResponse);
                return serverResponse.json();
            }) //Parse the JSON of the response
            .then((jsonResponse) => jsonResponse)
            .catch((error) => {
                Reactotron.error(`Catching error:\t ${error}`);

                setSubmitEnabled(true);
                setIsLoading(false); 

                Alert.alert(
                    "Error on Submit", 
                    `${error}`, 
                    [
                        {
                            text: "OK",
                            style: "cancel"
                        }
                    ]
                ); //end alert() call
            });
        
            Reactotron.log("submitReqResponse:\t", changePasswordReqResponse);
    
            if (changePasswordReqResponse) {
                const { error, message } = changePasswordReqResponse;
        
                setIsLoading(false);
    
                if (error === false) {
                    setIsRequestSuccessful(true);

                    setSubmitEnabled(false);
                    setIsLoading(false); 

                    Alert.alert(
                        "Success", 
                        `Password has been changed`, 
                        [
                            {
                                text: "OK",
                            }
                        ]
                    ); //end alert() call
        
                    setTimeout(() => {
                        //Reset the form field after submitting.
        
                        setShowPasswordModal(false);
                        setSubmitEnabled(true);
                        
                        setValue("currentPassword", null);
                        setValue("newPassword", null);
                        setValue("newPasswordConfirmed", null);
                    }, 800);
                
                } else {
                    setIsRequestSuccessful(false);
                    setSubmitEnabled(true);

                    setIsLoading(false); 

                    Alert.alert(
                        "Error", 
                        message, 
                        [
                            {
                                text: "OK",
                            }
                        ]
                    ); //end alert() call
                } //end inner-else statement
            } //end outer if-statement, checking to see if there is a response
        } else  {

            setSubmitEnabled(true);
            setIsLoading(false); 

            Alert.alert(
                "Duplicate Update", 
                "Duplicate Password Updates Not Allowed", 
                [
                    {
                        text: "OK",
                        style: "cancel"
                    }
                ]
            ); //end alert() call
            
            Reactotron.log("Duplicate Password Updates Not Allowed");
        } //end else-statement
        
        return changePasswordReqResponse;
    }; //end submitTicket()

    const onModalDismiss = () => {
        clearErrors();
        setShowPasswordModal(false);
        setSubmitEnabled(true);
    }; //end onModalDismiss()

    const onSubmit = () => {
        Reactotron.log("onSubmit():\t", getValues());

        let { newPassword, newPasswordConfirmed } = getValues();

        if (newPassword === newPasswordConfirmed) {
            changeUserPassword();
        } else {
            Alert.alert(
                "Password Mismatch", 
                `New password and its confirmation do match`, 
                [
                    {
                        text: "OK",
                        style: "cancel"
                    }
                ]
            ); //end alert() call
        }
    }; //end onSubmit()

    return (
            <ModalStyled 
                animationType       =   "slide"
                presentationStyle   =   "pageSheet"

                // swipeDirection      =   { ["up", "down"] }
                hasBackdrop         =   { false }
                isVisible           =   { showPasswordModal }  
                
                onDismiss           =   { onModalDismiss }
                // onBackdropPress     =   { () => setShowRequestModal(false) }
                // onSwipeComplete     =   { () => setShowRequestModal(false) }
            >
                <SafeAreaViewStyled>
                            <Header
                                title               =   "Change Password" 
                                faIcon              =   "lock" 
                                
                                districtPosition    =   { districtPosition } 
                                renderAsStudent     =   { renderAsStudent }

                                closeModal          =   { () => setShowPasswordModal(false) }
                            />
                        <KeyboardAwareScrollViewStyled
                            keyboardShouldPersistTaps   =   { true } //Enable this so that the input form field for passwords stay focused even when the toggle visibility eye symbol is tapped
                        >
                            <InstructionsText
                              districtPosition    =   { districtPosition } 
                              renderAsStudent     =   { renderAsStudent }
                            >
                                Fill the form fields to change your password:
                            </InstructionsText>
                            <Form {...{ register, setValue, getValues, validation, errors }}>
                                <Input 
                                    appWidth            =   { appWidth }

                                    name                =   "currentPassword" 
                                    label               =   "Current Password:" 
                                    placeHolderText     =   "Current Password..."

                                    mode                =   "outlined"
                                    theme               =   { inputColorsTheme }

                                    districtPosition    =   { districtPosition } 
                                    renderAsStudent     =   { renderAsStudent }

                                    usePicker           =   { false }
                                    noOuterLabel        =   { false }

                                    type                =   "password"

                                    keyboardType        =   "default"
                                    textContentType     =   "password"
                                />
                                
                                <Input 
                                    appWidth            =   { appWidth }

                                    name                =   "newPassword" 
                                    label               =   "New Password:"
                                    placeHolderText     =   "New Password..."

                                    mode                =   "outlined"
                                    theme               =   { inputColorsTheme }

                                    districtPosition    =   { districtPosition } 
                                    renderAsStudent     =   { renderAsStudent }

                                    usePicker           =   { false }
                                    noOuterLabel        =   { false }

                                    type                =   "password"

                                    keyboardType        =   "default"
                                    textContentType     =   "newPassword"
                                />

                                <Input 
                                    appWidth            =   { appWidth }

                                    name                =   "newPasswordConfirmed" 
                                    label               =   "Confirmed New Password:"
                                    placeHolderText     =   "Confirm New Password..."

                                    mode                =   "outlined"
                                    theme               =   { inputColorsTheme }

                                    districtPosition    =   { districtPosition } 
                                    renderAsStudent     =   { renderAsStudent }

                                    usePicker           =   { false }
                                    noOuterLabel        =   { false }

                                    type                =   "password"

                                    keyboardType        =   "default"
                                    textContentType     =   "newPassword"
                                />
                            </Form>

                            <TouchableWithoutFeedback
                                onPress = {() => Keyboard.dismiss() }
                                hitSlop =   {
                                    {
                                        top: 25 
                                    }
                                }
                            >
                                <SubmitContainer>
                                    <Divider
                                        districtPosition    =   { districtPosition } 
                                        renderAsStudent     =   { renderAsStudent }
                                    />

                                    <TouchableButton 
                                        buttonTitle         =   "Update" 
                                        onPress             =     {  handleSubmit(onSubmit) } 

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
                                </SubmitContainer>
                            </TouchableWithoutFeedback>

                        </KeyboardAwareScrollViewStyled>
                        
                    </SafeAreaViewStyled>
            </ModalStyled>  
    ); //end return statement
}; //end SupportRequestModal()

export default ChangePassword;