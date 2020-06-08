import styled from 'styled-components/native';
import { SafeAreaView as SafeAreaViewTwo } from 'react-native-safe-area-context';

let AppContainerView = styled.View`
    flex: 1;
    background-color: white;
`;

let AppHeaderContainerView = styled.View`
    flex: 2;

    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const ImageBackgroundStyled = styled.ImageBackground`
    flex: 1;
    justify-content: "center"
`;

const WelcomeText = styled.Text`
    color: #B41A1F;
    font-size: 25;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

let BlueSectionContainer = styled.View`
    flex-direction: column;
    align-self: stretch;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
    width: ${props => props.width ? props.width : "auto"};
`;

let SafeAreaViewStyled = styled.SafeAreaView.attrs( (props) => ({
    forceInset: { bottom: 'never' }
}))`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-self: stretch;
    background-color: white;
    padding: 0;
    margin: 0
`;



export { AppContainerView, AppHeaderContainerView, ImageBackgroundStyled, WelcomeText, SafeAreaViewStyled, BlueSectionContainer };