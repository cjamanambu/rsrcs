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
          <div v-if="pdfs.length === 0" class="col-12">
            <div class="alert alert-info text-center" role="alert">
              There are currently no PDF resources.
            </div>
          </div>
          <div
            v-else
            v-for="pdf in pdfs"
            :key="pdf.id"
            class="col-lg-4"
          >
            <PDFResource :pdf="pdf" />
          </div>
        </div>
        <div class="d-flex justify-content-between mt-5">
          <h5 class="mb-1">HTML Resources ({{ numHtml }} total)</h5>
          <router-link to="/visitor/html" class="card-link">View all</router-link>
        </div>
        <hr>
        <div class="row">
          <div v-if="htmls.length === 0" class="col-12">
            <div class="alert alert-info text-center" role="alert">
              There are currently no HTML resources.
            </div>
          </div>
          <div
            v-else
            v-for="html in htmls"
            :key="html.id"
            class="col-lg-4"
          >
            <div class="card">
              <div class="card-body">
                <div class="card-title">
                  <div class="d-flex justify-content-between">
                    <strong class="mb-1">{{ html.title }}</strong>
                    <div class="dropdown">
                      <ion-icon name="ellipsis-horizontal-outline" class="dropdown-toggle" data-toggle="dropdown" style="cursor: pointer" />
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="javascript:void(0)" @click="copyHtml(html)">
                          <ion-icon name="copy-outline" size="small" class="mr-1"></ion-icon>
                          Copy HTML Snippet
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <p class="mb-1">{{ html.description }}</p>
                <small>{{ new Date(html.created_at).toUTCString() }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import PDFResource from './components/PDFResource'
export default {
  components: { PDFResource },
  data() {
    return {
      loading: true,
      pdfs: [],
      numPdf: 0,
      htmls: [],
      numHtml: 0,
      links: [],
      crumbs: [
        { id: 1, name: 'Home', active: true, path: '' }
      ]
    }
  },
  created() {
    this.axios.get(`${this.$api}visitor/pdf`).then(response => {
      this.pdfs = response.data
      this.numPdf = response.data.length
      if (this.numPdf > 3)
        this.pdfs.splice(3, this.numPdf)
    })
    .catch(error => console.log(error))
    .finally(() => {
      this.axios.get(`${this.$api}visitor/html`).then(response => {
        this.htmls = response.data
        this.numHtml = response.data.length
        if (this.numHtml > 3)
          this.htmls.splice(3, this.numHtml)
      })
      .catch(error => console.log(error))
      .finally(() => this.loading = false)
    })
  },
  methods: {
    copyHtml(html) {
      this.$copyText(html.snippet).then(e => {
        this.$toast.info(`Copied ${html.title}!`)
        console.log(e)
      }).catch(e => {
        this.$toast.error('Not Copied')
        console.log(e)
      })
    }
  }
}
</script>