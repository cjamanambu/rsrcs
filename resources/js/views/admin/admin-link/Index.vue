<template>
  <div>
    <main role="main">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2">
        <p class="text-muted">Here is the list of all your Link resources to manage</p>
        <button class="btn btn-primary btn-sm" @click="$router.push({ name: 'add-link' })">Add Link Resource</button>
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
          <th>Link</th>
          <th style="width: 20%;">Added</th>
          <th style="width: 10%" class="text-center">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="this.links.length === 0">
          <td colspan="5" class="font-weight-bolder text-center">No Link Resource exists</td>
        </tr>
        <tr
          v-else
          v-for="(link, key) in links"
          :key="link.id"
        >
          <td class="text-center">{{ ++key }}</td>
          <td>{{ link.title }}</td>
          <td>{{ link.link }}</td>
          <td>{{ new Date(link.created_at).toUTCString() }}</td>
          <td class="text-center">
            <div class="dropdown">
              <ion-icon name="ellipsis-horizontal-outline" class="dropdown-toggle" data-toggle="dropdown" style="cursor: pointer" />
              <div class="dropdown-menu">
                <a class="dropdown-item" href="javascript:void(0)" @click="editLink(link)">
                  <ion-icon name="create-outline" size="small" class="mr-1" />
                  Edit Link
                </a>
                <a class="dropdown-item text-danger" href="javascript:void(0)" @click="deleteLink(link)">
                  <ion-icon name="trash-outline" size="small" class="mr-1" />
                  Delete Link
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
export default {
  data() {
    return {
      loading: true,
      links: []
    }
  },
  created() {
    this.axios.get(`${this.$api}admin/link`).then(response => {
      this.links = response.data
    })
    .catch(error => this.$toast.error(error.response.data.message))
    .finally(() => this.loading = false)
  },
  methods: {
    editLink(link) {
      localStorage.setItem('linkID', link.id)
      this.$router.push({ name: 'edit-link', params: { id: link.id } })
    },
    deleteLink(link) {
      this.$swal({
        title: 'Are you sure?',
        text: `This will delete the link resource: ${link.title}. This action is irreversible.`,
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
          formData.append('id', link.id)
          this.axios.post(`${this.$api}admin/link/delete`, formData).then(response => {
            this.$toast.success(response.data)
          })
          .catch(error => this.$toast.error(error.response.data.message))
          .finally(() => {
            this.axios.get(`${this.$api}admin/link`).then(response => {
              this.links = response.data
            })
            .catch(error => this.$toast.error(error.response.data.message))
            .finally(() => this.loading = false)
          })
        }
      })
    }
  }
}
</script>