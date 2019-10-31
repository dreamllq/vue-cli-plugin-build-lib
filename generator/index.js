module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    scripts: {
      "build": "vue-cli-service build --target lib --name lib --formats umd,umd-min  src/index.js --report",
      "postversion": "npm run build && git push && git push --tags && npm publish"
    },
    "main": "dist/lib.umd.min.js",
    "files": [
      "dist/*",
      "src/index.vue"
    ],
    "peerDependencies": {
      "element-ui": ">= 2.12.0",
      "vue": ">=2.6.10",
      "axios": ">=0.19.0",
      "lodash": ">=4.17.15",
      "moment": ">=2.24.0",
      "vue-template-compiler": ">=2.6.10"
    },
    "devDependencies": {
      "axios": "^0.19.0",
      "core-js": "^3.3.2",
      "element-ui": "^2.12.0",
      "lodash": "^4.17.15",
      "moment": "^2.24.0",
      "vue": "^2.6.10"
    }
  })

  api._injectFileMiddleware(function (files) {
    delete files['public/favicon.ico'];
    delete files['public/index.html'];
    delete files['src/assets/logo.png'];
    delete files['src/components/HelloWorld.vue'];
    delete files['src/App.vue'];
    delete files['src/main.js'];
  });

  api.render('./template')
}