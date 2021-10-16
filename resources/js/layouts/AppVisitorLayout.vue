<template>
  <div>
    <Header title="RSCRS - Visitor"/>
    <div class="container" style="margin-top: 15vh;">
      <PageHeader :page-title="$route.meta.pageTitle" :crumbs="$route.meta.crumbs" />
      <slot />
      <Footer style="margin-top: 30vh"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppVisitorLayout'
}
</script>