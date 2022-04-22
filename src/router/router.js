import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Inicio from "../views/Inicio.vue";
import Register from "../views/Register.vue";
import Logueado from "../views/Logueado.vue";

const routes = [
  { path: "/", component: Inicio },
  { path: "/Login", component: Login },
  { path: "/Register", component: Register },
  { path: "/Logueado", component: Logueado },  
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;