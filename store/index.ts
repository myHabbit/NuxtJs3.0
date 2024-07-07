import  {defineStore} from 'pinia'

export const useNuxtStore = defineStore('nuxtStore', {
  state(){
    return {
        count:0
    }
  },
  actions:{
    setCount(){
        this.count++
    }
  }
})