import React, { useState} from 'react';

import Header from './../FormComponents/Header/Header.js';
import Form from './../FormComponents/Form/Form.js';
import Input from './../FormComponents/Form/Input/Input.js';

import { useForm } from 'react-hook-form';
import validation from './validation.js';

import { SafeAreaViewStyled, ModalStyled, KeyboardAwareScrollViewStyled, Button, InstructionsText, Divider } from './SupportRequestModalStyledComponents.js';

import { Reactotron } from './../../config/reactotron.dev.js';

const isDev = __DEV__;

const SupportRequestModal = ({ appWidth, districtPosition, site, renderAsStudent, showRequestModal, setShowRequestModal }) => {
    let [ isLoading, setIsLoading ]     = useState(false);
    
    let [ isRequestSuccessful, setIsRequestSuccessful ] = useState(null);

    let [ submitEnabled, setSubmitEnabled ] = useState(false);

    const { handleSubmit, register, setValue, getValues, errors } = useForm();
    
    const submitTicket = async () => {
        let submitReqResponse = "";

        let formField = getValues();

        if (submitEnabled && (isLoading === false) ) {
            setIsLoading(true);
    
            // window.alert(JSON.stringify(formField));
        
            setSubmitEnabled(false);
    
            let {     
                title,
                category,
                description,
                location,
                phoneNumber,
                room,
                attachment 
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
        
            const submitRequest_URL = `${isDev ? "" : "/server"}/helpdesk/request/create`;
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
            });
        
            //window.alert(JSON.stringify(submitReqResponse));
        
    
            if (submitReqResponse) {
                const responseStatus = submitReqResponse["response_status"].status;
        
                setIsLoading(false);
    
                notify(
                        <HelpdeskSubmitMessage
                        districtPosition    =   { districtPosition }
                        message             =   "Helpdesk Request Submitted"
                        icon                =   { faTicketAlt }
                        />
                );
        
                // window.alert("responseStatus:\t", responseStatus);
        
                if (responseStatus === "success") {
        
                    setIsRequestSuccessful(true);
        
                    setTimeout(() => {
                             //Reset the form field after submitting.
        
                        toggleModal(false);
                        
                        setFormField({
                            supportRequestTitle :   "",
                            category            :   "",
                            description         :   "",
                            location            :   "",
                            phoneExt            :   "",
                            room                :   "",
                            attachment          :   "",
                        });
                    }, 800);
               
                } else {
                    setIsRequestSuccessful(false);
                }
        
            }
        } else{
            console.log("Submitting duplicate tickets prohibited.");
        }
     
    
        return submitReqResponse;
    };

    const onSubmit = (formValues) => {
        Reactotron.log("onSubmit():\t", formValues);
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
                isVisible           =   { showRequestModal  }  
                
                onDismiss           =   { () => setShowRequestModal(false) }
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

                                    name                =   "title" 
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

                                    name                =   "phoneNumber" 
                                    label               =   "Phone Number:" 
                                    placeHolderText     =   "XXX-XXX-XXXX"

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

                                    name                =   "roomNumber" 
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

                                <Divider
                                   districtPosition    =   { districtPosition } 
                                   renderAsStudent     =   { renderAsStudent }
                                />

                                <Button 
                                        buttonTitle       =   "Submit" 
                                        onPress           =   {  handleSubmit(onSubmit) } 

                                        districtPosition    =   { districtPosition } 
                                        renderAsStudent     =   { renderAsStudent }
                                />
                            </Form>
                        </KeyboardAwareScrollViewStyled>
                    </SafeAreaViewStyled>
            </ModalStyled>  
    ); //end return statement
}; //end SupportRequestModal()

export default SupportRequestModal;