import React, { useState} from 'react';
import { Alert, ActivityIndicator } from 'react-native';

import Header from './../FormComponents/Header/Header.js';
import Form from './../FormComponents/Form/Form.js';
import Input from './../FormComponents/Form/Input/Input.js';

import SubmitFooterContainer from './../FormComponents/SubmitFooterContainer/SubmitFooterContainer.js';

import TouchableButton from './../TouchableButton/TouchableButton.js';

import { useForm } from 'react-hook-form';
import validation from './validation.js';

import { SafeAreaViewStyled, ModalStyled, KeyboardAwareScrollViewStyled, Button, InstructionsText, Divider } from './SupportRequestModalStyledComponents.js';

import { Reactotron } from './../../config/reactotron.dev.js';

const isDev = __DEV__;

const SupportRequestModal = ({ appWidth, email, firstName, lastName, districtPosition, site, renderAsStudent, showRequestModal, setShowRequestModal }) => {
    let [ isLoading, setIsLoading ]                                             = useState(false);
    let [ isRequestSuccessful, setIsRequestSuccessful ]                         = useState(null);
    let [ submitEnabled, setSubmitEnabled ]                                     = useState(true);

    let [ topMargin, setTopMargin ]                                             = useState(0);
    let [ bottomMargin, setBottomMargin ]                                       = useState(0);

    const { handleSubmit, register, setValue, getValues, clearErrors, errors }  = useForm();
    
    const IP_ADDRESS_DEV = "10.2.50.36";

    const submitTicket = async () => {
        let submitReqResponse = "";

        let formField = getValues();

        if (submitEnabled && (isLoading === false) ) {
            setIsLoading(true);
    
            setSubmitEnabled(false);

            const fullName = firstName + " " + lastName;
    
            let {     
                supportRequestTitle,
                category,
                description,
                location,
                phoneExt,
                room, 
            } = formField;
        
            let supportReqDetails = {
                fullName,
                email,
                supportRequestTitle,
                category,
                description,
                location,
                phoneExt,
                room
            }
        
            const submitRequest_URL = `${isDev ? `http://${IP_ADDRESS_DEV}:3002` : "/server"}/helpdesk/request/create`;
            const submitRequest_headers = {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                "Access-Control-Allow-Credentials": true
            };
        
            submitReqResponse = await fetch(submitRequest_URL, {
                method: 'POST',
                headers: submitRequest_headers,
                body: JSON.stringify({ ...supportReqDetails} )
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
        
            console.log("submitReqResponse:\t", submitReqResponse);
    
            if (submitReqResponse) {
                const responseStatus = submitReqResponse["response_status"].status;
        
                setIsLoading(false);
    
                if (responseStatus === "success") {
        
                    setIsRequestSuccessful(true);

                    Alert.alert(
                        "Submission Successful", 
                        `Helpdesk Ticket submitted`, 
                        [
                            {
                                text: "OK",
                            }
                        ]
                    ); //end alert() call
        
                    setTimeout(() => {
                                //Reset the form field after submitting.
        
                        setShowRequestModal(false);
                        
                        setValue("supportRequestTitle", null);
                        setValue("category", null);
                        setValue("description", null);
                        setValue("location", null);
                        setValue("phoneExt", null);
                        setValue("room", null);
                    
                    }, 800);
                
                } else {
                    setIsRequestSuccessful(false);

                    Alert.alert(
                        "Error Submitting", 
                        `Error submitting ticket. Please try again`, 
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
                "Duplicate Ticket", 
                "Submitting duplicate tickets prohibited", 
                [
                    {
                        text: "OK",
                        style: "cancel"
                    }
                ]
            ); //end alert() call
            
            console.log("Submitting duplicate tickets prohibited.");
        } //end else-statement
        
        return submitReqResponse;
    };

    const onSubmit = (formValues) => {
        Reactotron.log("onSubmit():\t", formValues);

        // if (errors) {
        //     Alert.alert(
        //         "Error", 
        //         "Please fill all the form fields appropriately", 
        //         [
        //             {
        //                 text: "OK",
        //                 style: "cancel"
        //             }
        //         ]
        //     ); //end alert() call

        //     return;
        //} else {
            return submitTicket();
        //}
    }; 

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
        { label: "Computer Issue", value: "Computer Issue", color: ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93" },
        { label: "Printer Issue", value: "Printer Issue", color: ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93" },
        { label: "Projector Issue", value: "Projector Issue", color: ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"},
        { label: "Password Issue", value: "Password Issue", color: ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"},
        { label: "Canvas", value: "Canvas", color: ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93" },
        { label: "PowerSchool", value: "PowerSchool", color: ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"},
        { label: "Illuminate", value: "Illuminate", color: ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"},
        { label: "Google", value: "Google", color: ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"},
        { label: "Wi-fi Issue", value: "Wi-fi Issue", color: ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"},
        { label: "Eno Pen -- Board", value: "Eno Pen -- Board", color: ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"},
        { label: "Software Installation", value: "Software Installation", color: ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93" },
        { label: "Student Chromebook", value: "Student Chromebook", color: ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"},
        { label: "Phone Issue", value: "Phone Issue", color: ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"},
        { label: "Other", value: "Other", color: ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"}
    ];

    const studentCategories = [
               
        { label: "Password Issue", value: "Password Issue", color: ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93" },
        { label: "Canvas", value: "Canvas", color: ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93" },
        { label: "PowerSchool", value: "PowerSchool", color: ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"},
        { label: "Illuminate", value: "Illuminate", color: ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"},
        { label: "Google", value: "Google", color: ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"},
        { label: "Wi-fi Issue", value: "Wi-fi Issue", color: ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"},
        { label: "Software Installation", value: "Software Installation", color: ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"},
        { label: "Student Chromebook", value: "Student Chromebook", color: ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"},
        { label: "Other", value: "Other", color: ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93"}
    ];

    const categories = (districtPosition === "Student") ? studentCategories : staffCategories;
      
    const locations =   (districtPosition === "Student") ? [ {
        label: site, 
        value: site
    } ] : [   
            {   label: "Lawndale High School", 
                value: "Lawndale High School", 
                color:  ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93",
            }, 
            { 
                label: "Leuzinger High School", 
                value: "Leuzinger High School",
                color:  ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93",
            }, 
            { 
                label: "Hawthorne High School", 
                value: "Hawthorne High School",
                color:  ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93",
            }, 
            { 
                label: "District Office", 
                value: "District Office", 
                color:  ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93",
            }, 
            { 
                label: "Lloyde High School", 
                value: "Lloyde High School",
                color:  ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93",
            }, 
            { 
                label: "CV Independent Study", 
                value: "CV Independent Study",
                color:  ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93",
            }, 
            { 
                label: "Service Center", 
                value: "Service Center", 
                color:  ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93",
            }
        ];

    const pickerPlaceHolder = (pickerText) => ({
            label:  (pickerText || 'Select a category type...') ,
            value: null,
            color:  ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93",
    });

    const onModalDismiss = () => {
        clearErrors();
        setShowRequestModal(false);
        setSubmitEnabled(true);
    }; //end onModalDismiss()
           
    return (
            <ModalStyled 
                animationType       =   "slide"
                presentationStyle   =   "pageSheet"

                // swipeDirection      =   { ["up", "down"] }
                hasBackdrop         =   { false }
                isVisible           =   { showRequestModal  }  
                
                onDismiss           =   { onModalDismiss }
                // onBackdropPress     =   { () => setShowRequestModal(false) }
                // onSwipeComplete     =   { () => setShowRequestModal(false) }
            >
                <SafeAreaViewStyled>
                            <Header
                                title               =   "Tech Support Request"  
                                districtPosition    =   { districtPosition } 
                                renderAsStudent     =   { renderAsStudent }

                                closeModal          =   { () => setShowRequestModal(false) }
                            />
                        <KeyboardAwareScrollViewStyled>
                        
                            <InstructionsText
                              districtPosition    =   { districtPosition } 
                              renderAsStudent     =   { renderAsStudent }
                            >
                                Fill the form fields to submit a ticket:
                            </InstructionsText>
                            <Form {...{ register, setValue, getValues, validation, errors }}>
                                <Input 
                                    appWidth            =   { appWidth }

                                    name                =   "supportRequestTitle" 
                                    label               =   "Title:" 
                                    placeHolderText     =   "Support Request Title..."

                                    mode                =   "outlined"
                                    theme               =   { inputColorsTheme }

                                    districtPosition    =   { districtPosition } 
                                    renderAsStudent     =   { renderAsStudent }

                                    usePicker           =   { false }
                                    noOuterLabel        =   { false }
                                />

                                <Input  
                                    appWidth            =   { appWidth }

                                    name                =   "category" 
                                    label               =   "Category:" 
                                    placeHolderText     =   "Issue Type..."

                                    mode                =   "outlined"
                                    theme               =   { inputColorsTheme }

                                    districtPosition    =   { districtPosition } 
                                    renderAsStudent     =   { renderAsStudent }

                                    usePicker           =   { true }
                                    pickerPlaceHolder   =   { pickerPlaceHolder("Choose an issues category...") }
                                 
                                    items               =   { categories }
                                    noOuterLabel        =   { false }
                                />

                                <Input 
                                    appWidth            =   { appWidth }

                                    name                =   "description" 
                                    label               =   "Description:" 
                                    placeHolderText     =   "What is the issue at hand?"

                                    mode                =   "outlined"
                                    theme               =   { inputColorsTheme }

                                    secureTextEntry     =   { false } 

                                    districtPosition    =   { districtPosition } 
                                    renderAsStudent     =   { renderAsStudent }

                                    noOuterLabel        =   { false }
                                />

                                <Input 
                                    appWidth            =   { appWidth }

                                    name                =   "location" 
                                    label               =   "Location:" 
                                    placeHolderText     =   "Your School or Site..."


                                    mode                =   "outlined"
                                    theme               =   { inputColorsTheme }

                                    secureTextEntry     =   { false } 

                                    districtPosition    =   { districtPosition } 
                                    renderAsStudent     =   { renderAsStudent }

                                    usePicker           =   { true }
                                    pickerPlaceHolder   =   { (districtPosition === "Student") ? {} : pickerPlaceHolder("Choose your site or location...") }
                                    items               =   { locations }
                                    noOuterLabel        =   { false }
                                />

                                <Input 
                                    appWidth            =   { appWidth }

                                    name                =   "phoneExt" 
                                    label               =   "Phone Number:" 
                                    placeHolderText     =   "(XXX) XXX-XXXX"

                                    mode                =   "outlined"
                                    theme               =   { inputColorsTheme }

                                    secureTextEntry     =   { false } 

                                    districtPosition    =   { districtPosition } 
                                    renderAsStudent     =   { renderAsStudent }

                                    usePicker           =   { false }
                                    noOuterLabel        =   { false }
                                />

                                <Input 
                                    appWidth            =   { appWidth }

                                    name                =   "room" 
                                    label               =   "Room Number"
                                    placeHolderText     =   "Your room..."

                                    mode                =   "outlined"
                                    theme               =   { inputColorsTheme }

                                    secureTextEntry     =   { false } 

                                    districtPosition    =   { districtPosition } 
                                    renderAsStudent     =   { renderAsStudent }

                                    usePicker           =   { false }
                                    noOuterLabel        =   { false }
                                />

                            
                            </Form>
                        </KeyboardAwareScrollViewStyled>

                        <SubmitFooterContainer>
                            <Divider
                                districtPosition    =   { districtPosition } 
                                renderAsStudent     =   { renderAsStudent }
                            />
                            <TouchableButton 
                                buttonTitle         =   "Submit" 
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

export default SupportRequestModal;