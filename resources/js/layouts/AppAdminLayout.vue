<template>
  <div>
    <Header title="RSRCS - Admin" />
    <div class="container" style="margin-top: 15vh;">
      <div class="row">
        <div class="col-lg-3">
          <Sidebar />
        </div>
        <div class="col-lg-9">
          <PageHeader :page-title="$route.meta.pageTitle" :crumbs="$route.meta.crumbs" />
          <slot />
          <Footer style="margin-top: 25vh"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
export default {
  name: 'AppAdminLayout',
  components: { Sidebar }
}
</script>