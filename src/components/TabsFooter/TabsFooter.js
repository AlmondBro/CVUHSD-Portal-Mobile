import React from 'react';

import { Text } from 'react-native';

import { TabsFooterContainerView, TabsFooterBoxView, TabsFooterBoxText} from './TabsFooter_StyledComponents.js';


const TabsFooter = (props) => {
    return (
        <TabsFooterContainerView 
            title={props.title}
        >

            <TabsFooterBoxView
                title={props.title}
            >
                <TabsFooterBoxText>1</TabsFooterBoxText>
            </TabsFooterBoxView>

            <TabsFooterBoxView
                title={props.title}
            >
                <TabsFooterBoxText>2</TabsFooterBoxText>
            </TabsFooterBoxView>

            <TabsFooterBoxView
                title={props.title}
                noBorder
            >
                <TabsFooterBoxText>3</TabsFooterBoxText>
                
            </TabsFooterBoxView>
        </TabsFooterContainerView>
    ); //end return statement
}; //end TabsFooter()

export default TabsFooter;