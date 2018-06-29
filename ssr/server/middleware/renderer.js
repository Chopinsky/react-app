import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../../src/components/App";
import Loadable from 'react-loadable';
import manifest from '../../build/asset-manifest.json';

const path = require("path");
const fs = require("fs");
const modules = [];

const extractAssets = (assets, chunks) => {
  return Object
          .keys(assets)
          .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
          .map(key => assets[key]);
}

export default (_req, res, _next) => {
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', function (err, htmlData) {
    if (err) {
      console.error(`Error: ${err}`);
      return res.status(404).end();
    }
    
    const html = ReactDOMServer.renderToString(
      <Loadable.Capture report={m => modules.push(m)}>
        <App />
      </Loadable.Capture>
    );

    const chunks = extractAssets(manifest, modules);
    
    return res.send(
      htmlData
        .replace(
          '<div id="root"></div>',
          `<div id="root">${html}</div>`
        )
        .replace(
          '</body>',
          chunks.join('' + '</body>')
        )
    );
  });
};