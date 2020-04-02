module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
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
