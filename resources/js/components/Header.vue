<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top mb-5">
    <div class="container">
      <router-link to="/" class="navbar-brand">{{ title }}</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="menu">
        <ul class="navbar-nav ml-auto">
          <router-link class="nav-item nav-link" to="/">Home</router-link>
          <router-link to="/admin" class="nav-item nav-link">Admin</router-link>
          <router-link to="/visitor" class="nav-item nav-link">Visitor</router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>