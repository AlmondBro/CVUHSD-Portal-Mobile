import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

let Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    flex: 0.1;

    background-color:  ${   props =>   props.districtPosition ? 
                                        (  (props.districtPosition === "Student" || props.renderAsStudent) 
                                            ? "#B41A1F" : "#1E6C93"
                                        )
                                        : "#B41A1F" 
                        };
`;


const PortalLogo = styled.Image.attrs( (props) => {
  
})`
    width: 50;
    height: 50;

    /* margin-right: auto; */
`;

const InfoIconTouchOpacity = styled.TouchableOpacity`
    position: absolute;
    left: 90%;
`;

let SettingsIcon = styled(MaterialCommunityIcons)`
    margin-right: 15;
`;

export { Container, PortalLogo, InfoIconTouchOpacity, SettingsIcon };
