import admin from './admin'
import visitor from './visitor'

export const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('../views/Index.vue'),
    meta: {
      title: 'Home - RSRCS'
    }
  },
  ...admin,
  ...visitor,
]