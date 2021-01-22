import React, { useEffect } from 'react';

import { Container, InstructionsText, ButtonsContainer, Button } from './OptionsScreenStyledComponents.js';

const OptionsScreen = ({ navigation, districtPosition, renderAsStudent }) => {
    let { navigate } = navigation;

    return (
        <Container>
            <InstructionsText
                districtPosition    =   { districtPosition } 
                renderAsStudent     =   { renderAsStudent }
            >
                Choose to either view all of your current, closed or in 
                progress requests. Likewise, submit a helpdesk ticket if needed.
            </InstructionsText>

            <ButtonsContainer>
                <Button
                    districtPosition    =   { districtPosition } 
                    renderAsStudent     =   { renderAsStudent }

                    buttonTitle = "View Requests"
                    onPress     = { () => navigate("View Requests") }
                />
                <Button
                    districtPosition    =   { districtPosition } 
                    renderAsStudent     =   { renderAsStudent }

                    buttonTitle = "Submit Request"
                    onPress     = { () => navigate("Submit Request") }
                />
            </ButtonsContainer>
        </Container>
    ); //end return statement
}; //end OptionsScreen

export default OptionsScreen;