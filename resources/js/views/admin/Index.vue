<template>
  <div>
    <main role="main">
      <PageHeader page-title="Dashboard" :crumbs="crumbs" />
      <div class="jumbotron jumbotron-fluid">
        <div class="container px-5">
          <h5 class="display-4">Admin End</h5>
          <p class="lead">Welcome! You can add, edit and delete PDF, HTML & Link resources here.</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import PageHeader from "./components/PageHeader";
export default {
  components: {
    PageHeader
  },
  data() {
    return {
      crumbs: [
        { id: 1, name: 'Dashboard', active: true, path: '' }
      ]
    }
  }
}
</script>