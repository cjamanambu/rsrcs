<template>
  <div>
    <main role="main">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2">
        <p class="text-muted">Here you can add a new Link resource</p>
        <button class="btn btn-secondary btn-sm" @click="$router.push({ name: 'admin-link'})">Go Back</button>
      </div>
      <div class="card">
        <form @submit.prevent="addLink">
          <div class="card-body">
            <h5 class="card-title mb-4">Add Link Form</h5>
            <div class="form-group mb-4">
              <label for="title">Link Title</label><span class="text-danger"> *</span>
              <input type="text" class="form-control" id="title" v-model="link.title" required>
            </div>
            <div class="form-group mb-4">
              <label for="url">Link URL</label><span class="text-danger"> *</span>
              <input type="url" class="form-control" id="url" v-model="link.url" placeholder="http://localhost.com" required>
            </div>
            <div class="form-group mb-4">
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="new-tab" v-model="link.newTab">
                <label class="custom-control-label" for="new-tab">Check this to open this link in a new tab</label>
              </div>
            </div>
            <button v-if="!loading" class="btn btn-primary">Add Link</button>
            <button v-if="loading" class="btn btn-primary" disabled>Adding... </button>
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
      loading: false,
      link: {},
    }
  },
  methods: {
    addLink() {
      this.$swal({
        title: 'Are you sure?',
        text: `This will add the link resource: ${this.link.title}`,
        type: 'warning',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, add it!'
      }).then(result => {
        if (result.value) {
          this.loading = true
          const formData = new FormData()
          formData.append('title', this.link.title)
          formData.append('link', this.link.url)
          formData.append('new_tab', this.link.newTab ? '1' : '0')
          this.axios.post('http://localhost:8000/api/admin/link/add', formData).then(response => {
            this.$router.push({ name: 'admin-link'}).then(() => {
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
  }
}
</script>