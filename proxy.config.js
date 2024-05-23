const TARGET = {
  target: "https://localhost:44322",
  secure: false,
};

const PROXY_CONFIG = {
  "/api/Projects": TARGET,
  "/manage/info": TARGET,
  "/login": TARGET,
  "/logout": TARGET,
  "/register": TARGET,
};

module.exports = PROXY_CONFIG;
