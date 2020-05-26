import styled from 'styled-components/native';

let BlueSectionHeaderTouchableOpacity = styled.TouchableOpacity`
    flex: 1; 
    flex-direction: row;
    align-self: stretch;
    justify-content: center;
    background-color: ${props => (props.title === "Student") ? "#B41A1F" : "#1E6C93" };
    padding-top: 8;
    padding-bottom: 8;

    border-bottom-color: '#F4F7F9';
    
    border-bottom-width: ${props => props.expanded ? 1 : 0};
`;

let BlueSectionHeaderText = styled.Text`
    color: white;
    font-size: 20;
    margin-right: 12;
`;

export { BlueSectionHeaderTouchableOpacity, BlueSectionHeaderText };