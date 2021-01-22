import React, { useState, useRef } from 'react';
import { Alert, Text } from 'react-native';

import OptionsScreen from './OptionsScreen/OptionsScreen.js';
import SupportRequestModal from './../SupportRequestModal/SupportRequestModal.js';

import Header from './../FormComponents/Header/Header.js';

import { Reactotron } from './../../config/reactotron.dev.js';

//Import React Navigation Packages
import { NavigationContainer } from '@react-navigation/native'; //Equivalent to the BrowserRouter in ReactRouter
import { createStackNavigator } from '@react-navigation/stack'; 

import { SafeAreaViewStyled, NavScreensContainer, ModalStyled, KeyboardAwareScrollViewStyled, Button, InstructionsText, Divider } from './RequestOptionsStyledComponents.js';

import { navigate, navigationRef } from './../../utility-functions.js';
import TouchableButton from '../TouchableButton/TouchableButton.js';

const isDev = __DEV__;
const ReactotronDebug = (isDev &&  Reactotron) ? Reactotron : console;

const { Navigator, Screen } = createStackNavigator();  //<Navigator> is equivalent to a <Switch> on React Router, <Screen/> is equivalent to <Route>

const RequestOptions = ({ appWidth, email, firstName, lastName, districtPosition, site, renderAsStudent, showRequestModal, setShowRequestModal }) => {
    let navContainerRef = useRef(null); //Define a NavigationContainer ref to have access to its functions to pass down to components outside of its hierarchy

    let [ currentRoute, setCurrentRoute ]           = useState("request-options");

    const onModalDismiss = () => {
        setShowRequestModal(false);

        return unsubscribe(); //Stop listening to navigation container state changes when the modal is closed.
    }; //end onModalDismiss()
    
    const unsubscribe = navContainerRef.current?.addListener('state', (event) => {
        let currentRoute = navContainerRef.current?.getCurrentRoute();
        setCurrentRoute(currentRoute);
    });

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
                                districtPosition    =   { districtPosition } 
                                renderAsStudent     =   { renderAsStudent }

                                currentRoute        =   { currentRoute }
                                goBack              =   { () => navContainerRef.current?.goBack() }
                                closeModal          =   { () => setShowRequestModal(false) }
                            />


                            <NavigationContainer 
                                independent     =   {   true    }
                                ref             =   { navContainerRef }
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
                                    
                                    initialRouteName    =   "View/Submit Requests"
                                >
                                        <Screen
                                            name        =   "View/Submit Requests"
                                        >
                                                { 
                                                    props => (
                                                        <OptionsScreen
                                                            districtPosition    =   { districtPosition } 
                                                            renderAsStudent     =   { renderAsStudent }
                                                            {...props}
                                                        />
                                                    ) 
                                                }
                                        </Screen>
                                            
                                        <Screen 
                                                name="View Requests" 
                                                // options={{ title: null, headerShown: false }}
                                        >
                                                { props => (<Text>View Requests</Text>) }
                                        </Screen>
                                        <Screen 
                                                name="Submit Request" 
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