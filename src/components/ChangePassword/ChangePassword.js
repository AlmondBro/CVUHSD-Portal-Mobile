import React from 'react';
import { Button } from 'react-native';

//Import SafeAreaView so that elements do not overlap with status bars or notches
import { SafeAreaView } from 'react-native-safe-area-context';

//Iimport styled components
import { ModalStyled, WebViewContainer, WebViewStyled, ChangePasswordTextHeader } from './ChangePassword_StyledComponents.js';

import { WebView } from 'react-native-webview';

/*
 ${  (title === null) 
                                                    ? "#B41A1F" : 
                                                    (title === "Student" || renderAsStudent === "true") 
                                                        ? "#B41A1F" : "#1E6C93" 
                                                };
                        
*/
let ChangePassword = ({isModalVisible, setIsModalVisible, title, renderAsStudent, ...props}) => {
    return (
    //   <View style={{ flex: 1}}>
        <ModalStyled 
            isVisible       = {isModalVisible} 
            onBackdropPress = { () => setIsModalVisible(false) }
            onSwipeComplete = { () => setIsModalVisible(false) }
            swipeDirection  = { ["up"] }
        >
          <SafeAreaView style={{ flex: 1, borderTopLeftRadius: "100%", borderTopRightRadius: "100%", paddingBottom: 100}} >
            <WebViewContainer
                title           =   { title }
                renderAsStudent =   { renderAsStudent }
            >
             <ChangePasswordTextHeader>Change Password</ChangePasswordTextHeader> 
               
                <WebViewStyled 
                    source              =   { { uri: 'https://sso.centinela.k12.ca.us/adfs/portal/updatepassword/' } } 
                    originWhitelist     =   { ['https://'] }
                    bounces             =   { false }
                    javaScriptEnabled   =   { true } 
                    injectedJavaScript  =   {   (title === "Student") ?
                                                `
                                                    document.getElementById("footer").style.display = "none"; 
                                                    document.getElementById("cancelButton").style.display = "none";
                                                    document.getElementById("companyLogo").style.display = "none";
                                                    document.getElementById("openingMessage").style.display = "none";
                                                    document.getElementById("submitButton").style.backgroundColor = "#B41A1F";
                                                    document.getElementById("submitButton").style.fontSize = "1.5em";
                                                    document.getElementById("userNameInput").style.borderColor = "#B41A1F";
                                                    document.getElementById("oldPasswordInput").style.borderColor = "#B41A1F";
                                                    document.getElementById("newPasswordInput").style.borderColor = "#B41A1F";
                                                    document.getElementById("confirmNewPasswordInput").style.borderColor = "#B41A1F";

                                                    const meta = document.createElement(\'meta\'); meta.setAttribute(\'content\', \'width=device-width, initial-scale=1, maximum-scale=0.99, user-scalable=0\'); meta.setAttribute(\'name\', \'viewport\'); document.getElementsByTagName(\'head\')[0].appendChild(meta);
                                                ` 
                                                :
                                                `
                                                    document.getElementById("footer").style.display = "none"; 
                                                    document.getElementById("cancelButton").style.display = "none";
                                                    document.getElementById("companyLogo").style.display = "none";
                                                    document.getElementById("openingMessage").style.display = "none";
                                                    document.getElementById("submitButton").style.backgroundColor = "#1E6C93";
                                                    document.getElementById("submitButton").style.fontSize = "1.5em";
                                                    document.getElementById("userNameInput").style.borderColor = "#1E6C93";
                                                    document.getElementById("oldPasswordInput").style.borderColor = "#1E6C93";
                                                    document.getElementById("newPasswordInput").style.borderColor = "#1E6C93";
                                                    document.getElementById("confirmNewPasswordInput").style.borderColor = "#1E6C93";

                                                    const meta = document.createElement(\'meta\'); meta.setAttribute(\'content\', \'width=device-width, initial-scale=1, maximum-scale=0.99, user-scalable=0\'); meta.setAttribute(\'name\', \'viewport\'); document.getElementsByTagName(\'head\')[0].appendChild(meta);
                                                ` 
                                            }

                />

                <Button 
                    title="Close modal" 
                    onPress={ () => setIsModalVisible(!isModalVisible) } 
                />
            </WebViewContainer>
          </SafeAreaView>
        </ModalStyled>
    //   </View>
    ); //end return statement
  
}; //end ChangePassword

export default ChangePassword;