export const routes = [
  {
    path: "/",
    name: "AppLayout",
    component: () => import("../layouts/AppLayout.vue"),
    children: [
      {
        path: "",
        name: "HomeView",
        component: () => import("../views/HomeView.vue"),
        children: [],
      },
      {
        path: "cart",
        name: "CartView",
        component: () => import("../views/CartView.vue"),
        children: [],
      },
      {
        path: "profile",
        name: "ProfileView",
        component: () => import("../views/ProfileView.vue"),
        children: [
          {
            path: "orders",
            name: "OrdersView",
            component: () => import("../views/OrdersView.vue"),
            children: [],
          },
          {
            path: "",
            name: "UserView",
            component: () => import("../views/UserView.vue"),
            children: [],
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    name: "LoginView",
    component: () => import("../views/LoginView.vue"),
    children: [],
  },
];
