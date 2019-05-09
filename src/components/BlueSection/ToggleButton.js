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
            expanded: this.props.expanded,
            icon: "+" 
        };
    } //end constructor()

    componentWillReceiveProps = (newProps) => {
        if (this.state.expanded !== newProps.expanded) {
            this.setState({expanded: newProps.expanded});
        } //end if-statement
      } //end componentWillReceiveProps(newProps)

    onPress = () => {
        console.log("ToggleButton pressed:\t" + this.state.expanded);
        this.setState({
            expanded: !this.state.expanded
        });

        this.props.expandToggle();
    }; //onPress()

    
    render() {
        return (
            <TouchableHighlight 
                style={styles.touchableHighlight}
                onPress={this.onPress}
            >
                <Text style={styles.text}>{!this.state.expanded ? "-" : "+"}</Text>
            </TouchableHighlight>
        );
    }
} //ToggleButton class

export default ToggleButton;