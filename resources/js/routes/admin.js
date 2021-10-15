export default [
  {
    name: 'admin',
    path: '/admin',
    component: () => import('../views/admin/Index.vue'),
    meta: {
      title: 'Admin - RSRCS',
      layout: 'AppAdminLayout'
    }
  },
  {
    name: 'admin-pdf',
    path: '/admin/pdf',
    component: () => import('../views/admin/admin-pdf/Index.vue'),
    meta: {
      title: 'PDF Resource - RSRCS',
      layout: 'AppAdminLayout'
    }
  },
  {
    name: 'add-pdf',
    path: '/admin/pdf/add-pdf',
    component: () => import('../views/admin/admin-pdf/AddPDF.vue'),
    meta: {
      title: 'Add PDF Resource - RSRCS',
      layout: 'AppAdminLayout'
    }
  },
  {
    name: 'edit-pdf',
    path: '/admin/pdf/edit-pdf',
    component: () => import('../views/admin/admin-pdf/EditPDF.vue'),
    meta: {
      title: 'Edit PDF Resource - RSCRS',
      layout: 'AppAdminLayout'
    }
  },
  {
    name: 'admin-html',
    path: '/admin/html',
    component: () => import('../views/admin/admin-html/Index.vue'),
    meta: {
      title: 'HTML Resource - RSCRS',
      layout: 'AppAdminLayout'
    }
  },
  {
    name: 'add-html',
    path: '/admin/html/add-html',
    component: () => import('../views/admin/admin-html/AddHTML.vue'),
    meta: {
      title: 'Add HTML Resource - RSCRS',
      layout: 'AppAdminLayout'
    }
  },
  {
    name: 'edit-html',
    path: '/admin/html/edit-html',
    component: () => import('../views/admin/admin-html/EditHTML.vue'),
    meta: {
      title: 'Edit HTML Resource - RSCRS',
      layout: 'AppAdminLayout'
    }
  },
  {
    name: 'admin-link',
    path: '/admin/link',
    component: () => import('../views/admin/admin-link/Index.vue'),
    meta: {
      title: 'Link Resource - RSCRS',
      layout: 'AppAdminLayout'
    }
  },
  {
    name: 'add-link',
    path: '/admin/link/add-link',
    component: () => import('../views/admin/admin-link/AddLink.vue'),
    meta: {
      title: 'Add Link Resource - RSCRS',
      layout: 'AppAdminLayout'
    }
  },
  {
    name: 'edit-link',
    path: '/admin/link/edit-link',
    component: () => import('../views/admin/admin-link/EditLink.vue'),
    meta: {
      title: 'Edit Link Resource - RSCRS',
      layout: 'AppAdminLayout'
    }
  }
]