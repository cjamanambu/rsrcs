<template>
  <div>
    <main role="main">
      <PageHeader page-title="Edit HTML Resource" :crumbs="crumbs" />
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2">
        <p class="text-muted">Here you can edit your HTML resource</p>
        <button class="btn btn-secondary btn-sm" @click="$router.push({ name: 'admin-html'})">Go Back</button>
      </div>
      <div v-if="loading" class="d-flex align-items-center mt-3">
        <strong>Loading...</strong>
        <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
      </div>
      <div v-if="!loading" class="card">
        <form @submit.prevent="editHTML">
          <div class="card-body">
            <h5 class="card-title mb-4">Edit HTML Form</h5>
            <div class="form-group mb-4">
              <label for="title">HTML Title</label><span class="text-danger"> *</span>
              <input type="text" class="form-control" id="title" v-model="html.title" required>
            </div>
            <div class="form-group mb-4">
              <label for="description">HTML Description</label>
              <textarea class="form-control" rows="2" id="description" v-model="html.description"></textarea>
            </div>
            <div class="form-group mb-4">
              <label for="snippet">HTML Snippet</label><span class="text-danger"> *</span>
              <textarea class="form-control" rows="4" id="snippet" v-model="html.snippet" required></textarea>
            </div>
            <button v-if="!loading" class="btn btn-primary">Save Changes</button>
            <button v-if="loading" class="btn btn-primary" disabled>Saving... </button>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      htmlID: this.$route.params.id || localStorage.getItem('htmlID'),
      html: {},
      crumbs: [
        { id: 1, name: 'Dashboard', active: false, path: '/admin' },
        { id: 2, name: 'HTML Resource', active: false, path: '/admin/html' },
        { id: 3, name: 'Edit HTML Resource', active: true, path: '' },
      ],
    }
  },
  created() {
    this.axios.get(`http://localhost:8000/api/admin/html/${this.htmlID}`).then(response => {
      this.html.title = response.data.title
      this.html.description = response.data.description
      this.html.snippet = response.data.snippet
    })
    .catch(error => console.log(error))
    .finally(() => this.loading = false)
  },
  methods: {
    editHTML() {
      this.$swal({
        title: 'Are you sure?',
        text: `This will update the html resource`,
        type: 'warning',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update it!'
      }).then(result => {
        if (result.value) {
          this.loading = true
          const formData = new FormData()
          formData.append('id', this.htmlID)
          formData.append('title', this.html.title)
          formData.append('description', this.html.description)
          formData.append('snippet', this.html.snippet)
          this.axios.post('http://localhost:8000/api/admin/html/update', formData).then(response => {
            this.$router.push({ name: 'admin-html'}).then(() => {
              this.$swal({
                title: 'Success',
                text: response.data,
                icon: 'success'
              })
            })
          }).catch(error => {
            this.$swal({
              title: 'Error',
              text: error.response.data.message,
              icon: 'error'
            })
          }).finally(() => this.loading = false)
        }
      })
    }
  },
  beforeDestroy() {
    localStorage.removeItem('htmlID')
  }
}
</script>