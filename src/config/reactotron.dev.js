import { Platform, NativeModules } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

//import Reactotron from 'reactotron-react-native';

import url from 'url';

const { hostname } = url.parse(NativeModules.SourceCode.scriptURL);
console.log(hostname); 

const Reactotron = (Platform.OS === "web") ? require('reactotron-react-js').default : require('reactotron-react-native').default;

if (Platform.OS === "web" ) {
  Reactotron
  .configure() // we can use plugins here -- more on this later
  .connect() // let's connect!
} else {
  Reactotron
  .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({host:  hostname}) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
}

export { Reactotron }; 

