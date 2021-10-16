export default [
  {
    name: 'visitor',
    path: '/visitor',
    component: () => import('../views/visitor/Index.vue'),
    meta: {
      title: 'Admin - RSRCS',
      layout: 'AppVisitorLayout'
    }
  },
  {
    name: 'visitor-pdf',
    path: '/visitor/pdf',
    component: () => import('../views/visitor/VisitorPDF.vue'),
    meta: {
      title: 'PDF Resource - RSRCS',
      layout: 'AppVisitorLayout'
    }
  }
]