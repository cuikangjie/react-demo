var config = require('./webpack')(true)
const path = require('path')
const {
  server
} = require('kin-toolkits').tools

//热更新
Object.keys(config.entry).forEach(function (name) {
  config.entry[name] = [path.resolve(__dirname, './hot-client')].concat(config.entry[name])
})

const app = server({config:config, port: 9000})

app.start();
