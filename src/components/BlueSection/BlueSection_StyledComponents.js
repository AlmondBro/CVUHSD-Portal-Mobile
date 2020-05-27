import styled from 'styled-components/native';

let BlueSectionHeaderTouchableOpacity = styled.TouchableOpacity`
    flex: 1; 
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
    margin-right: 12;
`;

const ToggleButtonTouchableOpacity = styled.TouchableOpacity`
    background-color: white;
    padding-top: 2;
    padding-bottom: 3;
    padding-left: 4;
    padding-right: 4;
    border-radius: 30;
    border-width: 0;
`;

let ToggleButtonText  = styled.Text`
    font-size: 18;
    text-align: center;
    color: ${props => (props.title === "Student") ? "#B41A1F" : "#1E6C93" };
`;

export { BlueSectionHeaderTouchableOpacity, BlueSectionHeaderText, ToggleButtonTouchableOpacity, ToggleButtonText };