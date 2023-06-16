import { defineStore} from 'pinia'
import { createUserWithEmailAndPassword }from 'firebase/auth';
import { auth } from '../firebaseConfig.js';

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
        console.log(this.userData.email)       
      }
      catch(err){
        console.log(err)
      }

     
    }
  }
 }
)