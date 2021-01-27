import React, { useEffect, Fragment } from 'react';

import { useRoute } from '@react-navigation/native';

import { Reactotron } from './../../config/reactotron.dev.js';

const isDev = __DEV__;

const ReactotronDebug = (isDev &&  Reactotron) ? Reactotron : console;

const CurrentRouteSetterHOC = ({ navigation, setCurrentRoute, children }) => {
    let route = useRoute();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', (event) => {
            let currentRoute = route.name;
            // navigation.getCurrentRoute();
    
            ReactotronDebug.log("CurrentRouteSetterHOC() Current Route:\t", currentRoute);
            setCurrentRoute(currentRoute);
        });    

        return unsubscribe; //Stop listening to navigation container state changes when the modal is closed.
    }, [ navigation ]);

    return (
        <Fragment>
            { children }
        </Fragment>
    ); //end return statement
}; //end CurrentRouteSetterHOC

export default CurrentRouteSetterHOC;