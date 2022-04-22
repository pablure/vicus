import { createApp } from "vue";
import App from "./App.vue";
import router from "../src/router/router.js";
import './index.css';

createApp(App)
  .use(router)
  .mount("#app");