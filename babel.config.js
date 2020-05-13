module.exports = function(api) {
  // presets: ["react-native", "babel-preset-expo", "module:metro-react-native-babel-preset", "module:react-native-dotenv", "@babel/preset-env"],
  api.cache(true);
  return {
    presets: ["module:react-native","react-native", "babel-preset-expo", "module:metro-react-native-babel-preset", "module:react-native-dotenv"],
  };
};
