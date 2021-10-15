<template>
  <div>
    <main role="main">
      <PageHeader page-title="Add PDF Resource" :crumbs="crumbs" />
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2">
        <p class="text-muted">Here you can add a new PDF resource</p>
        <button class="btn btn-secondary btn-sm" @click="$router.push({ name: 'admin-pdf'})">Go Back</button>
      </div>
      <div class="card">
        <form @submit.prevent="addPdf" enctype="multipart/form-data">
          <div class="card-body">
            <h5 class="card-title mb-4">Add PDF Form</h5>
            <div class="form-group mb-4">
              <label for="title">PDF Title</label><span class="text-danger"> *</span>
              <input type="text" class="form-control" id="title" name="title" v-model="pdf.title" required>
            </div>
            <div class="form-group mb-4">
              <label class="">PDF File</label><span class="text-danger"> *</span>
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="file" @change="getFile" accept="application/pdf" required>
                <label class="custom-file-label" for="file">Choose pdf file</label>
              </div>
              <div v-if="fileUploaded" class="alert alert-info mt-2" role="alert">
                You have chosen {{ pdf.file.name }} to upload.
              </div>
            </div>
            <button v-if="!loading" class="btn btn-primary">Add PDF</button>
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
      pdf: {
        title: null,
        file: null,
      },
      fileUploaded: false,
      loading: false,
      crumbs: [
        { id: 1, name: 'Dashboard', active: false, path: '/admin' },
        { id: 2, name: 'PDF Resource', active: false, path: '/admin/pdf' },
        { id: 3, name: 'Add PDF Resource', active: true, path: '' },
      ],
    }
  },
  methods: {
    getFile(e) {
      this.pdf.file = ''
      const fileList = e.target.files
      if (fileList.length > 0) {
        this.pdf.file = fileList[0]
      }
      this.fileUploaded = fileList.length > 0;

    },
    addPdf() {
      this.$swal({
        title: 'Are you sure?',
        text: `This will add the pdf resource: ${this.pdf.title}`,
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
          formData.append('title', this.pdf.title)
          formData.append('file', this.pdf.file)
          this.axios.post('http://localhost:8000/api/admin/pdf/add', formData).then(response => {
            this.$router.push({ name: 'admin-pdf'}).then(() => {
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