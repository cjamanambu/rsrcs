<template>
  <component :is="layout" class="mb-5">
    <slot />
  </component>
</template>

<script>
  const defaultLayout = 'AppDefaultLayout'
  export default {
    computed: {
      layout() {
        const layout = this.$route.meta.layout || defaultLayout
        return () => import(`../layouts/${layout}.vue`)
      }
    }
  }
</script>