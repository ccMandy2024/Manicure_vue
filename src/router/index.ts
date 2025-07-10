// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "home", component: () => import("@/views/homePage.vue") },
  // {
  //   path: "/nail-style-0",
  //   name: "nailStyle0",
  //   component: () => import("@/views/NailStyle0.vue"),
  // },
  // {
  //   path: "/nail-style-1",
  //   name: "nailStyle1",
  //   component: () => import("@/views/NailStyle1.vue"),
  // },
  // {
  //   path: "/nail-style-2",
  //   name: "nailStyle2",
  //   component: () => import("@/views/NailStyle2.vue"),
  // },
  // {
  //   path: "/nail-style-3",
  //   name: "nailStyle3",
  //   component: () => import("@/views/NailStyle3.vue"),
  // },
  // {
  //   path: "/nail-style-4",
  //   name: "nailStyle4",
  //   component: () => import("@/views/NailStyle4.vue"),
  // },
  // {
  //   path: "/store-guide",
  //   name: "storeGuide",
  //   component: () => import("@/views/StoreGuide.vue"),
  // },
  // {
  //   path: "/appointment-form",
  //   name: "appointmentForm",
  //   component: () => import("@/views/AppointmentForm.vue"),
  // },
  // { path: "/faq", name: "faq", component: () => import("@/views/FAQ.vue") },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: () => import("@/views/Login.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
