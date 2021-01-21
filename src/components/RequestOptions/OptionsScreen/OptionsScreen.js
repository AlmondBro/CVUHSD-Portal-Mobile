import React, { useEffect } from 'react';
import { useRoute } from '@react-navigation/native'; //Equivalent to the BrowserRouter in ReactRouter

import { Container, Button } from './OptionsScreenStyledComponents.js';

const OptionsScreen = ({ navigation, setModalHeaderTitle }) => {
    let { name: screenName } = useRoute();

    useEffect(() => {
        if (screenName === "submit-request") {
            setModalHeaderTitle("Submit Requests"); 
         }

         if (screenName === "request-options") {
            setModalHeaderTitle("View/Submit Requests"); 
         }
    }, [ screenName ]);
    
    return (
        <Container>
            <Button
                buttonTitle = "View Requests"
                onPress     = { () => navigation.navigate("view-requests")}
            />
            <Button
                buttonTitle = "Submit Request"
                onPress     = { () => navigation.navigate("submit-request")}
            />
        </Container>
    ); //end return statement
}; //end OptionsScreen

export default OptionsScreen;