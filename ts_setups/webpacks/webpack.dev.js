const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development', // 개발 모드 설정
  devtool: 'inline-source-map', // 소스맵 설정으로 디버깅 용이
});
