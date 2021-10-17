<template>
  <div>
    <main role="main">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2">
        <p class="text-muted">Here is the list of all your Link resources to open</p>
        <button class="btn btn-secondary btn-sm" @click="$router.push({ name: 'visitor' })">Go Back</button>
      </div>
      <div v-if="loading" class="d-flex align-items-center mt-3">
        <strong>Loading...</strong>
        <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
      </div>
      <div v-else class="row mt-2">
        <div v-if="links.length === 0" class="col-12">
          <div class="alert alert-info text-center" role="alert">
            There are currently no Link resources.
          </div>
        </div>
        <div
          v-else
          v-for="link in links"
          :key="link.id"
          class="col-12 mt-3"
        >
          <LinkResource :link="link" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import LinkResource from './components/LinkResource'
export default {
  components: { LinkResource },
  data() {
    return {
      loading: true,
      links: [],
    }
  },
  created() {
    this.axios.get(`${this.$api}visitor/link`).then(response => {
      this.links = response.data
    })
    .catch(error => this.$toast.error(error.response.data.message))
    .finally(() => this.loading = false)
  },
}
</script>