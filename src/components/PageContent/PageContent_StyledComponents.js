import styled from 'styled-components/native';
import css from 'styled-css/native';

let BlueSectionContainer = styled.View`
    flex-direction: column;
    align-self: stretch;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
    width: ${props => props.width ? props.width : "auto"};
`;

let ScrollViewStyled = styled.ScrollView.attrs((props) => ({
    contentContainerStyle:  css`
        flex-direction: column;
        align-self: center;
        justify-content: flex-start;
        padding: 0;
        background-color: #F4F7F9;
        width: ${ props.width ? props.width : "auto" };
    `,
}))`
  flex: 1;
`;

export { BlueSectionContainer, ScrollViewStyled }