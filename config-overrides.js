const { 
    override,
    addWebpackAlias
    ,addDecoratorsLegacy
} = require('customize-cra');
const path = require('path');

module.exports = override(
    addWebpackAlias({
      assets: path.resolve(__dirname, './src/assets'),
      data: path.resolve(__dirname, './src/data'),
      utils: path.resolve(__dirname, './src/utils'),
      pages: path.resolve(__dirname, './src/pages'),
      compoments:path.resolve(__dirname, './src/compoments')
    }),
    addDecoratorsLegacy()
);