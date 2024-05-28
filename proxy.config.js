const TARGET_LOCAL = {
  target: "https://localhost:44322",
  secure: false,
};

const TARGET_BORED_API = {
  target: "https://bored-api.appbrewery.com",
  secure: false,
  changeOrigin: true,
  pathRewrite: {
    "^/api/bored": "",
  },
};

const PROXY_CONFIG = {
  "/api/Projects": TARGET_LOCAL,
  "/manage/info": TARGET_LOCAL,
  "/login": TARGET_LOCAL,
  "/logout": TARGET_LOCAL,
  "/register": TARGET_LOCAL,
  "/api/bored/random": TARGET_BORED_API,
};

module.exports = PROXY_CONFIG;
