<template>
  <div>
    <main role="main">
      <div class="jumbotron jumbotron-fluid mt-3">
        <div class="container px-5">
          <h5 class="display-4">Admin End</h5>
          <p class="lead">Welcome! You can add, edit and delete PDF, HTML & Link resources here.</p>
        </div>
      </div>
      <div v-if="loading" class="d-flex align-items-center mt-3">
        <strong>Loading...</strong>
        <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
      </div>
      <div v-else class="row mt-3">
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">PDF Resources</h5>
              <p class="card-text">There are currently {{ pdfs }} PDF Resources in RSRCS.</p>
              <router-link to="/admin/pdf" class="card-link">View more</router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">HTML Resources</h5>
              <p class="card-text">There are currently {{ htmls }} HTML Resources in RSRCS.</p>
              <router-link to="/admin/html" class="card-link">View more</router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Link Resources</h5>
              <p class="card-text">There are currently {{ links }} Link Resources in RSRCS.</p>
              <router-link to="/admin/link" class="card-link">View more</router-link>
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
      pdfs: 0,
      htmls: 0,
      links: 0,
    }
  },
  created() {
    this.axios.get(`${this.$api}admin/pdf`).then(response => {
      this.pdfs = response.data.length
    })
    .catch(error => console.log(error))
    .finally(() => {
      this.axios.get(`${this.$api}admin/html`).then(response => {
        this.htmls = response.data.length
      })
      .catch(error => console.log(error))
      .finally(() => {
        this.axios.get(`${this.$api}admin/link`).then(response => {
          this.links = response.data.length
        })
        .catch(error => console.log(error))
        .finally(() => this.loading = false)
      })
    })
  }
}
</script>