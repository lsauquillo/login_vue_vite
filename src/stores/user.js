import { defineStore} from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut }from 'firebase/auth';
import { auth } from '../firebaseConfig.js';
import  router  from '../router/index.js'

export const useUserStore = defineStore('user', 
 {
  state: ()=>({
    userData: null
  }),
  actions: {
    async registerUser(email, password){
      try{
        const {user} = await createUserWithEmailAndPassword(auth, email, password)
        //console.log(user)
        this.userData = { email: user.email, uid: user.uid} 
        router.push('/')
        console.log('Nuevo usuario registrado!')       
      }
      catch(err){
        console.log(err)
      }     
    },
    async loginUser(email, password){
      try{
        const {user} = await signInWithEmailAndPassword(auth, email, password)
        //console.log(user)
        this.userData = { email: user.email, uid: user.uid}
        router.push('/') 
        console.log('Usuario logeado!')       
      }
      catch(err){
        console.log(err)
      }     
    },
    async logoutUser(){
      try{
          await signOut(auth)
          this.userData = null
          router.push('/login')
          console.log('Usuario Signed out!')
      }
      catch(err){
        console.log(err)
      }
    }
  }
 }
)