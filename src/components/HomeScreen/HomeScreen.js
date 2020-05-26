import React from 'react';

import { HomeScreenContainerView, OpenSSOContainer, SignInButtonTouchableOpacity } from './HomeScreen_StyledComponents.js';

const HomeScreen = (props) => {
    return (
        <HomeScreenContainerView>
            <OpenSSOContainer>
                            <SignInButtonTouchableOpacity 
                                title="Sign In" 
                                color="white"
                                onPress={ props.openADSingleSignOn || console.log("No onPress function")}
                            />
                            { props.children }
            </OpenSSOContainer> 
        </HomeScreenContainerView>
    );
};

export default HomeScreen;