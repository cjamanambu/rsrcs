<template>
  <div>
    <main role="main">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2">
        <p class="text-muted">Here is the list of all your HTML resources to manage</p>
        <button class="btn btn-primary btn-sm" @click="$router.push({ name: 'add-html'})">Add HTML Resource</button>
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
          <th>Description</th>
          <th style="width: 20%;">Added</th>
          <th style="width: 10%" class="text-center">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="this.htmls.length === 0">
          <td colspan="5" class="font-weight-bolder text-center">No HTML Resource exists</td>
        </tr>
        <tr
          v-else
          v-for="(html, key) in htmls"
          :key="html.id"
        >
          <td class="text-center">{{ ++key }}</td>
          <td>{{ html.title }}</td>
          <td>{{ html.description }}</td>
          <td>{{ new Date(html.created_at).toDateString() }}</td>
          <td class="text-center">
            <div class="dropdown">
              <ion-icon name="ellipsis-horizontal-outline" class="dropdown-toggle" data-toggle="dropdown" style="cursor: pointer" />
              <div class="dropdown-menu">
                <a class="dropdown-item" href="javascript:void(0)" @click="editHTML(html)">
                  <ion-icon name="create-outline" size="small" class="mr-1" />
                  Edit HTML
                </a>
                <a class="dropdown-item text-danger" href="javascript:void(0)" @click="deleteHTML(html)">
                  <ion-icon name="trash-outline" size="small" class="mr-1" />
                  Delete HTML
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
      htmls: []
    }
  },
  created() {
    this.axios.get('http://localhost:8000/api/admin/html').then(response => {
      this.htmls = response.data
    })
    .catch(error => console.log(error))
    .finally(() => this.loading = false)
  },
  methods: {
    editHTML(html) {
      localStorage.setItem('htmlID', html.id)
      this.$router.push({ name: 'edit-html', params: { id: html.id } })
    },
    deleteHTML(html) {
      this.$swal({
        title: 'Are you sure?',
        text: `This will delete the html resource: ${html.title}. This action is irreversible.`,
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
          formData.append('id', html.id)
          this.axios.post('http://localhost:8000/api/admin/html/delete', formData).then(response => {
            this.$toast.success(response.data)
          }).catch(error => {
            this.$toast.error(error.response.data.message)
          }).finally(() => {
            this.axios.get('http://localhost:8000/api/admin/html').then(response => {
              this.htmls = response.data
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