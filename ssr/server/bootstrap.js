process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';

const is = require('ignore-styles');
const reg = require('babel-register');

reg({
  ignore: [ /(node_modules)/ ],
  presets: ['es2015', 'react-app'],
  plugins: [
    'syntax-dynamic-import',
    'dynamic-import-node',
    'react-loadable/babel',
  ],
});

require('./main');