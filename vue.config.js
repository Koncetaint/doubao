const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:"http://localhost:8088"   //之所以为5000，是因为目标服务器端口是在5000，代理是开在本服务器的，只需目的地
  }      
})
