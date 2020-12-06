module.exports = function(api) {
  //React-native-dotenv was not working before. This StackOverflow post provides the solution:
  //https://stackoverflow.com/questions/64225453/unknown-option-error-from-babel-in-react-native-app
  api.cache(true);

  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    plugins: [
      ["module:react-native-dotenv", {
        "moduleName": "@env",
        "path": ".env",
        "blacklist": null,
        "whitelist": null,
        "safe": true,
        "allowUndefined": true
      }]
    ],
    env: {
      production: {
        plugins: ["react-native-paper/babel", "module:react-native-dotenv"], 
      }  //end production object property
    } //end env object property
  }; //end return statement
};
