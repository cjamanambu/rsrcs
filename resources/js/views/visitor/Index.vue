<template>
  <div>
    <main role="main">
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
            <HTMLResource :html="html" :is-full="false" />
          </div>
        </div>
        <div class="d-flex justify-content-between mt-5">
          <h5 class="mb-1">Link Resources ({{ numLink }} total)</h5>
          <router-link to="/visitor/link" class="card-link">View all</router-link>
        </div>
        <hr>
        <div class="row">
          <div v-if="links.length === 0" class="col-12">
            <div class="alert alert-info text-center" role="alert">
              There are currently no Link resources.
            </div>
          </div>
          <div
            v-else
            v-for="link in links"
            :key="link.id"
            class="col-lg-4"
          >
            <LinkResource :link="link" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import PDFResource from './components/PDFResource'
import HTMLResource from './components/HTMLResource'
import LinkResource from './components/LinkResource'
export default {
  components: { PDFResource, HTMLResource, LinkResource },
  data() {
    return {
      loading: true,
      pdfs: [],
      numPdf: 0,
      htmls: [],
      numHtml: 0,
      links: [],
      numLink: 0,
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
      .finally(() => {
        this.axios.get(`${this.$api}visitor/link`).then(response => {
          this.links = response.data
          this.numLink = response.data.length
          if (this.numLink > 3)
            this.links.splice(3, this.numLink)
        })
        .catch(error => console.log(error))
        .finally(() => this.loading = false)
      })
    })
  },
  methods: {
  }
}
</script>