module.exports = (api, options, rootOptions) => {
    // 修改 `package.json` 里的字段
    api.extendPackage({
      scripts: {
        "build": "vue-cli-service build --target lib --name lib --formats umd,umd-min  src/index.js --report"
      }
    })

    api.render('./template')
  }