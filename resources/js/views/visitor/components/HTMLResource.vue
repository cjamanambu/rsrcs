<template>
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
      <pre v-if="isFull" class="language-html mb-1">
        <code>
          {{ html.snippet }}
        </code>
      </pre>
      <small>{{ new Date(html.created_at).toUTCString() }}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    html: {
      type: Object,
      required: true
    },
    isFull: {
      type: Boolean,
      required: true
    }
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