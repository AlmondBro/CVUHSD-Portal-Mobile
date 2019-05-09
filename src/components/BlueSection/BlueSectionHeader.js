import React from "react";
import { StyleSheet, TouchableOpacity, Text} from "react-native";

import ToggleButton from "./ToggleButton.js";

const blueSection_Header_Styles = StyleSheet.create({
    blueSection_Header: {
      flex: 1, 
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      backgroundColor: '#1e6c93',
      paddingTop: 8,
      paddingBottom: 8
    },
  
    blueSection_HeaderText: {
      color: "white",
      fontSize: 20,
      marginRight: 12
    },
});


const BlueSectionHeader = (props) => {
    let onPress = () => {
      props.expandToggle() 
    }; //end onPress

    //TODO: How would i trigger the TouchableOpacity's onPresss button in the toggleButton?
    return (
        <TouchableOpacity style={[ blueSection_Header_Styles.blueSection_Header, 
                                  {backgroundColor: !props.expanded ? "#15516b" : "#1e6c93",
                                  borderBottomColor: '#F4F7F9', borderBottomWidth: props.expanded ? 1 : 0}
                                ]}
              onPress={onPress}
              activeOpacity={0.5} //Defaults to 0.2
        >
            <Text style={blueSection_Header_Styles.blueSection_HeaderText}>{props.title}</Text>
            <ToggleButton expanded={props.expanded} expandToggle={onPress} />
        </TouchableOpacity>
    );
}; //end BlueSectionHeader

export default BlueSectionHeader;