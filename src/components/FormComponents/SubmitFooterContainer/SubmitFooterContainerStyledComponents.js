import styled from 'styled-components/native';

const Container = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    position: absolute; 
    bottom: ${props => props.bottomPosition || 15};
   
    width:  100%;

    margin-top: 150;

    background-color: white;
`;

export { Container };