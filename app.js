const config = require('./webpack.config');
const fs = require('fs');
const path = require('path');
const port = (process.env.PORT || 3000);
const resumePath = path.join(__dirname, 'resume.pdf');
const request = require('request');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');


const server = new WebpackDevServer(webpack(config), {
  historyApiFallback: true,
  publicPath: config.output.publicPath,
  hot: true,
  setup: function(app) {
  }
});
server.listen(port, function (err, result) {
  if (err) {
    console.log(err)
  }
  console.log(`Listening at http://localhost:${port}`)
});
