const Store = require("electron-store");

const schema = {
  hitokoto: {
    type: "number",
    minimum: 7000,
    default: 7000
  }
};

const store = new Store({ schema });
