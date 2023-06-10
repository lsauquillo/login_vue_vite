<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
          <RouterLink  to="/">Home</RouterLink> |
          <RouterLink  to="/login" >Login</RouterLink> |
          <RouterLink  to="/register">Register</RouterLink> |
          <button>Logout</button>
  </nav>
  <RouterView />
 
</template>

<style scoped>

</style>
