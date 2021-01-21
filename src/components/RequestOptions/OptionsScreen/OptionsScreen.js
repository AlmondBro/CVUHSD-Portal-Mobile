import React from 'react';

import { Container, Button } from './OptionsScreenStyledComponents.js';

const OptionsScreen = ({ navigation }) => {
    return (
        <Container>
            <Button
                buttonTitle = "View Requests"
                onPress = { () => navigation.navigate("view-requests")}
            />
            <Button
                buttonTitle = "Submit Request"
                onPress = { () => navigation.navigate("submit-request")}
            />
        </Container>
    ); //end return statement
}; //end OptionsScreen

export default OptionsScreen;