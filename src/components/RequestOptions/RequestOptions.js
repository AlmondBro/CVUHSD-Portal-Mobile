import React, { useState } from 'react';
import { Alert, Text } from 'react-native';

import OptionsScreen from './OptionsScreen/OptionsScreen.js';
import SupportRequestModal from './../SupportRequestModal/SupportRequestModal.js';

import Header from './../FormComponents/Header/Header.js';

import { Reactotron } from './../../config/reactotron.dev.js';

//Import React Navigation Packages
import { NavigationContainer } from '@react-navigation/native'; //Equivalent to the BrowserRouter in ReactRouter
import { createStackNavigator } from '@react-navigation/stack'; 

import { SafeAreaViewStyled, NavScreensContainer, ModalStyled, KeyboardAwareScrollViewStyled, Button, InstructionsText, Divider } from './RequestOptionsStyledComponents.js';

import { navigate } from './../../utility-functions.js';
import TouchableButton from '../TouchableButton/TouchableButton.js';

const isDev = __DEV__;
const ReactotronDebug = (isDev &&  Reactotron) ? Reactotron : console;

const { Navigator, Screen } = createStackNavigator();  //<Navigator> is equivalent to a <Switch> on React Router, <Screen/> is equivalent to <Route>

const RequestOptions = ({ appWidth, email, firstName, lastName, districtPosition, site, renderAsStudent, showRequestModal, setShowRequestModal }) => {

    const onModalDismiss = () => {
        clearErrors();
        setShowRequestModal(false);
        setSubmitEnabled(true);
    }; //end onModalDismiss()
           
    return (
            <ModalStyled 
                animationType       =   "slide"
                presentationStyle   =   "pageSheet"
                transparent         =   { true }

                swipeDirection      =   "down"
                onBackButtonPress   =   { () => setShowRequestModal(false) }
                hasBackdrop         =   { false }
                isVisible           =   { showRequestModal  }  
                
                onDismiss           =   { onModalDismiss }
                // onBackdropPress     =   { () => setShowRequestModal(false) }
                onSwipeComplete     =   { () => setShowRequestModal(false) }
            >
                <SafeAreaViewStyled>
                            <Header
                                title               =   "View/Submit Requests"  
                                districtPosition    =   { districtPosition } 
                                renderAsStudent     =   { renderAsStudent }

                                closeModal          =   { () => setShowRequestModal(false) }
                            />

                            <NavigationContainer 
                                independent={true}
                            >

                                {/* <TouchableButton onPress={() => navigate("submit-request")}>
                                    <Text>Holis</Text>
                                </TouchableButton> */}

                                <Navigator 
                                    headerMode      = "none"
                                    // screenOptions   =   {   { 
                                    //                             title: null, 
                                    //                             headerShown: false,
                                    //                             gestureEnabled: false,
                                    //                             animationTypeForReplace: 'push'
                                    //                         }
                                    //                     }
                                    
                                    initialRouteName="request-options"
                                >
                                        <Screen
                                            name        =   "request-options"
                                            component   =   {OptionsScreen}
                                        />
                                            
                                        <Screen 
                                                name="view-requests" 
                                                // options={{ title: null, headerShown: false }}
                                        >
                                                { props => (<Text>View Requests</Text>) }
                                        </Screen>
                                        <Screen 
                                                name="submit-request" 
                                                // options={{ title: null, headerShown: false }}
                                        >
                                                { 
                                                    props => (
                                                    <SupportRequestModal
                                                        appWidth            =   { appWidth }
                                                        email               =   { email }
                                                        firstName           =   { firstName } 
                                                        lastName            =   { lastName} 
                                                        districtPosition    =   { districtPosition}
                                                        site                =   { site} 
                                                        renderAsStudent     =   { renderAsStudent } 
                                                        showRequestModal    =   { showRequestModal }
                                                        setShowRequestModal =   { setShowRequestModal }
                                                                                {...props}
                                                        
                                                        />
                                                    ) 
                                                }
                                        </Screen>
                                </Navigator>

                            </NavigationContainer>
                        {/* <KeyboardAwareScrollViewStyled>
                        


                        </KeyboardAwareScrollViewStyled> */}
                    </SafeAreaViewStyled>
            </ModalStyled>  
    ); //end return statement
}; //end SupportRequestModal()

export default RequestOptions;