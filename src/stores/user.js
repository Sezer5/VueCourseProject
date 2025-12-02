import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const DEFAULT_USER={
    uid:null,
    email:null,
    firtsname:null,
    lastname:null,
    isAdmin:null
}

export const useUserStore = defineStore('user',{
    state:()=>({
        loading:false,
        user:DEFAULT_USER,
        auth:false
    }),
    getters:{

    },
    actions:{
        register(){
            
        }
    }

})
