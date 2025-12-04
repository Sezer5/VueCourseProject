import { defineStore } from 'pinia'
import router from '@/router'
import {DB} from '@/utils/firebase'
import {collection,getDoc,doc,setDoc,updateDoc,serverTimestamp,query,orderBy,getDocs,limit,startAfter} from 'firebase/firestore'
import {useUserStore} from '@/stores/user'
import AddCourse from '@/components/user/dashboard/admin/AddCourse.vue'

let coursesCol = collection(DB,'courses')

export const useCourseStore = defineStore('course',{
    state:()=>({
        homeCourses:'',
        adminCourses:'',
        adminLastVisible:''
    }),
    getters:{

    },
    actions:{
        async addCourse(formData){
            const userStore = useUserStore();
            const user = userStore.getUserData;
            const newCourse = doc(coursesCol);
            await setDoc(newCourse,{
                timestap:serverTimestamp(),
                owner:{
                    uid:user.uid,
                    firstname:user.firstname,
                    lastname:user.lastname
                },
                ...formData
            })
            router.push({name:'courses'})
        }
    }
})
