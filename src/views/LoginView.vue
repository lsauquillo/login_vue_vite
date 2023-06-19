<template>
   <h1>Login User</h1>
   <form @submit.prevent="handleSubmit">
      <input type="email" placeholder="Intro email" v-model.trim="email">
      <input type="password" placeholder="contraseña" v-model.trim="password">
      <button type="submit">Login </button>
   </form>   
</template>

<script setup>

import { useUserStore } from '../stores/user.js';
//import { useRouter } from 'vue-router'
import { ref } from "vue";

const userStore = useUserStore();
//const router = useRouter();

   const email = ref('sauquillo@gmail.com')
   const password = ref('12345678')
   
   const handleSubmit = ()=>{
      if( !email.value || password.value.length < 6 ){         
         return alert('Debe rellenar los campos!')    
      }
      userStore.loginUser(email.value, password.value)
      //console.log('Procesando formulario...') 
      //console.log('Usuario registrado:', userStore.userData)
      //router.push('/') 
   }                            
</script>


<style scoped>
  
</style>