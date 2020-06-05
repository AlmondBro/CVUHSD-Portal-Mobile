import styled from 'styled-components/native';

const TabsFooterContainerView = styled.View`
    flex: 0.2;
    flex-direction: row;

    border-radius: 0;
    border-top-width: 0px;
    border-color: white;
`;

const TabsFooterBoxView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    color: white;
    background-color:  ${props => (props.title === "Student") ? "#B41A1F" : "#1E6C93" };

    border-radius: 0;
    border-right-width: ${props => props.noBorder ? "0px" : "1px"};
    border-color: white;

    box-shadow: 10px 3px 5px black;
`;

const TabsFooterBoxText = styled.Text`
    color: white;
`;
export { TabsFooterContainerView, TabsFooterBoxView, TabsFooterBoxText};