const is = require('ignore-styles');
const reg = require('babel-register');

reg({
  ignore: [ /(node_modules)/ ],
  presets: ['es2015', 'react-app'],
});

require('./main');