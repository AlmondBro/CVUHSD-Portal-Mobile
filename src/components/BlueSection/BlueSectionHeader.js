import React from 'react';

import ToggleButton from './ToggleButton.js';

import { BlueSectionHeaderTouchableOpacity, BlueSectionHeaderText } from './BlueSection_StyledComponents.js';

const BlueSectionHeader = ({ renderAsStudent, title, ...props }) => {
    let onPress = () => {
      props.expandToggle(); 
    }; //end onPress

    //TODO: How would i trigger the TouchableOpacity's onPresss button in the toggleButton?
    return (
        <BlueSectionHeaderTouchableOpacity
              title           = { title }
              renderAsStudent = { renderAsStudent }
              onPress         = { onPress }
              activeOpacity   = { 0.5 } //Defaults to 0.2
        >
            <BlueSectionHeaderText>
              { props.headerTitle }
            </BlueSectionHeaderText>
            
            <ToggleButton 
              title           = { title }
              renderAsStudent = { renderAsStudent }
              expanded        = { props.expanded } 
              expandToggle    = { onPress } 
            />
        </BlueSectionHeaderTouchableOpacity>
    );
}; //end BlueSectionHeader

export default BlueSectionHeader;