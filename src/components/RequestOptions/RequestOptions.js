import React, { useState, useRef, useEffect } from 'react';
import { Alert, Text } from 'react-native';

import OptionsScreen from './OptionsScreen/OptionsScreen.js';
import SupportRequestModal from './../SupportRequestModal/SupportRequestModal.js';
import ViewRequests from './ViewRequests/ViewRequests.js'

import Header from './../FormComponents/Header/Header.js';

import { Reactotron } from './../../config/reactotron.dev.js';

//Import React Navigation Packages
import { NavigationContainer } from '@react-navigation/native'; //Equivalent to the BrowserRouter in ReactRouter
import { createStackNavigator } from '@react-navigation/stack'; 

import CurrentRouteSetter from './CurrentRouteSetterHOC.js';

import { SafeAreaViewStyled, NavScreensContainer, ModalStyled, KeyboardAwareScrollViewStyled, Button, InstructionsText, Divider } from './RequestOptionsStyledComponents.js';

import { navigate, navigationRef } from './../../utility-functions.js';
import TouchableButton from '../TouchableButton/TouchableButton.js';

const { Navigator, Screen } = createStackNavigator();  //<Navigator> is equivalent to a <Switch> on React Router, <Screen/> is equivalent to <Route>

const RequestOptions = ({ navigation, appWidth, email, firstName, lastName, districtPosition, site, renderAsStudent, showRequestModal, setShowRequestModal }) => {
    let navContainerRef = useRef(null); //Define a NavigationContainer ref to have access to its functions to pass down to components outside of its hierarchy

    let initialRouteName = "View/Submit Requests";
    let [ currentRoute, setCurrentRoute ]  = useState(initialRouteName);

    const onModalDismiss = () => {
        setShowRequestModal(false);

    }; //end onModalDismiss()


    return (
            <ModalStyled 
                animationType       =   "slide"
                presentationStyle   =   "pageSheet"
                transparent         =   { true }
                
                propagateSwipe      =   { true }

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
                        <Navigator 
                            headerMode      = "none"
                            // screenOptions   =   {   { 
                            //                             title: null, 
                            //                             headerShown: false,
                            //                             gestureEnabled: false,
                            //                             animationTypeForReplace: 'push'
                            //                         }
                            //                     }
                            
                            initialRouteName    =   { initialRouteName }
                        >
                                <Screen
                                    name        =   { initialRouteName }
                                >
                                    { 
                                        props => (
                                            <CurrentRouteSetter 
                                                setCurrentRoute     =   { setCurrentRoute }
                                                {...props}
                                            >
                                                   <OptionsScreen
                                                        districtPosition    =   { districtPosition } 
                                                        renderAsStudent     =   { renderAsStudent }
                                                        setCurrentRoute     =   { setCurrentRoute }
                                                        {...props}
                                                />
                                            </CurrentRouteSetter>
                                         
                                        ) 
                                    }
                                </Screen>
                                    
                                <Screen 
                                        name="View Requests" 
                                        // options={{ title: null, headerShown: false }}
                                >
                                    { props => (
                                         <CurrentRouteSetter 
                                            setCurrentRoute     =   { setCurrentRoute }
                                            {...props}
                                        >
                                            <ViewRequests
                                                districtPosition    =   { districtPosition } 
                                                renderAsStudent     =   { renderAsStudent }
                                                                        {...props}
                                            />
                                        </CurrentRouteSetter>
                                    ) }
                                </Screen>
                                <Screen 
                                        name="Submit Request" 
                                        // options={{ title: null, headerShown: false }}
                                >
                                    { 
                                        props => (
                                            <CurrentRouteSetter 
                                                setCurrentRoute     =   { setCurrentRoute }
                                                {...props}
                                            >
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
                                        </CurrentRouteSetter>
                                        ) 
                                    }
                                </Screen>
                        </Navigator>
                    </NavigationContainer>

                </SafeAreaViewStyled>
            </ModalStyled>  
    ); //end return statement
}; //end SupportRequestModal()

export default RequestOptions;