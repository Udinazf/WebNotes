// 这个文件可以修改默认配置，如入口文件地址
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      //入口
      entry: 'src/main.js',
    },
  },
  lintOnSave:false, //关闭语法检查
  //开启代理服务器（方式一）
  // 只能配置一个代理，目标端口是5000
	/* devServer: {
    
    proxy: 'http://localhost:5000'
  }, */
	//开启代理服务器（方式二）
	devServer: {
    proxy: {
      // atguigu是请求前缀,加上前缀必走代理，避免http://localhost:8080下有相同路径名导致的不走代理
      '/atguigu': {
        target: 'http://localhost:5000',
				pathRewrite:{'^/atguigu':''}, // 正则表达式，将以atguigu结尾的路径最后的atguigu改为‘ ’
        // ws: true, //用于支持websocket，默认为true
        // changeOrigin: true //默认为true，用于控制请求头中的host值，伪造为目标端口5000
      },
      '/demo': {
        target: 'http://localhost:5001',
				pathRewrite:{'^/demo':''},
        // ws: true, //用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值
      }
    }
  }
})
