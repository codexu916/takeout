const path = require('path');

//拼接路径
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  runtimeCompiler: true,
  lintOnSave: false, //关闭eslint的规则
 

  // configureWebpack:{//内部写webpack原生配置
  //   resolve:['.js','.vue','.json'],
  //   alias: {
  //     '@':path.resolve(__dirname,'src'),
  //     '@components':path.resolve(__dirname,'src/components'),
  //   }
  // }
}