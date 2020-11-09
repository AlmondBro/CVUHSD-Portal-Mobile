import React from 'react';

import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaViewStyled, ModalStyled, KeyboardAwareScrollViewStyled, Header, Button, ModalContentContainer } from './SupportRequestModalStyledComponents.js';

import Form from './Form/Form.js';
import Input from './Input/Input.js';

import { useForm } from 'react-hook-form';

import validation from './validation.js';
import { render } from 'react-dom';

const SupportRequestModal = ({ districtPosition, renderAsStudent, showRequestModal, setShowRequestModal }) => {

    const { handleSubmit, register, setValue, errors } = useForm();

    const onSubmit = (formValues) => {
        console.log("onSubmit() form values:\t", formValues);
    }; 

    const inputColorsTheme  = {
        colors: {
            primary:   ( (districtPosition === "Student") || (renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93",
            text:      "black",      
        }
    }

    return (
            <ModalStyled 
                animationType       =   "slide"
                onBackdropPress     =   { () => setShowRequestModal(false) }
                onSwipeComplete     =   { () => setShowRequestModal(false) }

                swipeDirection      =   { ["up", "down"] }
                hasBackdrop         =   { false }
                isVisible           =   { showRequestModal  }  
                
                onDismiss           =   { () => setShowRequestModal(false) }

                presentationStyle   =   "pageSheet"

            >
                <SafeAreaViewStyled>
                    <Header
                        title               =   "Tech Support Request"  
                        districtPosition    =   { districtPosition } 
                        renderAsStudent     =   { renderAsStudent }
                    />
                        <KeyboardAwareScrollViewStyled>
                            <Form {...{ register, setValue, validation, errors }}>
                                <Input 
                                    name                =   "title" 
                                    label               =   "Title" 

                                    mode                =   "outlined"
                                    theme               =   { inputColorsTheme }

                                    districtPosition    =   { districtPosition } 
                                    renderAsStudent     =   { renderAsStudent }
                                />

                                <Input  
                                    name                =   "category" 
                                    label               =   "category" 

                                    mode                =   "outlined"
                                    theme               =   { inputColorsTheme }

                                    districtPosition    =   { districtPosition } 
                                    renderAsStudent     =   { renderAsStudent }
                                />

                                <Input 
                                    name                =   "description" 
                                    label               =   "Description" 

                                    mode                =   "outlined"
                                    theme               =   { inputColorsTheme }

                                    secureTextEntry     =   { true } 

                                    districtPosition    =   { districtPosition } 
                                    renderAsStudent     =   { renderAsStudent }
                                />

                                <Input 
                                    name                =   "location" 
                                    label               =   "Location" 

                                    mode                =   "outlined"
                                    theme               =   { inputColorsTheme }

                                    secureTextEntry     =   { true } 

                                    districtPosition    =   { districtPosition } 
                                    renderAsStudent     =   { renderAsStudent }
                                />

                                <Input 
                                    name                =   "phone-number" 
                                    label               =   "Phone Number" 

                                    mode                =   "outlined"
                                    theme               =   { inputColorsTheme }

                                    secureTextEntry     =   { true } 

                                    districtPosition    =   { districtPosition } 
                                    renderAsStudent     =   { renderAsStudent }
                                />

                                <Input 
                                    name                =   "room" 
                                    label               =   "Room Number" 

                                    mode                =   "outlined"
                                    theme               =   { inputColorsTheme }

                                    secureTextEntry     =   { true } 

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

                         
                            <Button 
                                buttonTitle   =   "Close"
                                onPress       =   { () => setShowRequestModal(false)  }  
                                
                                districtPosition    =   { districtPosition } 
                                renderAsStudent     =   { renderAsStudent }
                            />
                                
                        </KeyboardAwareScrollViewStyled>
                    </SafeAreaViewStyled>
            </ModalStyled>  
    ); //end return statement
}; //end SupportRequestModal()

export default SupportRequestModal;