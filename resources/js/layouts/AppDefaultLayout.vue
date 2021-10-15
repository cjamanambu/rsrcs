<template>
  <div>
    <Header title="RSCRS" />
    <slot />
    <Footer style="margin-top: 30vh"/>
  </div>
</template>

<script>
export default {
  name: 'AppDefaultLayout'
}
</script>