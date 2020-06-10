import React, { Component, useState } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert } from 'react-native';

let ChangePassword = (props) => {
    const [ modalVisible, setModalVisible ] = useState(false);
    return (
      <View style={{ marginTop: 0 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          statusBarTranslucent={true}
          transparent={true}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ marginTop: 50, backgroundColor: "red", flex: 0.5 }}>
            <View>
              <Text>Hello World!</Text>
  
              <TouchableHighlight
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
  
        <TouchableHighlight
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
}; //end ChangePassword

export default ChangePassword;