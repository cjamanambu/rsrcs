<template>
  <div>
    <Header title="RSRCS" />
    <slot />
    <Footer style="margin-top: 30vh"/>
  </div>
</template>

<script>
export default {
  name: 'AppDefaultLayout'
}
</script>