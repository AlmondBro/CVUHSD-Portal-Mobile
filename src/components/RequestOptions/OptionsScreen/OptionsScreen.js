import React, { useEffect } from 'react';
import { useRoute } from '@react-navigation/native'; //Equivalent to the BrowserRouter in ReactRouter

import { Container, Button } from './OptionsScreenStyledComponents.js';

const OptionsScreen = ({ navigation }) => {
    let { navigate } = navigation;

    return (
        <Container>
            <Button
                buttonTitle = "View Requests"
                onPress     = { () => navigate("View Requests") }
            />
            <Button
                buttonTitle = "Submit Request"
                onPress     = { () => navigate("Submit Request") }
            />
        </Container>
    ); //end return statement
}; //end OptionsScreen

export default OptionsScreen;