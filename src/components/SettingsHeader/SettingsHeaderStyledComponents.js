import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

let Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    flex: 0.1;

    background-color:  ${   props =>   props.districtPosition ? 
                                        (  (props.districtPosition === "Student" || props.enderAsStudent) 
                                            ? "#B41A1F" : "#1E6C93"
                                        )
                                        : "#B41A1F" 
                        };
`;


const PortalLogo = styled.Image.attrs( (props) => {
  
})`
    width: 50;
    height: 50;

    margin-left: auto;
    /* margin-right: auto; */
`;

let SettingsFAIcon = styled(FontAwesome)`
    margin-left: auto;
    margin-right: 12;
`;

export { Container, PortalLogo, SettingsFAIcon };
