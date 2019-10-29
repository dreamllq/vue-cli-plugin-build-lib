module.exports = (api, options, rootOptions) => {
    // 修改 `package.json` 里的字段
    api.extendPackage({
        scripts: {
            "build": "vue-cli-service build --target lib --name lib --formats umd,umd-min  src/index.js --report"
        },
        "main": "dist/lib.umd.min.js",
        "files": [
            "dist/*",
            "src/index.vue"
        ],
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