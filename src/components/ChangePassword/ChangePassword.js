import React, { useState } from 'react';

import Header from './../FormComponents/Header/Header.js';
import Form from './../FormComponents/Form/Form.js';
import Input from './../FormComponents/Form/Input/Input.js';

import { useForm } from 'react-hook-form';
import validation from './validation.js';

import SubmitFooterContainer from './../FormComponents/SubmitFooterContainer/SubmitFooterContainer.js';

import TouchableButton from './../TouchableButton/TouchableButton.js';

import { SafeAreaViewStyled, ModalStyled, KeyboardAwareScrollViewStyled, Button, InstructionsText, Divider } from './ChangePasswordStyledComponents.js';

import { Reactotron } from './../../config/reactotron.dev.js';

const ChangePassword = ({ appWidth, districtPosition, site, renderAsStudent, showPasswordModal, setShowPasswordModal }) => {
    const { handleSubmit, register, setValue, getValues, errors }               = useForm();

    let [ isLoading, setIsLoading ]                                             = useState(false);
    let [ isRequestSuccessful, setIsRequestSuccessful ]                         = useState(null);
    let [ submitEnabled, setSubmitEnabled ]                                     = useState(true);

    const IP_ADDRESS_DEV = "10.4.174.90.41";

    const changeUserPassword = async () => {
        let changePasswordReqResponse = "";

        let formField = getValues();

        if (submitEnabled && (isLoading === false) ) {
            setIsLoading(true);
    
            setSubmitEnabled(false);

            const fullName = firstName + " " + lastName;
        
            const changePassword_URL = `${isDev ? `http://${IP_ADDRESS_DEV}:3002` : "/server"}/user-ops/password/update`;
            const changePassword_headers = {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                "Access-Control-Allow-Credentials": true
            };
        
            changePasswordReqResponse = await fetch(changePassword_URL, {
                method: 'POST',
                headers: changePassword_headers,
                body: JSON.stringify({ ...formField} )
            })
            .then((serverResponse) => serverResponse.json()) //Parse the JSON of the response
            .then((jsonResponse) => jsonResponse)
            .catch((error) => {
                console.error(`Catching error:\t ${error}`);
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
        
            //window.alert(JSON.stringify(submitReqResponse));
        
            console.log("submitReqResponse:\t", changePasswordReqResponse);
    
            if (changePasswordReqResponse) {
                const { error: errorStatus, message } = changePasswordReqResponse;
        
                setIsLoading(false);
    
                if (errorStatus === "false") {
        
                    setIsRequestSuccessful(true);

                    Alert.alert(
                        "Change Password Successful", 
                        `Password has been updated`, 
                        [
                            {
                                text: "OK",
                            }
                        ]
                    ); //end alert() call
        
                    setTimeout(() => {
                        //Reset the form field after submitting.
        
                        setShowRequestModal(false);
                        setSubmitEnabled(true);
                        
                        setValue("currentPassword", null);
                        setValue("newPassword", null);
                        setValue("newPasswordConfirmed", null);
                    }, 800);
                
                } else {
                    setIsRequestSuccessful(false);
                    setSubmitEnabled(true);

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
        } else{
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
            
            console.log("Duplicate Password Updates Not Allowed");
        } //end else-statement
        
        return changePasswordReqResponse;
    }; //end submitTicket()

    const onSubmit = (formValues) => {
        Reactotron.log("onSubmit():\t", formValues);

        changeUserPassword();
    }; //end onSubmit()

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

    const staffCategories = [
        { label: "Computer Issue", value: "Computer Issue" },
        { label: "Printer Issue", value: "Printer Issue" },
        { label: "Projector Issue", value: "Projector Issue"},
        { label: "Password Issue", value: "Password Issue"},
        { label: "Canvas", value: "Canvas" },
        { label: "PowerSchool", value: "PowerSchool"},
        { label: "Illuminate", value: "Illuminate"},
        { label: "Google", value: "Google"},
        { label: "Wi-fi Issue", value: "Wi-fi Issue"},
        { label: "Eno Pen -- Board", value: "Eno Pen -- Board"},
        { label: "Software Installation", value: "Software Installation" },
        { label: "Student Chromebook", value: "Student Chromebook"},
        { label: "Phone Issue", value: "Phone Issue"},
        { label: "Other", value: "Other"}
    ];

    const studentCategories = [
        { label: "Password Issue", value: "Password Issue"},
        { label: "Canvas", value: "Canvas" },
        { label: "PowerSchool", value: "PowerSchool"},
        { label: "Illuminate", value: "Illuminate"},
        { label: "Google", value: "Google"},
        { label: "Wi-fi Issue", value: "Wi-fi Issue"},
        { label: "Software Installation", value: "Software Installation"},
        { label: "Student Chromebook", value: "Student Chromebook"},
        { label: "Other", value: "Other"}
    ];

    const categories = (districtPosition === "Student") ? studentCategories : staffCategories;
      
    const locations =   (districtPosition === "Student") ? [ {
        label: site, 
        value: site
    } ] :
    [   { label: "Lawndale High School", value: "Lawndale High School" }, 
        { label: "Leuzinger High School", value: "Leuzinger High School" }, 
        { label: "Hawthorne High School", value: "Hawthorne High School"}, 
        { label: "District Office", value: "District Office"}, 
        { label: "Lloyde High School", value: "Lloyde High School"}, 
        { label: "CV Independent Study", value: "CV Independent Study"}, 
        { label: "Service Center", value: "Service Center"}
    ];

    const pickerPlaceHolder = (pickerText) => ({
            label:  (pickerText || 'Select a category type...') ,
            value: null,
            color:  ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93",
    });
           
    return (
            <ModalStyled 
                animationType       =   "slide"
                presentationStyle   =   "pageSheet"

                // swipeDirection      =   { ["up", "down"] }
                hasBackdrop         =   { false }
                isVisible           =   { showPasswordModal }  
                
                onDismiss           =   { () => setShowPasswordModal(false) }
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
                        <KeyboardAwareScrollViewStyled>
                        
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

                                    secureTextEntry     =   { false } 

                                    districtPosition    =   { districtPosition } 
                                    renderAsStudent     =   { renderAsStudent }

                                    usePicker           =   { false }
                                    noOuterLabel        =   { false }

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

                                    secureTextEntry     =   { false } 

                                    districtPosition    =   { districtPosition } 
                                    renderAsStudent     =   { renderAsStudent }

                                    usePicker           =   { false }
                                    noOuterLabel        =   { false }

                                    keyboardType        =   "default"
                                    textContentType     =   "newPassword"
                                />
                            </Form>
                        </KeyboardAwareScrollViewStyled>
                        <SubmitFooterContainer bottomPosition={55}>
                            <Divider
                                districtPosition    =   { districtPosition } 
                                renderAsStudent     =   { renderAsStudent }
                            />

                            <TouchableButton 
                                buttonTitle         =   "Change Password" 
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
                        </SubmitFooterContainer>
                    </SafeAreaViewStyled>
            </ModalStyled>  
    ); //end return statement
}; //end SupportRequestModal()

export default ChangePassword;