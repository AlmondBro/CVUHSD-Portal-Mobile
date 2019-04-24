import { KeepAwake, registerRootComponent } from 'expo';
import App from "./components/App.js";

//import App from '../../App';

//old main in package.json: node_modules/expo/AppEntry.js

if (__DEV__) {
    KeepAwake.activate();
}

registerRootComponent(App);