const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'http://localhost:8082/',
  },
  lintOnSave: false,
})

// module.exports = defineConfig({
//   configureWebpack: {
//     output: {
//       publicPath: '/'
//     }
//   },

//   // publicPath: '/',
//   // outputDir: 'dist',
//   // assetsDir: 'static',

//   // transpileDependencies: true,
//   lintOnSave : false,
//    devServer: {
//     // historyApiFallback: true,'
//     proxy: 'http://localhost:8082'
//     // proxy: {
//     //   '/': {
//     //     target: 'http://localhost:8082',
//     //     changeOrigin: true
//     //   }
//       // '/auth' :{
//       //   target: "http://localhost:8082",
//       //   changeOrigin: true,
//       //   logLevel: 'debug',
//       // },
//       // '/order': {
//       //   target: 'http://localhost:8082',
//       //   changeOrigin: true,
//       //   ws: true,
//       //   logLevel: 'debug',
//       //   },
//       // '/product': {
//       //   target: 'http://localhost:8082',
//       //   changeOrigin: true,
//       //   ws: true,
//       //   logLevel: 'debug',
//       //   },
//       // '/upload': {
//       //   target: 'http://localhost:8082',
//       //   changeOrigin: true,
//       //   logLevel: 'debug',
//       //   },
//       //   '/admin': {
//       //   target: 'http://localhost:8082',
//       //   changeOrigin: true,
//       //   ws: true,
//       //   logLevel: 'debug',
//       //   }
//     }
//   }
// })




// // 이미지 loader
// module.exports = {
//   chainWebpack: config => {
//     config.module
//       .rule('images')
//       .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
//       .use('url-loader')
//       .loader('url-loader')
//       .options({
//         limit: 10000
//       })
//       .end()
//   }
// }