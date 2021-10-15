<template>
  <div>
    <main role="main">
      <PageHeader page-title="Home" :crumbs="crumbs" />
      <div class="jumbotron jumbotron-fluid mt-3">
        <div class="container px-5">
          <h5 class="display-4">Visitor End</h5>
          <p class="lead">Welcome! You can download PDF resources, copy HTML resources, and open Link resources here.</p>
        </div>
      </div>
      <div v-if="loading" class="d-flex align-items-center mt-3">
        <strong>Loading...</strong>
        <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
      </div>
      <div v-else class="mt-5">
        <div class="d-flex justify-content-between">
          <h5 class="mb-1">PDF Resources ({{ numPdf }} total)</h5>
          <router-link to="/visitor/pdf" class="card-link">View all</router-link>
        </div>
        <hr>
        <div class="row">
          <div v-if="pdfs.length === 0" class="col-lg-4">
            <div class="card text-center">
              <div class="card-body">
                There are currently no PDF resources.
              </div>
            </div>
          </div>
          <div
            v-else
            v-for="pdf in pdfs"
            :key="pdf.id"
            class="col-lg-4"
          >
            <div class="card">
              <div class="card-body">
                <div class="card-title">
                  <div class="d-flex justify-content-between">
                    <strong class="mb-1">{{ pdf.title }}</strong>
                    <div class="dropdown">
                      <ion-icon name="ellipsis-horizontal-outline" class="dropdown-toggle" data-toggle="dropdown" style="cursor: pointer" />
                      <div class="dropdown-menu">
                        <a class="dropdown-item" :href="pdf.file_path" :download="pdf.file_name">
                          <ion-icon name="download-outline" size="small" class="mr-1"></ion-icon>
                          Download PDF
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <p class="mb-1">{{ pdf.file_name }}</p>
                <small>{{ new Date(pdf.created_at).toUTCString() }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      pdfs: [],
      numPdf: 0,
      htmls: [],
      links: [],
      crumbs: [
        { id: 1, name: 'Home', active: true, path: '' }
      ]
    }
  },
  created() {
    this.axios.get('http://localhost:8000/api/visitor/pdf').then(response => {
      this.pdfs = response.data
      this.numPdf = response.data.length
      if (this.numPdf > 3)
        this.pdfs.splice(3, this.numPdf)
    })
    .catch(error => console.log(error))
    .finally(() => this.loading = false)
  }
}
</script>