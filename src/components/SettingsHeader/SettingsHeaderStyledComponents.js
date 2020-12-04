import styled from 'styled-components/native';

let Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    flex: 0.1;

    background-color:  ${   props =>   props.districtPosition ? 
                                        (  (props.districtPosition === "Student" || props.enderAsStudent) 
                                            ? "#B41A1F" : "#1E6C93"
                                        )
                                        : "#B41A1F" 
                        };
`;


let PortalLogo = styled.Image.attrs( (props) => {
  
})`
    width: 50;
    height: 50;

    margin-left: 12;

`;


export { Container, PortalLogo };
