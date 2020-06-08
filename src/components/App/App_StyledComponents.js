import styled from 'styled-components/native';
import { SafeAreaView as SafeAreaViewTwo } from 'react-native-safe-area-context';

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

const ImageBackgroundStyled = styled.ImageBackground`
    flex: 1;
    justify-content: "center"
`;

const WelcomeText = styled.Text`
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
    forceInset: { top: 'never' }
}))`
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-self: stretch;
    background-color:   ${   props => (props.title === null) 
                            ? "#B41A1F" : 
                            (props.title === "Student" || props.renderAsStudent === "true") 
                                ? "#B41A1F" : "#1E6C93" 
                        };
    padding: 0;
    margin: 0;
`;



export { AppContainerView, AppHeaderContainerView, ImageBackgroundStyled, WelcomeText, SafeAreaViewStyled, BlueSectionContainer };