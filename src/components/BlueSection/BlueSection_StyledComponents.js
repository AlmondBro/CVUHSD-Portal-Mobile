import styled from 'styled-components/native';

let BlueSectionContainerView = styled.View`
    flex-direction: column;
    align-self: stretch;
    justify-content: center;
`;

let BlueSectionHeaderTouchableOpacity = styled.TouchableOpacity` 
    flex-direction: row;
    align-self: stretch;
    justify-content: center;
    background-color: ${props => (props.title === "Student") ? "#B41A1F" : "#1E6C93" };
    padding-top: 8;
    padding-bottom: 8;

    border-bottom-color: #F4F7F9;
    
    border-bottom-width: ${props => props.expanded ? 1 : 0};
`;

let BlueSectionHeaderText = styled.Text`
    color: white;
    font-size: 20;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    text-align: center;
    margin-left: auto;
`;

const ToggleButtonTouchableOpacity = styled.TouchableOpacity`
    background-color: white;
    padding-top: 3;
    padding-bottom: 3;
    padding-left: 4;
    padding-right: 3;
    border-radius: 30;
    border-width: 0;
    height: 35;
    width: 35;

    margin-left: auto;

    margin-right: 8;
`;

let ToggleButtonText  = styled.Text`
    font-size: 18;
    text-align: center;
    color: ${props => (props.title === "Student") ? "#B41A1F" : "#1E6C93" };
`;

export { BlueSectionContainerView, BlueSectionHeaderTouchableOpacity, BlueSectionHeaderText, ToggleButtonTouchableOpacity, ToggleButtonText };