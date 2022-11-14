import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// MSW
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mock/browser");
  worker.start();
}

createApp(App).use(store).use(router).mount("#app");
