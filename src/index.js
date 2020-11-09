import React from 'react';
import { registerRootComponent } from 'expo';

import 'react-native-gesture-handler';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import App from './components/App/App.js';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

if (__DEV__) {
    //Initialize Reactotron
    import('./config/reactotron.dev.js').then(() => console.log('Reactotron Configured'));
}

console.disableYellowBox = true;

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#6200ee',
      accent: 'yellow',
    },
  };

const AppWithProviders = () => {
    return (
        <PaperProvider theme={theme}>
            <SafeAreaProvider>
                <App/>
            </SafeAreaProvider>
        </PaperProvider>
       
    ); //end return statement
}; //end SafeProvidedAp

registerRootComponent(AppWithProviders);


