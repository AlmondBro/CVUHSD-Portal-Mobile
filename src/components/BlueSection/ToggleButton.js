import React, { Component } from 'react';

import { ToggleButtonTouchableOpacity, ToggleButtonText } from './BlueSection_StyledComponents.js'

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
            <ToggleButtonTouchableOpacity 
                onPress={this.onPress}
            >
                <ToggleButtonText>{!this.state.expanded ? "-" : "+"}</ToggleButtonText>
            </ToggleButtonTouchableOpacity>
        );
    }
} //ToggleButton class

export default ToggleButton;