const ReactDOM = require("react-dom/server");
const React = require("react");
const App = require("../../src/components/App");

module.exports = function renderer(req, res, next) {
  
  const html = ReactDOM.renderToString(React.createElement(App, {}, null));
  
  console.log(`Renderer placeholder: ${html}...`);
};