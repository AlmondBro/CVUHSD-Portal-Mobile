import styled from 'styled-components/native';

let HomeScreenContainerView = styled.View`
    flex: 1;
`;

let BlueSectionContainer = styled.View`
    flex-direction: column;
    align-self: stretch;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
    width: ${props => props.width ? props.width : "auto"};
`;

let AppHeaderContainerView = styled.View`
    flex: 2;

    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const WelcomeText = styled.Text`
    color: #B41A1F;
    font-size: 20;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

let OpenSSOContainer = styled(BlueSectionContainer)`
    background-color:  ${   props => (props.title === null) 
                            ? "#B41A1F" : 
                            (props.title === "Student" || props.renderAsStudent) 
                                ? "#B41A1F" : "#1E6C93" 
                        };
    border-top-left-radius: 25;
    border-top-right-radius: 25;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export { HomeScreenContainerView, AppHeaderContainerView, WelcomeText, BlueSectionContainer, OpenSSOContainer };