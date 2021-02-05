import styled from 'styled-components/native';

const Container = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    position: absolute; 
    bottom: ${props => props.bottomPosition || 0};
   
    width:  100%;

    margin-top: ${props => props.marginTop ? props.marginTop : "150px"};

    background-color: white;
`;

export { Container };