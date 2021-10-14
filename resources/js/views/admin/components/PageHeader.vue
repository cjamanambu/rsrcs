<template>
  <div class="d-flex justify-content-between flex-wrap align-items-center pt-3 pb-1 border-bottom">
    <h1 class="h3">{{ pageTitle }}</h1>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li
          v-for="crumb in crumbs"
          :key="crumb.id"
          class="breadcrumb-item"
          :class="{ 'active': crumb.active }"
        >
          <router-link v-if="!crumb.active" :to="crumb.path">{{ crumb.name }}</router-link>
          <span v-else>{{ crumb.name }}</span>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      required: true
    },
    crumbs: {
      type: Array,
      required: true
    }
  }
}
</script>