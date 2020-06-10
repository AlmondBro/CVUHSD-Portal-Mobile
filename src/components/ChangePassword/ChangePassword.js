import React, { useEffect } from 'react';
import { Text, TouchableHighlight, View, Alert, Button } from 'react-native';

import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

import Modal from 'react-native-modal';

let ChangePassword = ({isModalVisible, setIsModalVisible, ...props}) => {

    // useEffect(() => {
    //     // action here
    // }, [isModalVisible]);

    return (
      <View style={{ flex: 1}}>
        <Modal 
            isVisible={isModalVisible} 
            style={{flex: 1, flexDirection: "column", width: "90%", height: 0, position: 'relative', justifyContent: "center", alignSelf: "center",backgroundColor: "transparent"}}
            // hasBackdrop={true}
            // backdropColor={"#1E6C93"}
            onBackdropPress = { () => setIsModalVisible(false) }
            onSwipeComplete = { () => setIsModalVisible(false) }
            swipeDirection={["down", "up"]}
        >
          <SafeAreaView style={{ flex: 1, borderTopLeftRadius: "100%", borderTopRightRadius: "100%"}} >
            {/* <Text>Hello!</Text> */}
            <WebView source={{ uri: 'https://sso.centinela.k12.ca.us/adfs/portal/updatepassword/' }} style={{ marginTop: 0, width: "100%" }} />

            <Button title="Hide modal" onPress={ () => setIsModalVisible(!isModalVisible) } />
          </SafeAreaView>
        </Modal>
      </View>
    ); //end return statement
  
}; //end ChangePassword

export default ChangePassword;