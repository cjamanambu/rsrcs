import admin from "./admin"

export const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('../views/Index.vue'),
    meta: {
      title: 'Home - RSRCS'
    }
  },
  ...admin
]