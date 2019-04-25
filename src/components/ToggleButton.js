import React, { Component } from "react";

import { View, StyleSheet, TouchableHighlight, Text } from "react-native";

const styles = StyleSheet.create({
    touchableHighlight: {
        backgroundColor: 'white',
        borderRadius: 0.8
    }
});

class ToggleButton extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            icon: "+"
        };
    } //end constructor()

    onPress = () => {
        console.log("ToggleButton pressed");
    }; //onPress()

    
    render () {
        return (
            <TouchableHighlight 
                    style={styles.touchableHighlight}
                    onPress={this.onPress}
                >
                <Text>{this.state.icon}</Text>
            </TouchableHighlight>
        );
    }
} //ToggleButton class

export default ToggleButton;