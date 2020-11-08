import React from 'react';
import { registerRootComponent } from 'expo';

import 'react-native-gesture-handler';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import App from './components/App/App.js';

import { Provider as PaperProvider } from 'react-native-paper';

if (__DEV__) {
    //Initialize Reactotron
    import('./config/reactotron.dev.js').then(() => console.log('Reactotron Configured'));
}

console.disableYellowBox = true;

const SafeProvidedApp = () => {
    return (
        <PaperProvider>
            <SafeAreaProvider>
                <App/>
            </SafeAreaProvider>
        </PaperProvider>
       
    ); //end return statement
}; //end SafeProvidedAp

registerRootComponent(SafeProvidedApp);


