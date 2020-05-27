import { registerRootComponent } from 'expo';

import App from './components/App/App.js';

if(__DEV__) {
    //Initialize Reactotron
    import('./config/reactotron.dev.js').then(() => console.log('Reactotron Configured'));
}

registerRootComponent(App);


