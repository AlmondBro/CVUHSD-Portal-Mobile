import React from 'react';
import { StyleSheet, TouchableOpacity, Text} from 'react-native';

import ToggleButton from './ToggleButton.js';

import { BlueSectionHeaderTouchableOpacity, BlueSectionHeaderText } from './BlueSection_StyledComponents.js';

const blueSection_Header_Styles = StyleSheet.create({
    blueSection_HeaderText: {
      color: "white",
      fontSize: 20,
      marginRight: 12
    },
});


const BlueSectionHeader = (props) => {
    let onPress = () => {
      props.expandToggle(); 
    }; //end onPress

    //TODO: How would i trigger the TouchableOpacity's onPresss button in the toggleButton?
    return (
        <BlueSectionHeaderTouchableOpacity 

              onPress       = { onPress }
              activeOpacity = { 0.5 } //Defaults to 0.2
        >
            <BlueSectionHeaderText>{ props.headerTitle }</BlueSectionHeaderText>
            <ToggleButton expanded={props.expanded} expandToggle={onPress} />
        </BlueSectionHeaderTouchableOpacity>
    );
}; //end BlueSectionHeader

export default BlueSectionHeader;