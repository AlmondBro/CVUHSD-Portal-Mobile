//Import React/React Native modules
import React, { Component, Fragment } from 'react';
import { StyleSheet, View, ScrollView, Dimensions, StatusBar, Text, Button, Platform } from 'react-native';

import { AZURE_CLIENT_ID, AZURE_CLIENT_SECRET, AZURE_TENANT_ID, AZURE_DOMAIN_HINT } from "./../../keys.env.js";
//from 'react-native-dotenv'

import * as AuthSession from 'expo-auth-session';
import * as Updates from 'expo-updates';

import { openAuthSession } from 'azure-ad-graph-expo';

import SafeAreaView from "react-native-safe-area-view";
import { SafeAreaProvider } from 'react-native-safe-area-context';

//Import App/Page components
import BlueSection from "./BlueSection/BlueSection.js";
import Header from "./Header.js";
import { staffPortalButtons } from "./staffPortalButtons.js";

//rgb(30, 108, 147)0
// #F4F7F9
const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    backgroundColor: '#F4F7F9',
    padding: 0,
    margin: 0
  },

  scrollView: {
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'flex-start',
    padding: 0,
    backgroundColor: '#F4F7F9'
  },

  blueSectionContainer: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    padding: 0,
    margin: 0
  }
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showUpdate: false, 
            adUserInfo: null
        };
    }

    getWidth = () => {
        return {
            width: Dimensions.get('window').width
        }
    };

    getHeight= () => {
        return {
            height: Dimensions.get('window').height
        }
    };

    componentDidMount = () => {
        const checkforUpdatesDev = false;
        
        if (!__DEV__ || checkforUpdatesDev === true) {
            Updates.checkForUpdateAsync().then(update => {
                if (update.isAvailable) {
                  this.setState({showUpdate: true});
                } //end if-statement
              });
        }
    };

    azureAdAppProps = {
        clientId        :   AZURE_CLIENT_ID,
        tenantId        :   AZURE_TENANT_ID,
        scope           :   "user.read",
        redirectUrl     :   AuthSession.makeRedirectUri(),
        clientSecret    :   AZURE_CLIENT_SECRET,
        domainHint      :   AZURE_DOMAIN_HINT,
        prompt          :   "login"
    };

    handlePressAsync = async () => {
        console.log("handlePressAsync()");

        let adUserInfo = await openAuthSession(this.azureAdAppProps);

        this.setState({ adUserInfo: adUserInfo });
        console.log("adUserInfo:\t" + JSON.stringify(adUserInfo));
    }; //handlePressAsync()


    render() {
        let androidWebViewDebug = false;

        return (
            <SafeAreaProvider>
                <StatusBar backgroundColor="#F4F7F9" barStyle="dark-content" translucent={true} />
                { /* The following is a technique using two SafeAreaViews to have the
                    statusbar/top padding be a different color than the bottom padding. 
                    SafeAreaViews are only applicable on iOs 11+ on >iPhone X 

                    Source: https://stackoverflow.com/questions/47725607/react-native-safeareaview-background-color-how-to-assign-two-different-backgro
                */ }
                {/* <SafeAreaView style={{ flex:0, backgroundColor: '#F4F7F9' }} /> */}
                <SafeAreaView style={appStyles.container} forceInset={ {bottom: 'never'} }>
                    <ScrollView contentContainerStyle={appStyles.scrollView}>
                        <Header />
                        {/*  Had to hardcode the width of this view to get it to stretch horizontally
                                using the Dimensions module */ }
                        
                        { this.state.showUpdate ?
                            ( <Fragment>
                                <View style={{backgroundColor: "#F4F7F9", marginBottom: 12}}>
                                    <Text style={ {fontSize: 16, paddingLeft: 8, paddingRight: 8, alignSelf: "center", color: "#15516b"} } >A new update is available. Press here to update!</Text>
                                    <Button
                                        onPress={ () => { console.log("Update reload"); Updates.reload() } }
                                        title="Update Mobile Portal"
                                        color="#1E6C93"
                                        accessibilityLabel="Update Mobile Portal"
            
                                    />
                                </View>
                            </Fragment>)
                            : null
                        }   

                        <View style={[appStyles.blueSectionContainer, this.getWidth()]}>
                            <Button 
                                title="Open SSO" 
                                onPress={this.handlePressAsync}
                            ></Button>
                        </View>

                        <View style={[appStyles.blueSectionContainer, this.getWidth()]}>
                            {
                                this.state.adUserInfo ? (
                                    <Fragment>
                                        <Text>{this.state.adUserInfo.jobTitle + " from " + this.state.adUserInfo.officeLocationewef}</Text>
                                        <Text>{ this.state.adUserInfo.givenName + " " + this.state.adUserInfo.surname }</Text>
                                    </Fragment>
                                    
                                    ) : null
                            }
                        </View>

                        <View style={[appStyles.blueSectionContainer, this.getWidth()]}>
                           
                            {   /* Render service statuses only on iOS devices until the WebView 
                                    under Scrollview (where the webview does not scroll) is fixed 
                                */
                                (Platform.OS === 'ios'|| androidWebViewDebug === true) ?
                                    (   <BlueSection 
                                            title="System Statuses" 
                                            expanded={!false}
                                            serviceStatuses={true}
                                        />
                                    ) : null
                            } 
                            <BlueSection 
                                title="Quick Links" 
                                expanded={!true}
                                buttons={staffPortalButtons.quickLinks}
                            />
                            <BlueSection 
                                title="Standard Staff Tools " 
                                expanded={!false}
                                buttons={staffPortalButtons.standardStaffTools}
                            />
                            <BlueSection 
                                title="Administrative Tools" 
                                expanded={!false}
                                buttons={staffPortalButtons.administrativeTools}
                            />
                            <BlueSection 
                                title="Teacher Tools" 
                                expanded={!false}
                                buttons={staffPortalButtons.teacherTools}
                            />
                            <BlueSection 
                                title="Classroom Tools" 
                                expanded={!false}
                                buttons={staffPortalButtons.classroomTools}
                            />
                            <BlueSection 
                                title="Learning Tools" 
                                expanded={!false}
                                buttons={staffPortalButtons.learningTools}
                            />
                            <BlueSection 
                                title="Digital Textbooks" 
                                expanded={!false}
                                buttons={staffPortalButtons.digitalTextbooks}
                            />
                            {/* needs right buttons! */}
                            <BlueSection 
                                title="Digital Library Resources" 
                                expanded={!false}
                                buttons={staffPortalButtons.digitalLibraryResources}
                            />
                            <BlueSection 
                                title="School Websites" 
                                expanded={!false}
                                buttons={staffPortalButtons.schoolWebsites}
                            />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
        );
    }
}

export default App;