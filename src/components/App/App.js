//Import React/React Native modules
import React, { Component, Fragment } from 'react';
import { StyleSheet, ScrollView, StatusBar, Text, Button, Platform } from 'react-native';

import { AZURE_CLIENT_ID, AZURE_CLIENT_SECRET, AZURE_TENANT_ID, AZURE_DOMAIN_HINT } from './../../../keys.env.js';
//from 'react-native-dotenv'

//Import utility functions
import { dimensionsWidthHOC } from './../../utility-functions.js';

import * as AuthSession from 'expo-auth-session';
import * as Updates from 'expo-updates';

import { openAuthSession } from 'azure-ad-graph-expo';

import { SafeAreaProvider } from 'react-native-safe-area-context';

//import styled components
import { UpdateAppView, UpdateTextDescription, ScrollViewStyled, SafeAreaViewStyled, BlueSectionContainer } from './App_StyledComponents.js';

//Import App/Page components
import BlueSection from '../BlueSection/BlueSection.js';
import Header from '../Header.js';
import { staffPortalButtons } from './../staffPortalButtons.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showUpdate: false, 
            adUserInfo: null,
            appWidth: this.props.width
        };
    }

    azureAdAppProps = {
        clientId        :   AZURE_CLIENT_ID,
        tenantId        :   AZURE_TENANT_ID,
        scope           :   "user.read",
        redirectUrl     :   AuthSession.getRedirectUrl(),
        clientSecret    :   AZURE_CLIENT_SECRET,
        domainHint      :   AZURE_DOMAIN_HINT,
        prompt          :   "login"
    };


    handlePressAsync = async () => {
        console.log("handlePressAsync()");
        console.log("AuthSession.makeRedirectUri():\t" + AuthSession.makeRedirectUri());
        let adUserInfo = await openAuthSession(this.azureAdAppProps);

        this.setState({ adUserInfo: adUserInfo });
        console.log("adUserInfo:\t" + JSON.stringify(adUserInfo));
    }; //handlePressAsync()

    componentDidMount = () => {
        const checkforUpdatesDev = false;
        
        console.log("Props:\t" + JSON.stringify(this.props) );
        console.log("Width:\t" + this.props.width);

        if (!__DEV__ || checkforUpdatesDev === true) {
            Updates.checkForUpdateAsync().then(update => {
                if (update.isAvailable) {
                  this.setState({showUpdate: true});
                } //end if-statement
              });
        }
    };

    render() {
        let androidWebViewDebug = false;

        return (
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
                    <ScrollViewStyled
                        width={ this.state.appWidth }
                    >
                        <Header />        
                        { this.state.showUpdate ?
                            ( 
                                <UpdateAppView>
                                    <UpdateTextDescription>A new update is available. Press here to update!</UpdateTextDescription>
                                    <Button
                                        onPress={ () => { console.log("Update reload"); Updates.reload() } }
                                        title="Update Mobile Portal"
                                        color="#1E6C93"
                                        accessibilityLabel="Update Mobile Portal"
            
                                    />
                                </UpdateAppView>
                            )
                            : null
                        }   

                        <BlueSectionContainer>
                            <Button 
                                title="Open SSO" 
                                onPress={this.handlePressAsync}
                            ></Button>
                        </BlueSectionContainer>

                        <BlueSectionContainer>
                            {
                                this.state.adUserInfo ? (
                                    <Fragment>
                                        <Text>{this.state.adUserInfo.jobTitle + " from " + this.state.adUserInfo.officeLocation}</Text>
                                        <Text>{ this.state.adUserInfo.givenName + " " + this.state.adUserInfo.surname }</Text>
                                    </Fragment>
                                    
                                    ) : null
                            }
                        </BlueSectionContainer>

                        <BlueSectionContainer>
                           
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
                    </BlueSectionContainer>
                </ScrollViewStyled>
            </SafeAreaViewStyled>
        </SafeAreaProvider>
        );
    }
}

export default dimensionsWidthHOC(App);