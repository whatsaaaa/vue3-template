module.exports = {
  // Configure Webpack's dev server.
  // https://cli.vuejs.org/guide/cli-service.html
  devServer: {
    ...(process.env.API_BASE_URL
      ? // Proxy API endpoints to the production base URL.
      { proxy: { "/api": { target: process.env.API_BASE_URL } } }
      : // Proxy API endpoints a local mock API.
      { before: require("./tests/mock-api") }),
  },
};
