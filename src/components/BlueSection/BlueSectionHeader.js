import React from "react";
import { StyleSheet, View, Text} from "react-native";

import ToggleButton from "./ToggleButton.js";

const blueSection_Header_Styles = StyleSheet.create({
    blueSection_Header: {
      flex: 1, 
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      backgroundColor: 'rgb(30, 108, 147)',
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
    return (
        <View style={blueSection_Header_Styles.blueSection_Header}>
            <Text style={blueSection_Header_Styles.blueSection_HeaderText}>{props.title}</Text>
            <ToggleButton expanded={props.expanded} expandToggle={props.expandToggle} />
        </View>
    );
}; //end BlueSectionHeader

export default BlueSectionHeader;