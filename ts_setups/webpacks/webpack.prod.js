const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production', // 프로덕션 모드 설정
  optimization: {
    minimize: true, // 파일을 최소화
    minimizer: [new TerserPlugin()], // Terser로 JS 압축
  },
});
