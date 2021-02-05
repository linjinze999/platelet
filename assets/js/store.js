const Store = require("electron-store");

const schema = {
  hitokoto: {
    type: "number",
    minimum: 7000,
    default: 7000
  },
  autoSpeak1: {
    type: "number",
    default: 0.2
  },
  autoSpeak2: {
    type: "number",
    default: 0.3
  }
};

const store = new Store({ schema });
