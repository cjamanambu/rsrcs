<template>
  <div class="card bg-light">
    <ul class="nav flex-column p-3">
      <li class="nav-item">
        <router-link class="nav-link" to="/admin" :class="{'text-dark': $route.name === 'admin'}">
          <ion-icon name="home-outline" size="small" class="mr-1"></ion-icon>
          Dashboard
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
            class="nav-link"
            to="/admin/pdf"
            :class="{'text-dark': $route.name === 'admin-pdf' || $route.name === 'add-pdf' || $route.name === 'edit-pdf' }"
        >
          <ion-icon name="document-outline" size="small" class="mr-1"></ion-icon>
          PDF Resource
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
            class="nav-link"
            to="/admin/html"
            :class="{'text-dark': $route.name === 'admin-html' || $route.name === 'add-html' || $route.name === 'edit-html' }"
        >
          <ion-icon name="code-slash-outline" size="small" class="mr-1"></ion-icon>
          HTML Resource
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
            class="nav-link"
            to="/admin/link"
            :class="{'text-dark': $route.name === 'admin-link' || $route.name === 'add-link' || $route.name === 'edit-link' }">
          <ion-icon name="link-outline" size="small" class="mr-1"></ion-icon>
          Link Resource
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>