export default [
  {
    name: 'visitor',
    path: '/visitor',
    component: () => import('../views/visitor/Index.vue'),
    meta: {
      title: 'Admin - RSRCS',
      layout: 'AppVisitorLayout',
      pageTitle: 'Home',
      crumbs: [
        { id: 1, name: 'Home', active: true, path: '' },
      ]
    }
  },
  {
    name: 'visitor-pdf',
    path: '/visitor/pdf',
    component: () => import('../views/visitor/VisitorPDF.vue'),
    meta: {
      title: 'PDF Resource - RSRCS',
      layout: 'AppVisitorLayout',
      pageTitle: 'PDF Resource',
      crumbs: [
        { id: 1, name: 'Home', active: false, path: '/visitor' },
        { id: 2, name: 'PDF Resource', active: true, path: '' }
      ]
    }
  },
  {
    name: 'visitor-html',
    path: '/visitor/html',
    component: () => import('../views/visitor/VisitorHTML.vue'),
    meta: {
      title: 'HTML Resource - RSRCS',
      layout: 'AppVisitorLayout',
      pageTitle: 'HTML Resource',
      crumbs: [
        { id: 1, name: 'Home', active: false, path: '/visitor' },
        { id: 2, name: 'HTML Resource', active: true, path: '' }
      ]
    }
  }
]