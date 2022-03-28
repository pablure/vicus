import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/Login.vue";
import About from "./components/About.vue";

const routes = [
  { path: "/Login", component: Login },
  { path: "/about", component: About },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;