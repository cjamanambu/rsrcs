<template>
  <div>
    <main role="main">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2">
        <p class="text-muted">Here you can edit your Link resource</p>
        <button class="btn btn-secondary btn-sm" @click="$router.push({ name: 'admin-link'})">Go Back</button>
      </div>
      <div v-if="loading" class="d-flex align-items-center mt-3">
        <strong>Loading...</strong>
        <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
      </div>
      <div v-if="!loading" class="card">
        <form @submit.prevent="editLink">
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
            <button v-if="!saving" class="btn btn-primary">Save Changes</button>
            <button v-if="saving" class="btn btn-primary" disabled>Saving... </button>
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
      saving: false,
      linkID: this.$route.params.id || localStorage.getItem('linkID'),
      link: {},
    }
  },
  created() {
    this.axios.get(`${this.$api}admin/link/${this.linkID}`).then(response => {
      this.link.title = response.data.title
      this.link.url = response.data.link
      this.link.newTab = response.data.new_tab === 1
    })
    .catch(error => this.$toast.error(error.response.data.message))
    .finally(() => this.loading = false)
  },
  methods: {
    editLink() {
      this.$swal({
        title: 'Are you sure?',
        text: `This will update the link resource`,
        type: 'warning',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, update it!'
      }).then(result => {
        if (result.value) {
          this.saving = true
          const formData = new FormData()
          formData.append('id', this.linkID)
          formData.append('title', this.link.title)
          formData.append('link', this.link.url)
          formData.append('new_tab', this.link.newTab ? '1' : '0')
          this.axios.post(`${this.$api}admin/link/update`, formData).then(response => {
            this.$router.push({ name: 'admin-link' }).then(() => {
              this.$toast.success(response.data)
            })
          })
          .catch(error => this.$toast.error(error.response.data.message))
          .finally(() => this.saving = false)
        }
      })
    }
  },
  beforeDestroy() {
    localStorage.removeItem('linkID')
  }
}
</script>