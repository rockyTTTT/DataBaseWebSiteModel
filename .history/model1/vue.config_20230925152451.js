const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  runtimeCompiler: true,
  // css:{
  //   loaderOptions:{
  //     postcss: {
  //       plugins: [
  //         require("postcss-pxtorem")({
  //           propList: [], //是一个存储哪些将被转换的属性列表，这里设置为["*"]全部，假设需要仅对边框进行设置，可以写]['*','!border*']
  //         }),
  //       ],
  //     },
  //   }
  // }
})
