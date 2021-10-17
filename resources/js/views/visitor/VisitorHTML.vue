<template>
  <div>
    <main role="main">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2">
        <p class="text-muted">Here is the list of all your HTML resources to copy</p>
        <button class="btn btn-secondary btn-sm" @click="$router.push({ name: 'visitor' })">Go Back</button>
      </div>
      <div v-if="loading" class="d-flex align-items-center mt-3">
        <strong>Loading...</strong>
        <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
      </div>
      <div v-else class="row mt-2">
        <div v-if="htmls.length === 0" class="col-12">
          <div class="alert alert-info text-center" role="alert">
            There are currently no HTML resources.
          </div>
        </div>
        <div
          v-else
          v-for="html in htmls"
          :key="html.id"
          class="col-12 mt-3"
        >
          <HTMLResource :html="html" :is-full="true" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import HTMLResource from './components/HTMLResource'
export default {
  components: { HTMLResource },
  data() {
    return {
      loading: true,
      htmls: [],
    }
  },
  created() {
    this.axios.get(`${this.$api}visitor/html`).then(response => {
      this.htmls = response.data
    })
    .catch(error => this.$toast.error(error.response.data.message))
    .finally(() => this.loading = false)
  },
  methods: {}
}
</script>