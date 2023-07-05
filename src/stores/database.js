import { defineStore } from 'pinia'
import { query, 
        collection, 
        getDocs,
        doc,
        addDoc, 
        where} from 'firebase/firestore/lite'
import {db, auth} from '../firebaseConfig'
import { nanoid } from 'nanoid'

export const useDatabaseStore = defineStore( 'urls', {
  state: ()=>({
    documents: [], //un array de objetos de momento vacio
    loadingDocs:  false
  }),
  actions: {
    async getUrls(){
      try{

        if(this.documents.length != 0){
          return
        }
        this.loadingDocs = true
        // filtramos los docs de un usuario con where
        const q = query(collection(db, 'urls'), 
          where( "user", "==", auth.currentUser.uid))
        const querySnapShot = await getDocs(q)        
        querySnapShot.forEach(doc => this.documents.push(
          // llenamos documents con este objeto
          { id: doc.id,
            ...doc.data() 
          }))        
      // console.log(this.documents)
      // console.log(auth.currentUser.uid)        
      }
      catch(err){
        console.log(err)      
      }
      finally{
        this.loadingDocs = false
      }
    },

    async addUrl(name){
      try{

        const newDoc = {
          name: name,
          short: nanoid(6),
          user: auth.currentUser.uid
        }

        const docRef = await addDoc(collection(db, "urls"), newDoc);
        console.log("Document written with ID: ", docRef.id); 
         // añadimos a documents este objeto
         this.documents.push({          
          ...newDoc,
          id: docRef.id
         })   
      }
      catch(err){
        console.log(err)
      }
      finally{

      }
    }
    
  }
})