<template>
  <h1>Home Page</h1>

  <p v-if="userStore.userData">
    Usuario activo:{{ userStore.userData.email }}<br />{{
      userStore.userData.uid
    }}
  </p>

  <form @submit.prevent="handleSubmit">
    <label for="">Para añadir un documento:</label>
    <input type="text" placeholder="Intro una URL" v-model="url" />
    <button type="submit">Guardar</button>    
  </form>

  <ul>
    <li v-for="(item, index) in databaseStore.documents" :key="index">
      {{ item.name }}
      <br>
      {{ item.short }}
      <br>
      {{ item.user }}
      <br>
      {{ item.id}}
      <br>
      <button @click="databaseStore.deleteUrl(item.id)">Eliminar</button>
      <button @click="router.push(`/editar/${item.id}`)">Editar</button>
      <hr>
    </li>
  </ul>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from "../stores/user.js";
import { useDatabaseStore } from "../stores/database.js";
import { ref } from "vue";

const router = useRouter();
const userStore = useUserStore();
const databaseStore = useDatabaseStore();

databaseStore.getUrls();

const url = ref("");

const handleSubmit = () => {
  databaseStore.addUrl(url.value);
  // console.log("Enviando documento...");
};

// const handleClick = ( )=> {
// console.log( 'Me lleva a la pág de EditarVue')
// router.push('/editar')
// }
</script>

<style scoped>
</style>