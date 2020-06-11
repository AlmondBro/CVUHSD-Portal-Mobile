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
            renderAsStudent     :   false,
            portalLogoSource    :   require("./../../assets/images/CV-600x600-portal-red.png"),
            backgroundImage     :   require('./../../assets/images/theCVway-red.png') ,
            
            isModalVisible      :   false,
            authLoading         :   null
        }; //end this.state object


        this.initialState = { ...this.state };
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

        let portalLogoSource = ( (adUserInfo.jobTitle === "Student") || (this.state.renderAsStudent === true)) ?
                                require("./../../assets/images/CV-600x600-portal-red.png")
                            :   require("./../../assets/images/CV-600x600-portal.png");

        let backgroundImage = (adUserInfo.jobTitle === "Student" || this.state.renderAsStudent) ?
                                require('./../../assets/images/theCVway-red.png')
                            :   require('./../../assets/images/theCVway-blue.png');

                            


        if ( !adUserInfo.error && (adUserInfo.type === "success") ) {
            this.setState({
                firstName           : adUserInfo.givenName,
                lastName            : adUserInfo.surname,
                title               : adUserInfo.jobTitle,
                site                : adUserInfo.officeLocation,
                email               : adUserInfo.mail,
                portalLogoSource    : portalLogoSource,
                backgroundImage     : backgroundImage,
                authLoading         : false 
            });

            this.setLogOnUserData({...this.state});
    
            if ( adUserInfo.jobTitle !== "Student" ){
                //this.setRenderAsStudent(true);
            }

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

    setRenderAsStudent = (renderAsStudent) => {
        this.setState( { renderAsStudent: renderAsStudent } );

        let portalLogoSource = ( this.state.renderAsStudent === false ) ?
            require("./../../assets/images/CV-600x600-portal-red.png")
        :   require("./../../assets/images/CV-600x600-portal.png");
        
        this.setState({portalLogoSource: portalLogoSource});
    }; //end setRenderAsStudent

    setIsModalVisible = (isModalVisible) => {
        this.setState( { isModalVisible: isModalVisible } );
        console.log("Open change password");

    }; //end setRenderAsStudent

    openChangePassword = () => {
        console.log("Open change password");
    }; //end openChangePassword

    setLogOnUserData = async (userDataObject) => {
        try {
            const userDataObjectJSON = JSON.stringify(userDataObject);
            await AsyncStorage.setItem(this.USER_INFO, userDataObjectJSON);
          } catch (e) {
            Reactotron.log("setLogOnUserData() Error:\t" + JSON.stringify(error));
          }
    };

    clearLogOnUserData = async () => {
        console.log("Clearlogout data.")
        try {
            await AsyncStorage.clear();
        } catch(e) {
            ReactotronDebug.log('clearLogOnUserData() clear');
        }
        this.setState({ ...this.initialState });
        navigate('Home');
        console.log('Done.')
    }; //end clearLogOnUserData


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

        // if (this.checkforExistingLogOn() === true) {
        //     navigate('Page-Content');
        // };

        this.clearLogOnUserData();
    }; //end componentDidMount

    // #B41A1F" : "#1E6C93
    render = () => {
        return (
            <SafeAreaProvider>
                <StatusBar 
                    backgroundColor =   { this.state.renderAsStudent ? "#B41A1F" : "#1E6C93" } 
                    barStyle        =   "light-content" 
                    translucent     =   { true } 
                />
                <NavigationContainer ref={navigationRef}>
                    
                        { /* The following is a technique using two SafeAreaViews to have the
                            statusbar/top padding be a different color than the bottom padding. 
                            SafeAreaViews are only applicable on iOs 11+ on >iPhone X 

                            Source: https://stackoverflow.com/questions/47725607/react-native-safeareaview-background-color-how-to-assign-two-different-backgro
                        */ }
                        <SafeAreaViewStyled 
                            title           =   { this.state.title }
                            renderAsStudent =   { this.state.renderAsStudent }
                        >
                            <AppContainerView>
                                <ImageBackground
                                    source={ this.state.backgroundImage }
                                    style={ 
                                        { 
                                            flex: 0.75,
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
                                            renderAsStudent     =   { this.state.renderAsStudent }
                                            portalLogoSource    =   { this.state.portalLogoSource }
                                            // onPress    =   { navigate ? navigate: null }
                                        />
                                        
                                        { (this.state.title || this.state.renderAsStudent) ? null : <WelcomeText>Welcome</WelcomeText> }
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
                                                        title               =   {   this.state.title    }
                                                        renderAsStudent     =   {   this.state.renderAsStudent }
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
                                                        showUpdate          =   { this.state.showUpdate } 
                                                        firstName           =   { this.state.firstName}
                                                        lastName            =   { this.state.lastName }
                                                        title               =   { this.state.title }
                                                        renderAsStudent     =   { this.state.renderAsStudent }
                                                        site                =   { this.state.site }
                                                        appWidth            =   { this.state.appWidth }
                                                    />
                                        }
                                    </Screen>
                                </Navigator>
                                {   this.state.title ? 
                                    <TabsFooter 
                                        title               =   { this.state.title}
                                        renderAsStudent     =   { this.state.renderAsStudent }
                                        isModalVisible      =   { this.state.isModalVisible }
                                        setIsModalVisible   =   { this.setIsModalVisible }
                                        setRenderAsStudent  =   { this.setRenderAsStudent }
                                        openChangePassword  =   { this.openChangePassword  }
                                        logOut              =   { this.clearLogOnUserData }
                                    />
                                    : null    
                                } 
                            </AppContainerView>
                        </SafeAreaViewStyled>
                </NavigationContainer>
            </SafeAreaProvider>
        ); //end return statementt
    } //end render() function
} //end App class

export default dimensionsWidthHOC(App);