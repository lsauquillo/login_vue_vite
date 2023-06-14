import { defineStore} from 'pinia'

export const useUserStore = defineStore('useStore', 
 {
  state: ()=>({
    userData: null
  }),
  actions: {}
 }
)