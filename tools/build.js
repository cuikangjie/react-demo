var config = require('./webpack')
const path = require('path')
const {
  build
} = require('kin-toolkits').tools


build(config(false), function(){
  console.log('build')
})
