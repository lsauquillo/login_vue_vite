<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useUserStore} from './stores/user'

const userStore = useUserStore();
</script>

<template>
  <nav>
          <router-link  to="/">Home</router-link> |
          <router-link  to="/register">Register</router-link> |
          <router-link  to="/login" >Login</router-link> |
          <button @click="userStore.logoutUser">Logout</button>
  </nav>
  <router-view />
 
</template>

<style scoped>

</style>
