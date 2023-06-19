<template>
   <h1>Home Page</h1>
   <p v-if="userStore.userData">Usuario:{{ userStore.userData}}</p>
</template>

<script setup>
  import { useUserStore } from '../stores/user.js';
  const userStore = useUserStore();
</script>

<style scoped>
  
</style>