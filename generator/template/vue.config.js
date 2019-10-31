module.exports = {
  css: {
    extract: false,
  },
  configureWebpack: {
    externals: {
      vue: {
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue',
        root: 'Vue',
      },
      moment: 'moment',
      lodash: 'lodash',
      'element-ui': 'element-ui',
      axios: 'axios'
    },
  }
};
