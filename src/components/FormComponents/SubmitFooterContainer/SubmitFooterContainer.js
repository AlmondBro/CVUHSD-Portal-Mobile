import React, { useState, useEffect } from 'react';
import  { Dimensions } from 'react-native';

import { Container } from  './SubmitFooterContainerStyledComponents.js';

const SubmitFooterContainer = ({ districtPosition, renderAsStudent, children }) => {
    const [ headerHeight, setFooterHeight ]  = useState(0);

    const onLayout = (event) => {
        let { height } = event.nativeEvent.layout;

        //const {height} = Dimensions.get('window');
        setFooterHeight(height);
    };

    useEffect(() => {
        console.log("submitFooterHeight:\t", headerHeight);
    }, [ headerHeight ]);

    return (
        <Container
            districtPosition    =   { districtPosition } 
            renderAsStudent     =   { renderAsStudent }

            headerHeight        =   { headerHeight } 

            onLayout            =   { onLayout }
        >
            { children }
        </Container>
    ); //end return statement
}; //end Header()

export default SubmitFooterContainer;