<template>
  <div>
    <main role="main">
      <PageHeader page-title="HTML Resource" :crumbs="crumbs" />
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2">
        <p class="text-muted">Here is the list of all your HTML resources to manage</p>
        <button class="btn btn-primary btn-sm" @click="$router.push({ name: 'add-html'})">Add HTML Resource</button>
      </div>
      <div v-if="loading" class="d-flex align-items-center mt-3">
        <strong>Loading...</strong>
        <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
      </div>
      <table v-if="!loading" class="table table-bordered table-responsive-sm table-striped">
        <thead>
        <tr>
          <th style="width: 5%">#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Added</th>
          <th style="width: 10%" class="text-center">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="this.htmls.length === 0">
          <td colspan="5" class="font-weight-bolder text-center">No HTML Resource exists</td>
        </tr>
        </tbody>
      </table>

    </main>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader'
export default {
  components: { PageHeader },
  data() {
    return {
      loading: true,
      crumbs: [
        { id: 1, name: 'Dashboard', active: false, path: '/admin' },
        { id: 2, name: 'HTML Resource', active: true, path: '' }
      ],
      htmls: []
    }
  },
  created() {
    this.axios.get('http://localhost:8000/api/admin/html').then(response => {
      this.htmls = response.data
    })
    .catch(error => console.log(error))
    .finally(() => this.loading = false)
  },
}
</script>