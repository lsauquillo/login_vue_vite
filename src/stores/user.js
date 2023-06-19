import { defineStore} from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut }from 'firebase/auth';
import { auth } from '../firebaseConfig.js';
import  router  from '../router/index.js'

export const useUserStore = defineStore('user', 
 {
  state: ()=>({
    userData: null,
    loadingUser: false
  }),
  actions: {
    async registerUser(email, password){
      this.loadingUser = true
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
      finally{
        this.loadingUser = false
      }    
    },
    async loginUser(email, password){
      this.loadingUser = true
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
      finally{
        this.loadingUser = false
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