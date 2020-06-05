//Import React/React Native modules
import React, { Component } from 'react';
import { StatusBar, ImageBackground, Alert } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Reactotron from 'reactotron-react-native';

import { AZURE_CLIENT_ID, AZURE_CLIENT_SECRET, AZURE_TENANT_ID, AZURE_DOMAIN_HINT } from './../../../keys.env.js';
//from 'react-native-dotenv'

//Import utility functions
import { dimensionsWidthHOC, navigationRef, navigate } from './../../utility-functions.js';

import * as AuthSession from 'expo-auth-session';
import * as Updates from 'expo-updates';

import { openAuthSession } from 'azure-ad-graph-expo';

import { SafeAreaProvider } from 'react-native-safe-area-context';

//import styled components
import { AppContainerView, AppHeaderContainerView, ImageBackgroundStyled, WelcomeText, SafeAreaViewStyled } from './App_StyledComponents.js';

//Import App/Page components
import Header from './../Header/Header.js';
import PageContent from './../PageContent/PageContent.js';
import TabsFooter from './../TabsFooter/TabsFooter.js'

import HomeScreen from './../HomeScreen/HomeScreen.js';

const { Navigator, Screen } = createStackNavigator();

const backgroundImage = require('./../../assets/images/theCVway-white.png');

const isDev = __DEV__;

const ReactotronDebug = isDev ? Reactotron : console;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showUpdate          :   false, 
            adUserInfo          :   null,
            appWidth            :   this.props.width,

            firstName           :   null,
            lastName            :   null,
            title               :   null,
            site                :   null,
            gradeLevel          :   null,
            email               :   null,
            phoneNumber         :   null,
            OU                  :   null,
            renderAsStuddent    :   false,
            portalLogoSource    :   require("./../../assets/images/CV-600x600-portal-red.png"),
            
            authLoading         :   null
        }; //end this.state object
    } //end constructor

    azureAdAppProps = {
        clientId        :   AZURE_CLIENT_ID,
        tenantId        :   AZURE_TENANT_ID,
        scope           :   "user.read",
        redirectUrl     :   AuthSession.makeRedirectUri(),
        clientSecret    :   AZURE_CLIENT_SECRET,
        domainHint      :   AZURE_DOMAIN_HINT,
        prompt          :   "login"
    };

    USER_INFO = '@user_info';

    getStudentSchool = () => {
        console.log("getStudentSchool()");
  
        const parseOUforSchool = (organizationalUnit) => {
          console.log("parseOUforSchool()");

          const splitDirectoriesArray = organizationalUnit.split("/");
          const school = splitDirectoriesArray[1];
          const gradeLevel = splitDirectoriesArray[2];
  
          console.log("splitDirectoriesArray:\t" + splitDirectoriesArray);

          this.setState({site: school, gradeLevel: gradeLevel});
        }; //end parseOUforSchool()
  
        const getOU_URL = `https://portal.centinela.k12.ca.us/server/getOU`;
        
        //`${isDev ? "" : "/server" }/getOU`; 
  
        const getOU_headers = {
            'Content-Type': 'application/json',
            'credentials': 'include',
            'Access-Control-Allow-Origin': '*',
        };
    
        const getOU = fetch(getOU_URL, {
            method: 'POST',
            headers: getOU_headers,
            body: JSON.stringify({user: this.state.email})
        }).then((response) => {
            ReactotronDebug.log("response:\t" + response);
            return response.json();     //Parse the JSON of the response
        }).then((OU) => {
            parseOUforSchool(OU);
            this.setState({OU:  OU})
        }).catch((error) => {
            console.error(`Catching error:\t ${error}`);
        });

        getOU();
      }; //end getStudentSchool

    openADSingleSignOn = async () => {
        console.log("handlePressAsync()");
        console.log("AuthSession.makeRedirectUri():\t" + AuthSession.makeRedirectUri());
        
        this.setState({ authLoading: true }); //Set loading to true

        let adUserInfo = await  openAuthSession(this.azureAdAppProps);
                               
        ReactotronDebug.log("adUserInfo from App.js:\t" + JSON.stringify(adUserInfo) );

        let portalLogoSource = (adUserInfo.jobTitle === "Student") ?
                                require("./../../assets/images/CV-600x600-portal-red.png")
                            :   require("./../../assets/images/CV-600x600-portal.png");


        if ( !adUserInfo.error && (adUserInfo.type === "success") ) {
            this.setState({
                firstName           : adUserInfo.givenName,
                lastName            : adUserInfo.surname,
                title               : adUserInfo.jobTitle,
                site                : adUserInfo.officeLocation,
                email               : adUserInfo.mail,
                portalLogoSource    : portalLogoSource,
                authLoading         : false 
            });

            this.setLogOnUserData({...this.state});
    
            /*
            if ( (adUserInfo.jobTitle === "Student") && (adUserInfo.officeLocation === null) ) {
                this.getStudentSchool();
            }
            */

            ReactotronDebug.log("App State after authentication:\t" + JSON.stringify(this.state));
            navigate('Page-Content');
               
        } else {
            ReactotronDebug.log("User canceled operation from App.js");
            this.setState({ authLoading: false });
            
            const alertTitle = "Sign-in failed" ;
            const alertMessage = adUserInfo.error;

            Alert.alert(
                alertTitle,
                alertMessage,
                [
                  {
                    text: "OK",
                    onPress: () => console.log("OK Pressed"),
                    style: "cancel"
                  },
                ],
                { cancelable: false }
              );

            return; 
        } //end else-statement
    }; //handlePressAsync()

    
    checkforExistingLogOn = async () => {
        try {
            let currentUserState = await AsyncStorage.getItem(this.USER_INFO);

            if (currentUserState !== null) {
                this.setState({ ...JSON.parse(currentUserState) });
                return true;
            } else {
                return false;
            }
        } catch (error) {
            Reactotron.log("checkforExistingLogOn() Error:\t" + JSON.stringify(error));
        }
    }; //end checkforExistingLogOn

    setLogOnUserData = async (userDataObject) => {
        try {
            const userDataObjectJSON = JSON.stringify(userDataObject);
            await AsyncStorage.setItem(this.USER_INFO, userDataObjectJSON);
          } catch (e) {
            Reactotron.log("setLogOnUserData() Error:\t" + JSON.stringify(error));
          }
    };

    componentDidMount = () => {
        const checkforUpdatesDev = false;
        
        //console.log("Props:\t" + JSON.stringify(this.props) );
        console.log("Width:\t" + this.props.width);

        if (__DEV__ && Reactotron) {
            Reactotron.log('Reactotron running');
        }
        
        if (!__DEV__ || checkforUpdatesDev === true) {
            Updates.checkForUpdateAsync().then(update => {
                if (update.isAvailable) {
                  this.setState({ showUpdate: true } );
                } //end if-statement
              });
        }

        if (this.checkforExistingLogOn() === true) {
            navigate('Page-Content');
        };
    }; //end componentDidMount

    render = () => {
        return (
            <NavigationContainer ref={navigationRef}>
                <SafeAreaProvider>
                    <StatusBar 
                        backgroundColor="#F4F7F9" 
                        barStyle="dark-content" 
                        translucent={true} 
                    />
                    { /* The following is a technique using two SafeAreaViews to have the
                        statusbar/top padding be a different color than the bottom padding. 
                        SafeAreaViews are only applicable on iOs 11+ on >iPhone X 

                        Source: https://stackoverflow.com/questions/47725607/react-native-safeareaview-background-color-how-to-assign-two-different-backgro
                    */ }
                    <SafeAreaViewStyled>
                        <AppContainerView>
                            <ImageBackground
                                source={ backgroundImage }
                                style={ 
                                    { 
                                        flex: 1,
                                        resizeMode: "cover",
                                        justifyContent: "center"
                                    }
                                }
                            >
                                <AppHeaderContainerView>
                                    <Header 
                                        showUpdate          =   { this.state.showUpdate } 
                                        firstName           =   { this.state.firstName}
                                        lastName            =   { this.state.lastName }
                                        title               =   { this.state.title }
                                        site                =   { this.state.site }
                                        portalLogoSource    =   { this.state.portalLogoSource }
                                        // onPress    =   { navigate ? navigate: null }
                                    />
                                    
                                    { this.state.title ? null : <WelcomeText>Welcome</WelcomeText> }
                                </AppHeaderContainerView>
                            </ImageBackground>

                            <Navigator
                                headerMode      = "none"
                                screenOptions   =   {   { 
                                                            title: null, 
                                                            headerShown: false,
                                                            gestureEnabled: false,
                                                        }
                                                    }
                            >
                              
                                <Screen 
                                    name="Home" 
                                    // options={{ title: null, headerShown: false }}
                                >
                                    { props => <HomeScreen 
                                                    {...props}
                                                    authLoading         =   {   this.state.authLoading  }
                                                    openADSingleSignOn  =   {   this.openADSingleSignOn } 
                                                /> 
                                    }
                                </Screen>

                                <Screen 
                                    name="Page-Content"
                                    // options={{ title: null, headerShown: false }}
                                >
                                    { props => <PageContent 
                                                    {...props}
                                                    showUpdate  =   { this.state.showUpdate } 
                                                    firstName   =   { this.state.firstName}
                                                    lastName    =   { this.state.lastName }
                                                    title       =   { this.state.title }
                                                    site        =   { this.state.site }
                                                    appWidth    =   { this.state.appWidth }
                                                />
                                    }
                                </Screen>
                            </Navigator>
                            {   this.state.title ? 
                                <TabsFooter 
                                    title   =   { this.state.title}
                                />
                                : null    
                            } 
                        </AppContainerView>
                    </SafeAreaViewStyled>
                </SafeAreaProvider>
            </NavigationContainer>
        ); //end return statementt
    } //end render() function
} //end App class

export default dimensionsWidthHOC(App);