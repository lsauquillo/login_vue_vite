<template>
   <h1>Register</h1>
   <form @submit.prevent="handleSubmit">
      <input type="email" placeholder="Intro email" v-model.trim="email">
      <input type="password" placeholder="contraseña" v-model.trim="password">
      <button type="submit" :disabled="userStore.loadingUser">Crear Usuario</button>
   </form>   
</template>

<script setup>

import { useUserStore } from '../stores/user.js';
//import { useRouter } from 'vue-router'
import { ref } from "vue";

const userStore = useUserStore();
//const router = useRouter();

   const email = ref('')
   const password = ref('')
   
   const handleSubmit = ()=>{
      if( !email.value || password.value.length < 6 ){         
         return alert('Debe rellenar los campos!')    
      }
      userStore.registerUser(email.value, password.value)
      console.log('Procesando formulario...')       
      //router.push('/') 
   }                            
</script>


<style scoped>
  
</style>