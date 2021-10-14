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
  }
]