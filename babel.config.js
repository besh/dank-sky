module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "module:react-native-dotenv"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            api: "./src/api",
            assets: "./assets",
            components: "./src/components",
            constants: "./src/constants",
            services: "./src/services",
            state: "./src/state"
          }
        }
      ]
    ]
  };
};
