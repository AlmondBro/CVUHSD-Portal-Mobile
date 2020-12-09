import styled from 'styled-components/native';

import { Image as ImageCache, CacheManager } from "react-native-expo-image-cache";

import FastImage from 'react-native-fast-image';

const TouchableHighlightStyled = styled.TouchableHighlight`
    align-self: center;
    margin-top: 13px;
    margin-bottom: 13px;
    border-radius: 10px;
`;

const LinkButtonImage = styled(ImageCache)`
    width: 300px;
    height: 100px;

    border-radius: 10px;
`;

const FastImageStyled = styled(FastImage).attrs(props => ({
    uri         : props.uri,
    header      : props.headers,
    priority    : props.priority
}))`
    width: 300px;
    height: 100px;

    border-radius: 10px;
`;

export { TouchableHighlightStyled, LinkButtonImage };
