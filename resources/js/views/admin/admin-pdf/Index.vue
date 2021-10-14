<template>
  <div>
    <main role="main">
      <PageHeader page-title="PDF Resource" :crumbs="crumbs" />
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2">
        <p class="text-muted">Here is the list of all your PDF resources to manage</p>
        <button class="btn btn-primary btn-sm" @click="$router.push({ name: 'add-pdf'})">Add PDF Resource</button>
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
          <th>File Name</th>
          <th style="width: 20%;">Added</th>
          <th style="width: 10%" class="text-center">Actions</th>
        </tr>
        </thead>
        <tbody>
          <tr v-if="this.pdfs.length === 0">
            <td colspan="5" class="font-weight-bolder text-center">No PDF Resource exists</td>
          </tr>
          <tr
            v-else
            v-for="(pdf, key) in pdfs"
            :key="pdf.id"
          >
            <td class="text-center">{{ ++key }}</td>
            <td>{{ pdf.title }}</td>
            <td>{{ pdf.file_name }}</td>
            <td>{{ new Date(pdf.created_at).toDateString() }}</td>
            <td class="text-center">
              <div class="dropdown">
                <ion-icon name="ellipsis-horizontal-outline" class="dropdown-toggle" data-toggle="dropdown" style="cursor: pointer" />
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="javascript:void(0)" @click="editPDF(pdf)">
                    <ion-icon name="create-outline" size="small" class="mr-1" />
                    Edit PDF
                  </a>
                  <a class="dropdown-item text-danger" href="javascript:void(0)" @click="deletePDF(pdf)">
                    <ion-icon name="trash-outline" size="small" class="mr-1" />
                    Delete PDF
                  </a>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script>
import PageHeader from "../components/PageHeader";
export default {
  components: { PageHeader },
  data() {
    return {
      loading: true,
      crumbs: [
        { id: 1, name: 'Dashboard', active: false, path: '/admin' },
        { id: 2, name: 'PDF Resource', active: true, path: '' }
      ],
      pdfs: []
    }
  },
  created() {
    this.axios.get('http://localhost:8000/api/admin/pdf').then(response => {
      this.pdfs = response.data
    })
    .catch(error => console.log(error))
    .finally(() => this.loading = false)
  },
  methods: {
    editPDF(pdf) {
      localStorage.setItem('pdfID', pdf.id)
      this.$router.push({ name: 'edit-pdf', params: { id: pdf.id } })
    },
    deletePDF(pdf) {
      this.$swal({
        title: 'Are you sure?',
        text: `This will delete the pdf resource: ${pdf.title}. This action is irreversible.`,
        type: 'warning',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(result => {
        if (result.value) {
          this.loading = true
          const formData = new FormData()
          formData.append('id', pdf.id)
          this.axios.post('http://localhost:8000/api/admin/pdf/delete', formData).then(response => {
            this.$swal({
              title: 'Success',
              text: response.data,
              icon: 'success'
            })
          }).catch(error => {
            this.$swal({
              title: 'Error',
              text: error.response.data.message,
              icon: 'error'
            })
          }).finally(() => {
            this.axios.get('http://localhost:8000/api/admin/pdf').then(response => {
              this.pdfs = response.data
            })
            .catch(error => console.log(error))
            .finally(() => this.loading = false)
          })
        }
      })
    }
  }
}
</script>