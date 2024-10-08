import { createApp } from "vue";
import App from "./App.vue";
import store from "./stores";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import ArgonDashboard from "./argon-dashboard";
import { createPinia } from "pinia";

const appInstance = createApp(App);

const pinia = createPinia();
appInstance.use(pinia);

appInstance.use(store);
appInstance.use(router);
appInstance.use(ArgonDashboard);

appInstance.mount("#app");
