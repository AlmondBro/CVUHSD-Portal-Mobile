import { Platform, NativeModules } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import url from 'url';

const { hostname } = url.parse(NativeModules.SourceCode.scriptURL);
console.log(hostname); // mine was 192.168.1.2

const Reactotron = (Platform.OS === "web") ? require('reactotron-react-js') : require('reactotron-react-native');

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

