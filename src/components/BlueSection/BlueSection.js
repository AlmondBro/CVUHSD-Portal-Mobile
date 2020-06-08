import React, { Component } from 'react';

//Import BlueSection components
import BlueSectionHeader from './BlueSectionHeader.js';
import BlueSectionContent from './BlueSectionContent.js'; 

//Import BlueSection styled component
import { BlueSectionContainerView } from './BlueSection_StyledComponents.js';

class BlueSection extends Component {
    //TODO: Fix this bandage of a hard hack of negating the expanded prop0
    constructor(props) {
        super(props);
        this.state = {
          expanded: !this.props.expanded
        } //end  this.state object
    } //end constructor()

    expandToggle = () => {
        this.setState({ expanded: !this.state.expanded });
        console.log("expandToggle");
        console.log("Expand state:\t" + this.state.expanded);
    }

    render = () => {
        return (
            <BlueSectionContainerView>
                <BlueSectionHeader 
                    title           =   { this.props.title } 
                    renderAsStudent =   { this.props.renderAsStudent }
                    headerTitle     =   { this.props.headerTitle }
                    expanded        =   { this.state.expanded } 
                    expandToggle    =   { this.expandToggle }
                /> 
                <BlueSectionContent  
                    title           =   { this.props.title } 
                    renderAsStudent =   { this.props.renderAsStudent }
                    expanded          =   { this.state.expanded } 
                    expandToggle      =   { this.expandToggle }
                    buttons           =   { this.props.buttons }
                    serviceStatuses   =   { this.props.serviceStatuses}
                />
            </BlueSectionContainerView>
        );
    } //end render() method
} //BlueSection class

export default BlueSection;