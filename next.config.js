module.exports = {
  // some configuration
  assetPrefix: process.env.URL_PREFIX ? "/" + process.env.URL_PREFIX : "",
  basePath: process.env.URL_PREFIX ? "/" + process.env.URL_PREFIX : "",
  trailingSlash: true,
};
