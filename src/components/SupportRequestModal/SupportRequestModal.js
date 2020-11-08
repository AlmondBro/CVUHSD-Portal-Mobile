import React from 'react';

import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaViewStyled, ModalStyled, ModalContentContainer } from './SupportRequestModalStyledComponents.js';

const SupportRequestModal = ({ showRequestModal, setShowRequestModal }) => {
    return (
            <ModalStyled 
                animationType       =   "slide"
                onBackdropPress     =   { () => setShowRequestModal(false) }
                onSwipeComplete     =   { () => setShowRequestModal(false) }

                swipeDirection      =   { ["up", "down"] }
                hasBackdrop         =   { true }
                isVisible           =   { showRequestModal  }  
                
                onDismiss           =   { () => setShowRequestModal(false) }

                presentationStyle   =   "pageSheet"

            >
                {/* <TouchableWithoutFeedback
                    onPressOut  =   { () => setShowRequestModal(false) }  
                > */}

                    {/* <ModalContentContainer> */}
                    <SafeAreaViewStyled>
                    <Text>Support Request</Text>
                        <TouchableOpacity 
                            title   =   "close"
                            onPress =   { () => setShowRequestModal(false)  }   
                        >
                            <Text>Close</Text>
                        </TouchableOpacity>
                    </SafeAreaViewStyled>
                {/* </TouchableWithoutFeedback> */}
                      
                    {/* </ModalContentContainer> */}
            </ModalStyled>  
    ); //end return statement
}; //end SupportRequestModal()

export default SupportRequestModal;