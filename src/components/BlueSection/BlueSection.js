import React, { Component } from 'react';
import {View, StyleSheet } from 'react-native';


//Import BlueSection components
import BlueSectionHeader from "./BlueSectionHeader.js";
import BlueSectionContent from "./BlueSectionContent.js"; 

const styles = StyleSheet.create({
    blueSection: {
        flexDirection: 'column',
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});

class BlueSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
          expanded: this.props.expanded
        }
    }

    expandToggle = () => {
        this.setState({expanded: !this.state.expanded});
        console.log("expandToggle");
        console.log("Expand state:\t" + this.state.expanded);
    }

    render = () => {
        return (
            <View style={styles.blueSection}>
                <BlueSectionHeader 
                    title={this.props.title} 
                    expanded={this.state.expanded} 
                    expandToggle={this.expandToggle}
                /> 
                <BlueSectionContent  
                  expanded={this.state.expanded}
                  expandToggle={this.expandToggle}
                  buttons={this.props.buttons}
                  serviceStatuses={this.props.serviceStatuses}
                />
            </View>
        );
    } //end render() method
} //BlueSection class

export default BlueSection;