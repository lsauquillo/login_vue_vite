import { defineStore } from 'pinia'
import { query, 
        collection, 
        getDocs,
        doc,
        addDoc,
        deleteDoc,
        getDoc,
        where,
        updateDoc} from 'firebase/firestore/lite'
import {db, auth} from '../firebaseConfig'
import { nanoid } from 'nanoid'
import router from '../router'



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
    },

    async leerUrl(id){
      try{
        const docRef = doc( db, 'urls', id)       
        const docSnap = await getDoc( docRef)  
        // console.log( docSnap.data().name)
        return docSnap.data().name
      }
      catch(err){
        console.log(err)
      }

    },

    async deleteUrl(id){
      try{
        const docRef = doc( db, 'urls', id)
        await deleteDoc(docRef);
        console.log('Eliminado de la db') 
        // lo eliminamos del store
        this.documents = this.documents.filter( item => item.id != id)         
      }
      catch(err){
        console.log(err)
      }
      finally{
      }
    },
    async updateUrl(id, name){
      try{
        const docRef = doc( db, 'urls', id)
        await updateDoc( docRef, {name: name}) 
        console.log('Actualizado en la db') 
        // actualizamos tambien el store
        this.documents = this.documents.map( item => item.id == id ? ({...item, name: name}) : item) 
        router.push('/')
        // router.push('/')
      }
      catch(err){
        console.log(err)
      }
      finally{        
      }
    }
    
  }
})