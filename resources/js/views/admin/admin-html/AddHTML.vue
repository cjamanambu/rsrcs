<template>
  <div>
    <main role="main">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2">
        <p class="text-muted">Here you can add a new HTML resource</p>
        <button class="btn btn-secondary btn-sm" @click="$router.push({ name: 'admin-html' })">Go Back</button>
      </div>
      <div class="card">
        <form @submit.prevent="addHTML">
          <div class="card-body">
            <h5 class="card-title mb-4">Add HTML Form</h5>
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
            <button v-if="!loading" class="btn btn-primary">Add HTML</button>
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
      html: {},
    }
  },
  methods: {
    addHTML() {
      this.$swal({
        title: 'Are you sure?',
        text: `This will add the html resource: ${this.html.title}`,
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
          formData.append('title', this.html.title)
          formData.append('description', this.html.description)
          formData.append('snippet', this.html.snippet)
          this.axios.post(`${this.$api}admin/html/add`, formData).then(response => {
            this.$router.push({ name: 'admin-html' }).then(() => {
              this.$toast.success(response.data)
            })
          })
          .catch(error => this.$toast.error(error.response.data.message))
          .finally(() => this.loading = false)
        }
      })
    }
  }
}
</script>