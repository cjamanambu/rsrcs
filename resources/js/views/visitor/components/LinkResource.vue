<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title">
        <div class="d-flex justify-content-between">
          <strong class="mb-1">{{ link.title }}</strong>
          <div class="dropdown">
            <ion-icon name="ellipsis-horizontal-outline" class="dropdown-toggle" data-toggle="dropdown" style="cursor: pointer" />
            <div class="dropdown-menu">
              <a class="dropdown-item" :href="link.link" :target="link.new_tab === 1 ? '_blank' : '_self'">
                <ion-icon name="browsers-outline" size="small" class="mr-1"></ion-icon>
                Open Link
              </a>
            </div>
          </div>
        </div>
      </div>
      <p class="mb-1">{{ link.link }}</p>
      <div v-if="link.new_tab === 1" class="badge badge-primary">
        Link opens in a new tab
      </div>
      <div v-else class="badge badge-success">
        Link opens in this tab
      </div>
      <br>
      <small>{{ new Date(link.created_at).toUTCString() }}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true
    },
  },
}
</script>