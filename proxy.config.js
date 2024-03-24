const TARGET = {
  target: "http://localhost:5167",
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
