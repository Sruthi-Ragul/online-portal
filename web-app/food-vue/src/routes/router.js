import { createWebHistory, createRouter } from "vue-router";
import RestaurantList from "../pages/RestaurantList";
import RestaurantDetail from "../pages/RestaurantDetail";

const routes = [
  {
    path: "/",
    name: "RestaurantList",
    component: RestaurantList,
  },
  {
    path: "/restaurant/:name",
    name: "RestaurantDetail",
    component: RestaurantDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;