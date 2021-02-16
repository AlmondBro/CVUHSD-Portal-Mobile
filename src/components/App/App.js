//Import React/React Native modules
import React, { Fragment, Component } from 'react';
import { Alert, Platform, NativeModules } from 'react-native';

//Import expo/react native components that now exist as separate packages
import { StatusBar } from 'expo-status-bar';
import AuthSession from 'expo-auth-session';
import Updates, { checkForUpdateAsync, fetchUpdateAsync, reloadAsync } from 'expo-updates';
import AsyncStorage from '@react-native-community/async-storage';

//Import React Navigation Packages
import { NavigationContainer } from '@react-navigation/native'; //Equivalent to the BrowserRouter in ReactRouter
import { createStackNavigator } from '@react-navigation/stack'; 

//Import utility functions and Reactotron for logging
import { dimensionsWidthHOC, navigationRef, navigate } from './../../utility-functions.js';
import { Reactotron } from './../../config/reactotron.dev.js';

//Import App/Page components
import SettingsHeader from './../SettingsHeader/SettingsHeader.js';
import Header from './../Header/Header.js';
import PageContent from './../PageContent/PageContent.js';
import TabsFooter from './../TabsFooter/TabsFooter.js'

import HomeScreen from './../HomeScreen/HomeScreen.js';

//import styled components
import { AppContainerView, ImageBackgroundStyled, WelcomeText, StatusBarSafeView, SafeAreaViewStyled } from './App_StyledComponents.js';

import { IP_ADDRESS_DEV, PORTAL_LIVE_LINK, OAUTH_AUTH_URL, OAUTH_TOKEN_URL, OAUTH_CALLBACK_URL_DEV, OAUTH_CALLBACK_URL_PROD, OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET, OAUTH_LOGOUT_URL, ADFS_LOG_OUT, NODEJS_SERVER_PORT } from "@env";

const isDev = __DEV__;
const ReactotronDebug = (isDev &&  Reactotron) ? Reactotron : console;

const imagesObjectPath = (Platform.OS === "web") ? require('./../../assets/images/index.js') : require('@images');
const Images = imagesObjectPath.default;

const { Networking } = NativeModules;
 
const { Navigator, Screen } = createStackNavigator();  //<Navigator> is equivalent to a <Switch> on React Router, <Screen/> is equivalent to <Route>
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showUpdate          :   false, 
            adUserInfo          :   null,
            appWidth            :   this.props.width,

            uid                 :   null,
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

    USER_INFO = '@user_info';

    getStudentSchool = () => {
        ReactotronDebug.log("getStudentSchool()");
  
        const parseOUforSchool = (organizationalUnit) => {
          ReactotronDebug.log("parseOUforSchool()");

          const splitDirectoriesArray = organizationalUnit.split("/");
          const school = splitDirectoriesArray[1];
          const gradeLevel = splitDirectoriesArray[2];
  
          ReactotronDebug.log("splitDirectoriesArray:\t" + splitDirectoriesArray);

          this.setState({site: school, gradeLevel: gradeLevel});
        }; //end parseOUforSchool()
  
        const getOU_URL = `${isDev ? `http://${IP_ADDRESS_DEV}:${NODEJS_SERVER_PORT}` : `https://${PORTAL_LIVE_LINK}/server`}/getOU`;
        const getOU_headers = {
            'Content-Type': 'application/json',
            'credentials': 'include',
            'Access-Control-Allow-Origin': '*',
        };
    
        fetch(getOU_URL, {
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
    }; //end getStudentSchool

    parseIntoQueryString = (requestParams) => {
        /* 
            Loop through the requestParams object and encode each key/value as URI component. 
            Create a string based off of this by appending '&' to each key/value pair. 
            The request is x-www-form-urlencoded as per docs: 
            https://docs.microsoft.com/en-us/graph/use-the-api 
        */

        let formBody = [];
        let queryString = "";

        for (let property in requestParams) {
          let encodedKey = encodeURIComponent(property),
              encodedValue = encodeURIComponent(requestParams[property]);

          formBody.push(encodedKey + '=' + encodedValue);
        }

        queryString = formBody.join('&');
        return queryString;
    }; //parseIntoQueryString()

    getAccessToken = async (authorizationCode) => {
        let requestParams = {
            client_id: OAUTH_CLIENT_ID,
            code: authorizationCode,
            redirect_uri: AuthSession.getRedirectUrl(),
            grant_type: "authorization_code",
            client_secret: OAUTH_CLIENT_SECRET
        };
        
        let formBody = this.parseIntoQueryString(requestParams);
      
        const getAccessTokenURL = OAUTH_TOKEN_URL;
        const getAccessTokenHeaders = {
            'Content-Type': 'application/x-www-form-urlencoded',           
        };

        const accessToken = await fetch(getAccessTokenURL , {
            method: 'POST',
            headers: getAccessTokenHeaders,
            body: formBody
        })
        .then((response) => response.json())
        .then((tokenResponse) => tokenResponse)
        .catch((error) => Reactotron.log("getAccessToken() error:\t", error) );

        ReactotronDebug.log("accessToken:\t", accessToken);
        return accessToken;
    }; //end getAccessToken()

    getUserInfo = async (accessToken) => {
        const getUserInfoURL = `${isDev ? `http://${IP_ADDRESS_DEV}:${NODEJS_SERVER_PORT}` : `https://${PORTAL_LIVE_LINK}/server`}/auth/user-info`;
        
        const getOUHeaders = {
            'Content-Type': 'application/json',
            'credentials': 'include',
            'Access-Control-Allow-Origin': '*',
        };
    
        const userInfo = fetch(getUserInfoURL, {
            method: 'POST',
            headers: getOUHeaders,
            body: JSON.stringify({ accessToken })
        })
        .then((response) => response.json())
        .then((userInfo) => userInfo)
        .catch((error) => {
            Reactotron.error(`getUserInfo() Catching error:\t ${error}`);
        });

        return userInfo;
    }; //end getUserInfo()

    openADSingleSignOn = async () => {
        ReactotronDebug.log("handlePressAsync()");
        ReactotronDebug.log("AuthSession.makeRedirectUri():\t" + AuthSession.makeRedirectUri());
        
        this.setState({ authLoading: true }); //Set loading to true

        const redirectUrl = isDev ? OAUTH_CALLBACK_URL_DEV : OAUTH_CALLBACK_URL_PROD;

        ReactotronDebug.log("authUrl", OAUTH_AUTH_URL);

        const authUrl  =    `${OAUTH_AUTH_URL}` +
                            `?resource=${encodeURIComponent("http://localhost:3000")}` +
                            `&response_type=${encodeURIComponent("code")}` +
                            `&redirect_uri=${encodeURIComponent(AuthSession.getRedirectUrl())}` +
                            `&client_id=${encodeURIComponent(OAUTH_CLIENT_ID)}` +
                            // `&response_mode=${"fragment"}` + 
                            // `&scope=${"openid"}` + 
                            `&state=${Math.random()*100 + 20}`;
                       


        let authSessionResults = await AuthSession.startAsync({
            authUrl: authUrl   
        });

        if ( !(authSessionResults.type === "cancel" || authSessionResults.type === "dismiss" || authSessionResults.type === "error" || authSessionResults.type === "locked")) {
            const { code: authorizationCode } = authSessionResults.params;
                  
            ReactotronDebug.log("authorizationCode:\t", authorizationCode);
            
            ReactotronDebug.log("authSessionResults:\t" + JSON.stringify(authSessionResults) );

            const { access_token } = await this.getAccessToken(authorizationCode);

            ReactotronDebug.log("accessToken:\t", access_token);

            const adfsUserInfo = await this.getUserInfo(access_token);

            ReactotronDebug.log("adfsUserInfo:\t", adfsUserInfo);

            let portalLogoSource = ( (adfsUserInfo.jobTitle === "Student") || (this.state.renderAsStudent === true)) ?
                                    Images.appHeader.portalLogoRed
                                :   Images.appHeader.portalLogoBlue;

            let backgroundImage = (adfsUserInfo.jobTitle === "Student" || this.state.renderAsStudent) ?
                                    Images.appHeader.backgroundImageRed
                                :   Images.appHeader.backgroundImageBlue;
                
            if (adfsUserInfo && access_token ) {
                const { username, email, family_name, givenName, jobTitle, accessToken, uid } = adfsUserInfo;
            
                this.setState({
                    uid                 : uid,
                    firstName           : givenName,
                    lastName            : family_name,
                    title               : jobTitle || "staff",
                    email               : email,
                    portalLogoSource    : portalLogoSource,
                    backgroundImage     : backgroundImage,
                // navigateFunction    : navigate,
                    authLoading         : false 
                });

                this.getStudentSchool();

                this.setLogOnUserData({...this.state});

                ReactotronDebug.log("App State after authentication:\t" + JSON.stringify(this.state));

                navigate('Home');
                
            } else {
                ReactotronDebug.log("User canceled operation from App.js");
                this.setState({ authLoading: false });
                
                const alertTitle = "Sign-in failed" ;
                const alertMessage = authSessionResults.error;

                Alert.alert(
                    alertTitle,
                    alertMessage,
                    [
                    {
                        text: "OK",
                        onPress: () => ReactotronDebug.log("OK Pressed"),
                        style: "cancel"
                    },
                    ],
                    { cancelable: false }
                );

                return; 
            } //end else-statement
        } else {
                this.setState({ authLoading: false });
                
                const alertTitle = "Sign-in Dismissed" ;
                const alertMessage = "Sign-in closed or authentication error";

                Alert.alert(
                    alertTitle,
                    alertMessage,
                    [
                    {
                        text: "OK",
                        onPress: () => ReactotronDebug.log("OK Pressed"),
                        style: "cancel"
                    },
                    ],
                    { cancelable: false }
                );
        } //end outer else-statement

    }; //openADSingleSignOn()

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

    adfsLogOut = async () => {
        const adfsLogOut_URL = ADFS_LOG_OUT;
        const adfsLogOut_headers = {
            'Content-Type': 'application/json',
            'credentials': 'include',
            'Access-Control-Allow-Origin': '*',
        };
    
        await fetch(adfsLogOut_URL, {
            method: 'POST',
            headers: adfsLogOut_headers
        }).then((response) => {
            return response.json();     //Parse the JSON of the response
        }).then((response) => {
            Reactotron.log("adfsLogOut response:\t", response);
        }).catch((error) => {
            Reactotron.error(`adfsLogOut() Catching error:\t ${error}`);
        });

        
        await fetch(OAUTH_LOGOUT_URL, {
            method: 'POST',
            headers: adfsLogOut_headers
        }).then((response) => {
            return response.json();     //Parse the JSON of the response
        }).then((response) => {
            Reactotron.log("adfsLogOut response:\t", response);
        }).catch((error) => {
            Reactotron.error(`adfsLogOut() Catching error:\t ${error}`);
        });

        return;
    }; //end adfsLogOut()

    clearCookies = () => {
        return Networking.clearCookies((cleared) => {
            ReactotronDebug.log('cleared hadCookies: ' + cleared.toString());
        });
    };
    appLogOut = async () => {
        try {
            await this.adfsLogOut();
            this.clearCookies();
            await AsyncStorage.clear();
        } catch(error) {
            ReactotronDebug.log(`AppLogOut() error ${error}`);
        }
        this.setState({ ...this.initialState });
    }; //end clearLogOnUserData

    reloadAppFromUpdate = async () => {
        await reloadAsync();
        return;
    };

    checkForUpdates = async () => {
        const checkforUpdatesDev = true;

        if (!isDev || checkforUpdatesDev === true) {
            const { isAvailable: updateAvailable } = await checkForUpdateAsync();

            if (updateAvailable) {
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
        ReactotronDebug.log("Width:\t" + this.props.width);

        if (isDev && Reactotron) {
            ReactotronDebug.log('Reactotron running');
        }
        
        this.checkForUpdates();
        
        this.setState({ fontLoaded: this.props.fontLoaded});
        //this.loadFontsAsync();

        this.checkforExistingLogOn();
        //this.clearLogOnUserData();
    }; //end componentDidMount

    render = () => {
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
                            {
                                !this.state.showPortalLogo ?(
                                    <SettingsHeader
                                        districtPosition    =   { this.state.title }
                                        renderAsStudent     =   { this.state.renderAsStudent }
                                    />
                                ) : null
                            }
                                <AppContainerView>
                                    <ImageBackgroundStyled
                                        source              =   { this.state.backgroundImage }
                                        accessibilityLabel  =   "CVUHSD Mobile Portal"
                                        showPortalLogo      =   { this.state.showPortalLogo }
                                    >
                                        <Header 
                                            showUpdate          =   { this.state.showUpdate } 

                                            uid                 =   { this.state.uid }
                                            firstName           =   { this.state.firstName}
                                            lastName            =   { this.state.lastName }
                                            title               =   { this.state.title }
                                            site                =   { this.state.site }
                                            gradeLevel          =   { this.state.gradeLevel }
                                            renderAsStudent     =   { this.state.renderAsStudent }
                                            portalLogoSource    =   { this.state.portalLogoSource }
                                            reloadAppFromUpdate =   { this.reloadAppFromUpdate }

                                            showPortalLogo      =   {  this.state.showPortalLogo    }
                                        />
                                        { this.state.title && !this.state.showUpdate ? (<WelcomeText>CVUHSD Portal</WelcomeText>) : null }
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

                                            showPortalLogo      =   { this.state.showPortalLogo }

                                            setRenderAsStudent      =   { this.setRenderAsStudent }
                                            logOut                  =   { this.appLogOut }
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