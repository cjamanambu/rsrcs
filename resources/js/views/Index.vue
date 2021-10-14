<template>
  <main role="main" class="container" style="margin-top: 15vh;">
    <div class="jumbotron">
      <h1 class="display-4">Hello, welcome to RSCRS!</h1>
      <p class="lead">This is a simple resources management application built with Laravel 8 and VueJS 2.</p>
      <hr class="my-4">
      <p>There is currently no authentication included in this project so feel free to access whichever end of the app you like.</p>
      <button class="btn btn-outline-primary mr-2" @click="$router.push('/admin')">Admin End</button>
      <button class="btn btn-outline-success" @click="$router.push('/visitor')">Visitor End</button>
    </div>
  </main>
</template>

<script>
export default {}
</script>