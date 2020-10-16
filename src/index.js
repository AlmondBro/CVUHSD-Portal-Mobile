import React from 'react';
import { registerRootComponent } from 'expo';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import App from './components/App/App.js';

if (__DEV__) {
    //Initialize Reactotron
    import('./config/reactotron.dev.js').then(() => console.log('Reactotron Configured'));
}

console.disableYellowBox = true;

const SafeProvidedApp = () => {
    return (
        <SafeAreaProvider>
            <App/>
        </SafeAreaProvider>
    ); //end return statement
}; //end SafeProvidedAp

registerRootComponent(SafeProvidedApp);


