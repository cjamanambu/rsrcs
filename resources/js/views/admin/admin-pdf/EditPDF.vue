<template>
  <div>
    <main role="main">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2">
        <p class="text-muted">Here you can edit your PDF resource</p>
        <button class="btn btn-secondary btn-sm" @click="$router.push({ name: 'admin-pdf' })">Go Back</button>
      </div>
      <div v-if="loading" class="d-flex align-items-center mt-3">
        <strong>Loading...</strong>
        <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
      </div>
      <div v-if="!loading" class="card">
        <form @submit.prevent="editPDF" enctype="multipart/form-data">
          <div class="card-body">
            <h5 class="card-title mb-4">Edit PDF Form</h5>
            <div class="form-group mb-4">
              <label for="title">PDF Title</label><span class="text-danger"> *</span>
              <input type="text" class="form-control" id="title" name="title" v-model="pdf.title" required>
            </div>
            <div class="form-group mb-4">
              <label class="">PDF File</label><span class="text-danger"> *</span>
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="file" @change="getFile" accept="application/pdf">
                <label class="custom-file-label" for="file">Choose pdf file</label>
              </div>
              <div v-if="fileUploaded" class="alert alert-info mt-2" role="alert">
                You have chosen {{ pdf.file.name }} to upload.
              </div>
            </div>
            <input type="hidden" name="id" v-model="pdfID" id="id">
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
      pdfID: this.$route.params.id || localStorage.getItem('pdfID'),
      pdf: {
        title: null,
        file: null,
      },
      fileUploaded: false,
    }
  },
  created() {
    this.axios.get(`${this.$api}admin/pdf/${this.pdfID}`).then(response => {
      this.pdf.title = response.data.title
    })
    .catch(error => this.$toast.error(error.response.data.message))
    .finally(() => this.loading = false)
  },
  methods: {
    getFile(e) {
      this.pdf.file = ''
      const fileList = e.target.files
      if (fileList.length > 0) {
        this.pdf.file = fileList[0]
      }
      this.fileUploaded = fileList.length > 0
    },
    editPDF() {
      this.$swal({
        title: 'Are you sure?',
        text: `This will update the pdf resource`,
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
          formData.append('id', this.pdfID)
          formData.append('title', this.pdf.title)
          if (this.pdf.file) {
            formData.append('file', this.pdf.file)
          }
          this.axios.post(`${this.$api}admin/pdf/update`, formData).then(response => {
            this.$router.push({ name: 'admin-pdf' }).then(() => this.$toast.success(response.data))
          })
          .catch(error => this.$toast.error(error.response.data.message))
          .finally(() => this.loading = false)
        }
      })
    }
  },
  beforeDestroy() {
    localStorage.removeItem('pdfID')
  }
}
</script>