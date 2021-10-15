export default [
  {
    name: 'visitor',
    path: '/visitor',
    component: () => import('../views/visitor/Index.vue'),
    meta: {
      title: 'Admin - RSRCS',
      layout: 'AppVisitorLayout'
    }
  }
]