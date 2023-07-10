<template>   
   <h3>Editar el doc con id que viene del router</h3>
    <form @submit.prevent="handleSubmit">
    <label for="">Editar la nueva URL:</label>
    <input type="text" placeholder="Intro una URL" v-model="url"/>
    <button type="submit">Update URL</button>    
  </form>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue';
const route = useRoute()
// console.log(route.params.id)
import { useDatabaseStore} from '../stores/database'
const useDatabase = useDatabaseStore();

const url = ref('')

// Para poder acceder a v-model='url' en el template tenemos que 
// usar el ciclo de vida onMounted
onMounted(async () => {
   url.value = await useDatabase.leerUrl(route.params.id)   
})

const handleSubmit = ()=>{
   useDatabase.updateUrl(route.params.id, url.value)
   // console.log('Se ha cambiando la url del doc...')
}
   
</script>

<style scoped>
  
</style>