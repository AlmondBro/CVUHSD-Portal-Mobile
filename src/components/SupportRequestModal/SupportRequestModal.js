import React from 'react';

import Header from './Header/Header.js';
import Form from './Form/Form.js';
import Input from './Input/Input.js';

import { useForm } from 'react-hook-form';
import validation from './validation.js';

import { SafeAreaViewStyled, ModalStyled, KeyboardAwareScrollViewStyled, Button, InstructionsText, Divider } from './SupportRequestModalStyledComponents.js';

import { Reactotron } from './../../config/reactotron.dev.js';

const SupportRequestModal = ({ appWidth, districtPosition, renderAsStudent, showRequestModal, setShowRequestModal }) => {

    const { handleSubmit, register, setValue, errors } = useForm();

    const onSubmit = (formValues) => {
        Reactotron.log("onSubmit():\t", formValues);
    }; 

    const inputColorsTheme  = {
        colors: {
            primary     :   ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93",
            background  :   "#F6F6F6",
            text        :   ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93",  
            placeholder :   districtPosition ?
                            ( (districtPosition === "student") || renderAsStudent === true) ? 
                                " rgba(147, 30, 29, 0.5)": "rgba(30, 108, 147, 0.5)"
                            : "rgba(147, 30, 29, 0.5)",
        }
    }; //end inputColorsTheme

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
                            <Form {...{ register, setValue, validation, errors }}>
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