// const CracoAlias = require("react-app-alias");
const CracoAlias = require("craco-alias");

module.exports = {
  typescript: {
    enableTypeChecking: true,
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
  ],
};
