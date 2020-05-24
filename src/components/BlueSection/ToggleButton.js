import React, { Component } from "react";

import { StyleSheet, TouchableOpacity, Text } from "react-native";

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
            expanded: this.props.expanded,
            icon: "+" 
        };
    } //end constructor()

    componentDidUpdate = (prevProps) => {
        if (this.state.expanded !== this.props.expanded) {
            this.setState({expanded: this.props.expanded});
        } //end if-statement
      } //end componentDidUpdate()

    onPress = () => {
        console.log("ToggleButton pressed:\t" + this.state.expanded);
        this.setState({
            expanded: !this.state.expanded
        });

        this.props.expandToggle();
    }; //onPress()

    
    render() {
        return (
            <TouchableOpacity 
                style={styles.touchableHighlight}
                onPress={this.onPress}
            >
                <Text style={styles.text}>{!this.state.expanded ? "-" : "+"}</Text>
            </TouchableOpacity>
        );
    }
} //ToggleButton class

export default ToggleButton;