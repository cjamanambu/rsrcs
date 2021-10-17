export default [
  {
    name: 'admin',
    path: '/admin',
    component: () => import('../views/admin/Index.vue'),
    meta: {
      title: 'Admin - RSRCS',
      layout: 'AppAdminLayout',
      pageTitle: 'Dashboard',
      crumbs: [
        { id: 1, name: 'Dashboard', active: true, path: '' },
      ]
    }
  },
  {
    name: 'admin-pdf',
    path: '/admin/pdf',
    component: () => import('../views/admin/admin-pdf/Index.vue'),
    meta: {
      title: 'PDF Resource - RSRCS',
      layout: 'AppAdminLayout',
      pageTitle: 'PDF Resource',
      crumbs: [
        { id: 1, name: 'Dashboard', active: false, path: '/admin' },
        { id: 2, name: 'PDF Resource', active: true, path: '' }
      ],
    }
  },
  {
    name: 'add-pdf',
    path: '/admin/pdf/add-pdf',
    component: () => import('../views/admin/admin-pdf/AddPDF.vue'),
    meta: {
      title: 'Add PDF Resource - RSRCS',
      layout: 'AppAdminLayout',
      pageTitle: 'Add PDF Resource',
      crumbs: [
        { id: 1, name: 'Dashboard', active: false, path: '/admin' },
        { id: 2, name: 'PDF Resource', active: false, path: '/admin/pdf' },
        { id: 3, name: 'Add PDF Resource', active: true, path: '' },
      ],
    }
  },
  {
    name: 'edit-pdf',
    path: '/admin/pdf/edit-pdf',
    component: () => import('../views/admin/admin-pdf/EditPDF.vue'),
    meta: {
      title: 'Edit PDF Resource - RSCRS',
      layout: 'AppAdminLayout',
      pageTitle: 'Edit PDF Resource',
      crumbs: [
        { id: 1, name: 'Dashboard', active: false, path: '/admin' },
        { id: 2, name: 'PDF Resource', active: false, path: '/admin/pdf' },
        { id: 3, name: 'Edit PDF Resource', active: true, path: '' },
      ],
    }
  },
  {
    name: 'admin-html',
    path: '/admin/html',
    component: () => import('../views/admin/admin-html/Index.vue'),
    meta: {
      title: 'HTML Resource - RSCRS',
      layout: 'AppAdminLayout',
      pageTitle: 'HTML Resource',
      crumbs: [
        { id: 1, name: 'Dashboard', active: false, path: '/admin' },
        { id: 2, name: 'HTML Resource', active: true, path: '' }
      ],
    }
  },
  {
    name: 'add-html',
    path: '/admin/html/add-html',
    component: () => import('../views/admin/admin-html/AddHTML.vue'),
    meta: {
      title: 'Add HTML Resource - RSCRS',
      layout: 'AppAdminLayout',
      pageTitle: 'Add HTML Resource',
      crumbs: [
        { id: 1, name: 'Dashboard', active: false, path: '/admin' },
        { id: 2, name: 'HTML Resource', active: false, path: '/admin/html' },
        { id: 3, name: 'Add HTML Resource', active: true, path: '' },
      ],
    }
  },
  {
    name: 'edit-html',
    path: '/admin/html/edit-html',
    component: () => import('../views/admin/admin-html/EditHTML.vue'),
    meta: {
      title: 'Edit HTML Resource - RSCRS',
      layout: 'AppAdminLayout',
      pageTitle: 'Edit HTML Resource',
      crumbs: [
        { id: 1, name: 'Dashboard', active: false, path: '/admin' },
        { id: 2, name: 'HTML Resource', active: false, path: '/admin/html' },
        { id: 3, name: 'Edit HTML Resource', active: true, path: '' },
      ],
    }
  },
  {
    name: 'admin-link',
    path: '/admin/link',
    component: () => import('../views/admin/admin-link/Index.vue'),
    meta: {
      title: 'Link Resource - RSCRS',
      layout: 'AppAdminLayout',
      pageTitle: 'Link Resource',
      crumbs: [
        { id: 1, name: 'Dashboard', active: false, path: '/admin' },
        { id: 2, name: 'Link Resource', active: true, path: '' }
      ],
    }
  },
  {
    name: 'add-link',
    path: '/admin/link/add-link',
    component: () => import('../views/admin/admin-link/AddLink.vue'),
    meta: {
      title: 'Add Link Resource - RSCRS',
      layout: 'AppAdminLayout',
      pageTitle: 'Add Link Resource',
      crumbs: [
        { id: 1, name: 'Dashboard', active: false, path: '/admin' },
        { id: 2, name: 'Link Resource', active: false, path: '/admin/link' },
        { id: 3, name: 'Add Link Resource', active: true, path: '' },
      ],
    }
  },
  {
    name: 'edit-link',
    path: '/admin/link/edit-link',
    component: () => import('../views/admin/admin-link/EditLink.vue'),
    meta: {
      title: 'Edit Link Resource - RSCRS',
      layout: 'AppAdminLayout',
      pageTitle: 'Edit Link Resource',
      crumbs: [
        { id: 1, name: 'Dashboard', active: false, path: '/admin' },
        { id: 2, name: 'Link Resource', active: false, path: '/admin/link' },
        { id: 3, name: 'Edit Link Resource', active: true, path: '' },
      ],
    }
  }
]