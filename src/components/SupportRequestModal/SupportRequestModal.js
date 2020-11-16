import React from 'react';

import Header from './Header/Header.js';
import Form from './../FormComponents/Form/Form.js';
import Input from './../FormComponents/Form/Input/Input.js';

import { useForm } from 'react-hook-form';
import validation from './validation.js';

import { SafeAreaViewStyled, ModalStyled, KeyboardAwareScrollViewStyled, Button, InstructionsText, Divider } from './SupportRequestModalStyledComponents.js';

import { Reactotron } from './../../config/reactotron.dev.js';

const SupportRequestModal = ({ appWidth, districtPosition, site, renderAsStudent, showRequestModal, setShowRequestModal }) => {

    const { handleSubmit, register, setValue, getValues, errors } = useForm();

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
                                    value               =   { (districtPosition === "Student") ? site :  null}
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