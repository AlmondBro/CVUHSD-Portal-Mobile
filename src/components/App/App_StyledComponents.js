import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Constants from 'expo-constants';

const { statusBarHeight } = Constants;

let AppContainerView = styled.View`
    flex: 1;
    background-color: white;
/* 
    flex-direction: column;
    justify-content: space-between; */
`;

let AppHeaderContainerView = styled.View`
    flex: 2;

    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const ImageBackgroundStyled = styled.ImageBackground.attrs( (props) => ({
    resizeMode: "cover"
}))`
    flex: ${props => props.showPortalLogo ? 0.75 : 0.2};
    justify-content: center;
`;

const WelcomeText = styled.Text`
    font-family: 'SourceSansPro_400Regular';
    color: #B41A1F;
    /* background-color: white; */
    /* width: 100%; */
    text-align: center;
    font-size: 25;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    align-self: center;
    margin-bottom: 5;
`;

let BlueSectionContainer = styled.View`
    flex-direction: column;
    align-self: stretch;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
    width: ${props => props.width ? props.width : "auto"};
`;

let SafeAreaViewStyled = styled(SafeAreaView).attrs( (props) => ({
    // forceInset: { bottom: 'never' },
}))`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-self: stretch;
    background-color: ${props =>  props.title ? 
                            ( props.title === "Student" || props.renderAsStudent === true) ? 
                                "#B41A1F" : "#1E6C93"
                            : "#B41A1F" 
                        };
    padding: 0;
    margin: 0;
`;

let StatusBarSafeView = styled(SafeAreaView).attrs( (props) => ({
    // forceInset: { bottom: 'never' },
}))`
    flex: 0;
    flex-direction: row;
    height: ${statusBarHeight};
    background-color:  ${props => props.title ? ( ((props.title === "Student") || (props.renderAsStudent === true) ) ? "#B41A1F" : "#1E6C93") : "#B41A1F" };
`;




export { AppContainerView, AppHeaderContainerView, ImageBackgroundStyled, WelcomeText, SafeAreaViewStyled, BlueSectionContainer, StatusBarSafeView,  };