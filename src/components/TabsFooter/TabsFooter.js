import React, { Fragment, useEffect, useState, useRef } from 'react';

import * as Svg from 'react-native-svg';
import { FontAwesome } from '@expo/vector-icons'; 

import { TabsFooterContainerView, TabsFooterButton}  from './TabsFooter_StyledComponents.js';

import ChangePassword  from './../ChangePassword/ChangePassword.js';

import ChangePasswordIcon from './../../assets/images/icons/change-password.svg';

import Reactotron from 'reactotron-react-native';

const isDev = __DEV__;
const ReactotronDebug = isDev ? Reactotron : console;

const TabsFooter = ({ renderAsStudent, setRenderAsStudent, isModalVisible, setIsModalVisible, title, ...props }) => {    
    // let [userTitle, setUserTitle] = useState(title);

    // useEffect(() => {
    //     console.log(userTitle)
    //   }, [userTitle]);

    //Reactotron.log("props.renderAsStudent:\t" + props.renderAsStudent);
    Reactotron.log("renderAsStudent spread:\t" + renderAsStudent);
    //Reactotron.log("TabsFooter props:\t" + JSON.stringify(props) );
    return (
        <TabsFooterContainerView 
            title   =   { title }    
        >
            { 
                (title !== "Student") ? 
                (
                    <Fragment>
                        <TabsFooterButton
                            renderAsStudent =   { renderAsStudent }
                            title           =   { title }    
                            activeOpacity   =   { 0.5 }
                            onPress         =   { () => setIsModalVisible(!isModalVisible) }
                            noBorder    
                        >
                            <ChangePasswordIcon 
                                width={95} 
                                height={30}
                            />
                        </TabsFooterButton>

                        <TabsFooterButton
                            renderAsStudent =   {  renderAsStudent }
                            title           =   {   title }    
                            activeOpacity   =   {   0.5 }
                            onPress         =   { () => setRenderAsStudent(!renderAsStudent) }
                            noBorder        
                        >
                            <FontAwesome 
                                name    =   { renderAsStudent ? "user" : "graduation-cap" } 
                                size    =   {   30  } 
                                color   =   "white" 
                            />
                        </TabsFooterButton>
                    </Fragment>
                )
                : null
            } 
          
            <TabsFooterButton
                renderAsStudent =   {  renderAsStudent }
                title           =   { title }    
                activeOpacity   =   { 0.5 }
                noBorder        
            >
                <FontAwesome 
                    name    =   "sign-out" 
                    size    =   {30} 
                    color   =   "white" 
                />
                
            </TabsFooterButton>
           
            { 
                /* Only render the ChangePasswordModal if the signed-in user is not a student */
                (title !== "Student") ? 
                    (
                        <ChangePassword 
                            isModalVisible      =   {   isModalVisible  }
                            setIsModalVisible   =   {   setIsModalVisible   }
                            title               =   {   title   }
                            renderAsStudent     =   {   renderAsStudent }
                        />
                    )
                    : null
            }
            
        </TabsFooterContainerView>
    ); //end return statement
}; //end TabsFooter()

export default TabsFooter;