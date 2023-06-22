<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useUserStore} from './stores/user'

const userStore = useUserStore();
</script>

<template>
  <nav v-if="!userStore.loadingSesion">
          <router-link  to="/" v-if="userStore.userData" >Home</router-link> |
          <router-link  to="/register" v-if="!userStore.userData">Register</router-link> |
          <router-link  to="/login" v-if="!userStore.userData">Login</router-link> |
          <button @click="userStore.logoutUser" v-if="userStore.userData">Logout</button>
  </nav>
  <div v-else>
    <p>Cargando...</p>
  </div>
  <router-view />
 
</template>

<style scoped>

</style>
