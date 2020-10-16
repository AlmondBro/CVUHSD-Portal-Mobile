import React, { Fragment } from 'react';

import { FontAwesome } from '@expo/vector-icons'; 

//Import ChangePasswordModal and its associated icon
import ChangePassword  from './../ChangePassword/ChangePassword.js';
import ChangePasswordIcon from './../../assets/images/icons/change-password.svg';

//Import styled components
import { TabsFooterContainerView, TabsFooterButton}  from './TabsFooter_StyledComponents.js';

const TabsFooter = ({ renderAsStudent, setRenderAsStudent, isModalVisible, setIsModalVisible, title, logOut }) => {    
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
                onPress         =   { logOut }
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