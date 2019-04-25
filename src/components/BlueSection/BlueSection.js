import React, { Component } from 'react';
import {View, StyleSheet } from 'react-native';


//Import BlueSection components
import BlueSectionHeader from "./BlueSectionHeader.js";
import BlueSectionContent from "./BlueSectionContent.js"; 

const styles = StyleSheet.create({
    blueSection: {
      alignItems: "center",
      alignSelf: 'stretch',
      justifyContent: "center",
      paddingTop: 15,
      paddingBottom: 15
    }
});

class BlueSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.blueSection}>
                <BlueSectionHeader title={this.props.title}/>
                <BlueSectionContent />
            </View>
        );
    } //end render() method
} //BlueSection class

export default BlueSection