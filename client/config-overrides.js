const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#1890ff",
      "@text-color": "rgba(0, 0, 0, 1)",
      "@text-color-secondary": "rgba(0, 0, 0, .45)"
    }
  })
);
