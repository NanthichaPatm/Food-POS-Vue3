import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Header from "../components/Header.vue";
import HomeMenu from "../views/HomeMenu.vue";
import Customers from "../views/Customers.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: HomeView,
    },
    {
      path: "/manage",
      name: "manage",
      component: Header,
      children: [
        {
          path: "home",
          name: "home",
          component: HomeMenu,
        },
        {
          path: "customers",
          name: "customers",
          component: Customers,
        },
      ],
    },
  ],
});

export default router;
