const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.join(__dirname, './src/assets/styles/variables.scss'),
        path.join(__dirname, './src/assets/styles/mixins.scss'),
      ],
    },
  },
})
