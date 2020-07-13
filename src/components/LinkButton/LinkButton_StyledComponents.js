import styled from 'styled-components/native';

import FastImage from 'react-native-fast-image';


const FastImageStyled = styled(FastImage).attrs(props => ({
    uri         : props.uri,
    header      : props.headers,
    priority    : props.priority
}))`
        width: 300;
        height: 100;
`;

export { FastImageStyled };