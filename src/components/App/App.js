//Import React/React Native modules
import React, { Fragment, Component } from 'react';
import { Alert, Platform } from 'react-native';

//Import expo/react native components that now exist as separate packages
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-community/async-storage';

//Import React Navigation Packages
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'; //Equivalent to the BrowserRouter in ReactRouter
import { createStackNavigator } from '@react-navigation/stack'; 

import { Reactotron } from './../../config/reactotron.dev.js';

import { AZURE_CLIENT_ID, AZURE_CLIENT_SECRET, AZURE_TENANT_ID, AZURE_DOMAIN_HINT } from './../../../keys.env.js';
//from 'react-native-dotenv'

import * as AuthSession from 'expo-auth-session';

// import * as Updates from 'expo-updates';
import { reloadAsync, checkForUpdateAsync, fetchForUpdate } from 'expo-updates';

import { openAuthSession } from 'azure-ad-graph-expo';

//Import utility functions
import { dimensionsWidthHOC, navigationRef, navigate } from './../../utility-functions.js';

//Import App/Page components
import Header from './../Header/Header.js';
import PageContent from './../PageContent/PageContent.js';
import TabsFooter from './../TabsFooter/TabsFooter.js'

import HomeScreen from './../HomeScreen/HomeScreen.js';

//import styled components
import { AppContainerView, AppHeaderContainerView, ImageBackgroundStyled, WelcomeText, StatusBarSafeView, SafeAreaViewStyled } from './App_StyledComponents.js';

const imagesObjectPath = (Platform.OS === "web") ? require('./../../assets/images/index.js') : require('@assets');
const Images = imagesObjectPath.default;

//Import Images from @assets';

const { Navigator, Screen } = createStackNavigator();  //<Navigator> is equivalent to a <Switch> on React Router, <Screen/> is equivalent to <Route>

const isDev = __DEV__;

const ReactotronDebug = (isDev &&  Reactotron) ? Reactotron : console;

const PORTAL_LIVE_LINK  = "portal.centinela.k12.ca.us";
const IP_ADDRESS_DEV    = "10.2.64.175:3002";
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
            portalLogoSource    :   Images.appHeader.portalLogoRed,
            showPortalLogo      :   true,
            backgroundImage     :   Images.appHeader.backgroundImageRed ,
            
            showRequestModal    :   false,
            showPasswordModal   :   false,   

            authLoading         :   null,
            fontLoaded          :   true
        }; //end this.state object


        this.initialState = { ...this.state };
    } //end constructor

    azureAdAppProps = {
        clientId        :   AZURE_CLIENT_ID,
        tenantId        :   AZURE_TENANT_ID,
        scope           :   "user.read",
        redirectUrl     :   AuthSession.makeRedirectUri({ native: 'cvuhsd.portal://redirect' }),
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
  
        const getOU_URL = `${isDev ? `http://${IP_ADDRESS_DEV}` : `http://${PORTAL_LIVE_LINK}/server`}/getOU`;
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
            return response.json();     //Parse the JSON of the response
        }).then((OU) => {
            Reactotron.log("getOU response:\t", OU);
            parseOUforSchool(OU);
            this.setState({OU:  OU})
        }).catch((error) => {
            Reactotron.error(`Catching error:\t ${error}`);
        });

        getOU();
      }; //end getStudentSchool

    openADSingleSignOn = async () => {
        console.log("handlePressAsync()");
        console.log("AuthSession.makeRedirectUri():\t" + AuthSession.makeRedirectUri());
        
        this.setState({ authLoading: true }); //Set loading to true

        let adUserInfo = await openAuthSession(this.azureAdAppProps);
                               
        ReactotronDebug.log("adUserInfo from App.js:\t" + JSON.stringify(adUserInfo) );

        let portalLogoSource = ( (adUserInfo.jobTitle === "Student") || (this.state.renderAsStudent === true)) ?
                                Images.appHeader.portalLogoRed
                            :   Images.appHeader.portalLogoBlue;

        let backgroundImage = (adUserInfo.jobTitle === "Student" || this.state.renderAsStudent) ?
                                Images.appHeader.backgroundImageRed
                            :   Images.appHeader.backgroundImageBlue;
               
        if ( !adUserInfo.error && (adUserInfo.type === "success") ) {
            this.setState({
                firstName           : adUserInfo.givenName,
                lastName            : adUserInfo.surname,
                title               : adUserInfo.jobTitle,
                site                : adUserInfo.officeLocation,
                email               : adUserInfo.mail,
                portalLogoSource    : portalLogoSource,
                backgroundImage     : backgroundImage,
               // navigateFunction    : navigate,
                authLoading         : false 
            });

            this.getStudentSchool();

            //setInterval(() => this.setLogOnUserData({...this.state}), 1500);
            this.setLogOnUserData({...this.state});

            /*
            if ( (adUserInfo.jobTitle === "Student") && (adUserInfo.officeLocation === null) ) {
                this.getStudentSchool();
            }
            */

            ReactotronDebug.log("App State after authentication:\t" + JSON.stringify(this.state));

            navigate('Home');
               
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
            const currentUserState = await AsyncStorage.getItem(this.USER_INFO);

            if (currentUserState !== null) {
                ReactotronDebug.log("Session exists");
                ReactotronDebug.log(JSON.parse(currentUserState));

                this.setState({ ...JSON.parse(currentUserState) });
                this.getStudentSchool();

                return true;
            } else {
                return false;
            }
        } catch (error) {
            ReactotronDebug.log("checkforExistingLogOn() Error:\t" + JSON.stringify(error));
        }
    }; //end checkforExistingLogOn

    setRenderAsStudent = (renderAsStudent) => {
        this.setState( { renderAsStudent: renderAsStudent } );

        const portalLogoSource = ( this.state.renderAsStudent === false ) ?
            Images.appHeader.portalLogoRed
        :   Images.appHeader.portalLogoBlue;

        // TODO: Figure out why the logic here, although inversed, works
        const backgroundImage = (this.state.title === "Student" || this.state.renderAsStudent) ?
            Images.appHeader.backgroundImageBlue
        :   Images.appHeader.backgroundImageRed;

        this.setState({portalLogoSource: portalLogoSource, backgroundImage: backgroundImage});
        this.setLogOnUserData({...this.state });

        return;
    }; //end setRenderAsStudent

    setShowPortalLogo = (showPortalLogo) => {
        this.setState({ showPortalLogo: showPortalLogo });
        return;
    }; //end setShowPortalLogo

    setShowRequestModal = (showRequestModal) => {
        this.setState( { showRequestModal: showRequestModal } );
        return;
    }; //end setRenderAsStudent

    setShowPasswordModal = (showPasswordModal) => {
        this.setState({ showPasswordModal : showPasswordModal} );
        return;
    }; 

    setLogOnUserData = async (userDataObject) => {
        try {
            ReactotronDebug.log("setLogOnUserData()");
            const userDataObjectJSON = JSON.stringify(userDataObject);
            await AsyncStorage.setItem(this.USER_INFO, userDataObjectJSON);
          } catch (e) {
            ReactotronDebug.error("setLogOnUserData() Error:\t" + JSON.stringify(error));
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
        //navigate('Home');
        console.log('Done.')
    }; //end clearLogOnUserData

    reloadAppFromUpdate = async () => {
        await Updates.reloadAsync();
        return;
    };

    checkForUpdates = async () => {
        const checkforUpdatesDev = false;

        if (!__DEV__ || checkforUpdatesDev === true) {
            const update = await checkForUpdateAsync();

            if (update.isAvailable) {
                await fetchUpdateAsync();

                this.setState({ showUpdate: true } );

                return;
            } //end if-statement 
            else {
                return;
            }
        } else {
            return;
        }
    };

    componentDidMount = () => {
        //console.log("Props:\t" + JSON.stringify(this.props) );
        console.log("Width:\t" + this.props.width);

        if (__DEV__ && Reactotron) {
            Reactotron.log('Reactotron running');
        }
        
        this.checkForUpdates();
        
        this.setState({ fontLoaded: this.props.fontLoaded});
        //this.loadFontsAsync();

        this.checkforExistingLogOn();
        //this.clearLogOnUserData();
    }; //end componentDidMount

    // #B41A1F" : "#1E6C93
    render = () => {
        // if (!this.state.fontLoaded) {
        //     return ( <AppLoading /> );
        // } else {
            return (
                <Fragment>
                    {/* This statusbar component's effect applies more on Android */}
                    { /* The following is a technique using two SafeAreaViews to have the
                                statusbar/top padding be a different color than the bottom padding. 
                                SafeAreaViews are only applicable on iOs 11+ on >iPhone X 

                                Source: https://stackoverflow.com/questions/47725607/react-native-safeareaview-background-color-how-to-assign-two-different-backgro
                        */ 
                    }
                    <StatusBarSafeView 
                        title           =   { this.state.title }
                        renderAsStudent =   { this.state.renderAsStudent }
                        edges           =   { ['top'] }
                    >
                        <StatusBar 
                            backgroundColor =   {   this.state.title ? 
                                                        (   ( 
                                                                this.state.title === "Student" || 
                                                                this.state.renderAsStudent === true
                                                            ) 
                                                            ? "#B41A1F" 
                                                            : "#1E6C93"
                                                        )
                                                        : "#B41A1F" 
                                                } 
                            barStyle        =   "light-content"                   
                            style           =   "light" 
                            animated        =   { true }
                            translucent     =   { false } 
                        />
                    </StatusBarSafeView>

                    <SafeAreaViewStyled 
                                title           =   { this.state.title }
                                renderAsStudent =   { this.state.renderAsStudent }
                                edges           =   { ['left', 'right', 'bottom'] }
                    >
                
                        <NavigationContainer ref={navigationRef}>
                                <AppContainerView>
                                    <ImageBackgroundStyled
                                        source              =   { this.state.backgroundImage }
                                        accessibilityLabel  =   "CVUHSD Mobile Portal"
                                        showPortalLogo      =   { this.state.showPortalLogo }
                                    >
                                        {/* <AppHeaderContainerView> */}
                                            <Header 
                                                showUpdate          =   { this.state.showUpdate } 
                                                firstName           =   { this.state.firstName}
                                                lastName            =   { this.state.lastName }
                                                title               =   { this.state.title }
                                                site                =   { this.state.site }
                                                gradeLevel          =   { this.state.gradeLevel }
                                                renderAsStudent     =   { this.state.renderAsStudent }
                                                portalLogoSource    =   { this.state.portalLogoSource }
                                                reloadAppFromUpdate =   { this.reloadAppFromUpdate }

                                                showPortalLogo      =   {  this.state.showPortalLogo    }
                        
                                                // onPress    =   { navigate ? navigate: null }
                                            />
                                            
                                            { (this.state.title || this.state.renderAsStudent) ? null : <WelcomeText>Welcome</WelcomeText> }
                                        {/* </AppHeaderContainerView> */}
                                    </ImageBackgroundStyled>

                                    <Navigator
                                        headerMode      = "none"
                                        screenOptions   =   {   { 
                                                                    title: null, 
                                                                    headerShown: false,
                                                                    gestureEnabled: false,
                                                                    animationTypeForReplace: this.state.title ? 'push' : 'pop',
                                                                }
                                                            }
                                    >
                                    
                                    {
                                        (this.state.title === null) ? (
                                            <Screen 
                                                name="signIn-screen" 
                                                // options={{ title: null, headerShown: false }}
                                            >
                                                { props => <HomeScreen 
                                                                {...props}
                                                                authLoading         =   {   this.state.authLoading  }
                                                                title               =   {   this.state.title    }
                                                                renderAsStudent     =   {   this.state.renderAsStudent }
                                                                openADSingleSignOn  =   {   this.openADSingleSignOn } 
                                                                setShowPortalLogo   =   {  this.setShowPortalLogo }
                                                            /> 
                                                }
                                            </Screen>
                                        ) : (
                                            <Screen 
                                                name="Home"
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
                                                                
                                                                setShowPortalLogo   =   {  this.setShowPortalLogo }
                                                            />
                                            }
                                        </Screen>
                                        )
                                    }
                                        
                                    </Navigator>
                                    {   this.state.title ? 
                                        <TabsFooter 
                                            appWidth                =   { this.state.appWidth }
                                            email                   =   { this.state.email }
                                            firstName               =   { this.state.firstName }
                                            lastName                =   { this.state.lastName }
                                            title                   =   { this.state.title}
                                            site                    =   { this.state.site }
                                            renderAsStudent         =   { this.state.renderAsStudent }

                                            isModalVisible          =   { this.state.isModalVisible }
                                            showRequestModal        =   { this.state.showRequestModal }

                                            setIsModalVisible       =   { this.setIsModalVisible }
                                            setShowRequestModal     =   { this.setShowRequestModal }

                                            setShowPasswordModal    =   {  this.setShowPasswordModal }
                                            showPasswordModal       =   {  this.state.showPasswordModal } 

                                            setRenderAsStudent      =   { this.setRenderAsStudent }
                                            logOut                  =   { this.clearLogOnUserData }
                                        />
                                        : null    
                                    } 
                                </AppContainerView>
                        </NavigationContainer>
                    </SafeAreaViewStyled>            
                </Fragment>
            ); //end return statementt
        // }
    } //end render() function
} //end App class

export default dimensionsWidthHOC(App);