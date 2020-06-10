import React from 'react';
import { Button } from 'react-native';

//Import SafeAreaView so that elements do not overlap with status bars or notches
import { SafeAreaView } from 'react-native-safe-area-context';

//Iimport styled components
import { ModalStyled, WebViewStyled } from './ChangePassword_StyledComponents.js';


let ChangePassword = ({isModalVisible, setIsModalVisible, ...props}) => {
    return (
    //   <View style={{ flex: 1}}>
        <ModalStyled 
            isVisible       = {isModalVisible} 
            onBackdropPress = { () => setIsModalVisible(false) }
            onSwipeComplete = { () => setIsModalVisible(false) }
            swipeDirection  = { ["down", "up"] }
        >
          <SafeAreaView style={{ flex: 1, borderTopLeftRadius: "100%", borderTopRightRadius: "100%"}} >
            <WebViewStyled 
                source              =   { { uri: 'https://sso.centinela.k12.ca.us/adfs/portal/updatepassword/' } } 
                originWhitelist     =   { ['https://'] }
                bounces             =   { false }
                // injectJavaScript    =
            />

            <Button 
                title="Close modal" 
                onPress={ () => setIsModalVisible(!isModalVisible) } 
            />
          </SafeAreaView>
        </ModalStyled>
    //   </View>
    ); //end return statement
  
}; //end ChangePassword

export default ChangePassword;