import React from 'react';

import { Text, Button, TouchableOpacity } from 'react-native';
import { SafeAreaViewStyled, ModalStyled, KeyboardAwareScrollViewStyled, ModalContentContainer } from './SupportRequestModalStyledComponents.js';

import Form from './Form/Form.js';
import Input from './Input/Input.js';

import { useForm } from 'react-hook-form';

import validation from './validation.js';

const SupportRequestModal = ({ showRequestModal, setShowRequestModal }) => {

const { handleSubmit, register, setValue, errors } = useForm();
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
                {/* <TouchableWithoutFeedback
                    onPressOut  =   { () => setShowRequestModal(false) }  
                > */}

                    {/* <ModalContentContainer> */}
                    <SafeAreaViewStyled>
                        <KeyboardAwareScrollViewStyled>
                            <Form {...{ register, setValue, validation, errors }}>

                                <Input name="name" label="Name " />

                                <Input name="email" label="Email" />

                                <Input name="password" label="Password" secureTextEntry={true} />

                                <Button title="Submit" onPress={handleSubmit(()  => console.log("hello"))} />

                            </Form>
                            <Text>Support Request</Text>
                            <TouchableOpacity 
                                title   =   "close"
                                onPress =   { () => setShowRequestModal(false)  }   
                            >
                                <Text>Close</Text>
                            </TouchableOpacity>
                        </KeyboardAwareScrollViewStyled>
                    </SafeAreaViewStyled>
                {/* </TouchableWithoutFeedback> */}
                      
                    {/* </ModalContentContainer> */}
            </ModalStyled>  
    ); //end return statement
}; //end SupportRequestModal()

export default SupportRequestModal;