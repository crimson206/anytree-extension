const path = require('path');

module.exports = {
  entry: {
    index: './src/index.ts',
    packageMerger: './src/packageMerger/index.ts',
    packageCreator: './src/packageCreator/index.ts',
  },
  target: 'node', // Node.js 환경을 위한 설정
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader', // tsconfig.json을 사용하여 타입 검사
            options: {
              configFile: '../tsconfig.json' // 원하는 tsconfig 파일 지정
            }
          }
        ],
        exclude: /node_modules/,
      },
    ],
    
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: (pathData) => {
      return pathData.chunk.name === 'index' 
        ? 'index.js' 
        : '[name]/index.js';
    },
    path: path.resolve(process.cwd(), 'dist'),
    library: {
      type: 'commonjs2', // Node.js 환경에서 사용할 수 있는 형식
    },
  },
  optimization: {
    minimize: true,
  },
  externals: [/^(?!\.|\/).+/i],
};