import React, { Component } from "react";

import { StyleSheet, TouchableHighlight, Text } from "react-native";

const styles = StyleSheet.create({
    touchableHighlight: {
        backgroundColor: 'white',
        paddingTop: 2,
        paddingBottom: 3,
        paddingLeft: 4,
        paddingRight: 4,
        borderRadius: 30,
        borderWidth: 0,
    },
    text: {
        fontSize: 18,
        
        textAlign: 'center',
        color: 'rgb(30, 108, 147)'
    }
});

class ToggleButton extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            icon: "+",
            pressed: false
        };
    } //end constructor()

    onPress = () => {
        console.log("ToggleButton pressed");
        this.setState({
            pressed: !this.state.pressed
        });
    }; //onPress()

    
    render() {
        return (
            <TouchableHighlight 
                    style={styles.touchableHighlight}
                    onPress={this.onPress}
                >
                <Text style={styles.text}>{this.state.pressed ? "- " : "+"}</Text>
            </TouchableHighlight>
        );
    }
} //ToggleButton class

export default ToggleButton;