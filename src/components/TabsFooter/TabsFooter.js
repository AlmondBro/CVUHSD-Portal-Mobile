import React, { useEffect, useState, useRef } from 'react';

import * as Svg from 'react-native-svg';
import { FontAwesome } from '@expo/vector-icons'; 

import { TabsFooterContainerView, TabsFooterButton}  from './TabsFooter_StyledComponents.js';

import ChangePasswordIcon from './../../assets/images/icons/change-password.svg';

const TabsFooter = (props) => {    
    // let [userTitle, setUserTitle] = useState(props.title);

    // useEffect(() => {
    //     console.log(userTitle)
    //   }, [userTitle]);

    return (
        <TabsFooterContainerView 
            title   =   {   props.title }    
        >
            <TabsFooterButton
                title           =   {   props.title }    
                activeOpacity   =   {   0.5 }
            >
                <ChangePasswordIcon 
                    width={95} 
                    height={30}
                />
            </TabsFooterButton>

            <TabsFooterButton
                title           =   {   props.title }    
                activeOpacity   =   {   0.5 }
            >
                  <FontAwesome 
                    name    =   "graduation-cap" 
                    size    =   {   30  } 
                    color   =   "white" 
                />
            </TabsFooterButton>

            <TabsFooterButton
                title           =   {   props.title }    
                activeOpacity   =   {   0.5 }
                noBorder
            >
                <FontAwesome 
                    name    =   "sign-out" 
                    size    =   {30} 
                    color   =   "white" 
                />
                
            </TabsFooterButton>
        </TabsFooterContainerView>
    ); //end return statement
}; //end TabsFooter()

export default TabsFooter;