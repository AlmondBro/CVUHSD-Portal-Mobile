import React from 'react';
import color from 'color';

import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaViewStyled, ModalStyled, KeyboardAwareScrollViewStyled, Header, Button, ModalContentContainer } from './SupportRequestModalStyledComponents.js';

import Form from './Form/Form.js';
import Input from './Input/Input.js';

import { useForm } from 'react-hook-form';

import validation from './validation.js';
import { render } from 'react-dom';

const SupportRequestModal = ({ appWidth, districtPosition, renderAsStudent, showRequestModal, setShowRequestModal }) => {

    const { handleSubmit, register, setValue, errors } = useForm();

    const onSubmit = (formValues) => {
        console.log("onSubmit() form values:\t", formValues);
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
                onBackdropPress     =   { () => setShowRequestModal(false) }
                // onSwipeComplete     =   { () => setShowRequestModal(false) }

                // swipeDirection      =   { ["up", "down"] }
                hasBackdrop         =   { false }
                isVisible           =   { showRequestModal  }  
                
                onDismiss           =   { () => setShowRequestModal(false) }

                presentationStyle   =   "pageSheet"

            >
                <SafeAreaViewStyled>
                        <KeyboardAwareScrollViewStyled>
                            <Header
                                title               =   "Tech Support Request"  
                                districtPosition    =   { districtPosition } 
                                renderAsStudent     =   { renderAsStudent }

                                closeModal          =   { () => setShowRequestModal(false) }
                            />
                            <Form {...{ register, setValue, validation, errors }}>
                                <Input 
                                    appWidth            =   { appWidth }

                                    name                =   "title" 
                                    label               =   "Title" 

                                    mode                =   "outlined"
                                    theme               =   { inputColorsTheme }

                                    districtPosition    =   { districtPosition } 
                                    renderAsStudent     =   { renderAsStudent }

                                    usePicker           =   { false }
                                />

                                <Input  
                                    appWidth            =   { appWidth }

                                    name                =   "category" 
                                    label               =   "category" 

                                    mode                =   "outlined"
                                    theme               =   { inputColorsTheme }

                                    districtPosition    =   { districtPosition } 
                                    renderAsStudent     =   { renderAsStudent }

                                    usePicker           =   { true }
                                />

                                <Input 
                                    appWidth            =   { appWidth }

                                    name                =   "description" 
                                    label               =   "Description" 

                                    mode                =   "outlined"
                                    theme               =   { inputColorsTheme }

                                    secureTextEntry     =   { true } 

                                    districtPosition    =   { districtPosition } 
                                    renderAsStudent     =   { renderAsStudent }
                                />

                                <Input 
                                    appWidth            =   { appWidth }

                                    name                =   "location" 
                                    label               =   "Location" 

                                    mode                =   "outlined"
                                    theme               =   { inputColorsTheme }

                                    secureTextEntry     =   { true } 

                                    districtPosition    =   { districtPosition } 
                                    renderAsStudent     =   { renderAsStudent }

                                    usePicker           =   { true }
                                />

                                <Input 
                                    appWidth            =   { appWidth }

                                    name                =   "phone-number" 
                                    label               =   "Phone Number" 

                                    mode                =   "outlined"
                                    theme               =   { inputColorsTheme }

                                    secureTextEntry     =   { true } 

                                    districtPosition    =   { districtPosition } 
                                    renderAsStudent     =   { renderAsStudent }

                                    usePicker           =   { false }

                                />

                                <Input 
                                    appWidth            =   { appWidth }

                                    name                =   "room" 
                                    label               =   "Room Number" 

                                    mode                =   "outlined"
                                    theme               =   { inputColorsTheme }

                                    secureTextEntry     =   { true } 

                                    districtPosition    =   { districtPosition } 
                                    renderAsStudent     =   { renderAsStudent }

                                    usePicker           =   { false }
                                    
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