import { defineStore } from 'pinia'
import router from '@/router'
import {DB} from '@/utils/firebase'
import {collection,getDoc,doc,setDoc,updateDoc,serverTimestamp,query,orderBy,getDocs,limit,startAfter,deleteDoc} from 'firebase/firestore'
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

        
        async getCourseById(id){
            
            try {
                const docRef = await getDoc(doc(DB,'courses',id));
                // console.log(docRef.data());
                return docRef.data();
            } catch (error) {
                
            }
        },

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
            });
            router.push({name:'courses',query:{reload:true}})
        },

        async adminGetCourses(docLimit){
            const q = query(coursesCol,orderBy('timestap','desc'),limit(docLimit));
            const querySnapshot = await getDocs(q);

            const lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];

            
            const courses = querySnapshot.docs.map(doc=>(
                {
                 id:doc.id,
                 ...doc.data()
                }
            ));
            this.adminCourses=courses;
            this.adminLastVisible=lastVisible;
            console.log(this.adminCourses);
        },

        async adminGetMoreCourses(docLimit){
            let oldCourses = this.adminCourses;
             const q = query(coursesCol,orderBy('timestap','desc'),startAfter(this.adminLastVisible),limit(docLimit));
             const querySnapshot = await getDocs(q);
             const lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
             const newCourses = querySnapshot.docs.map(doc=>(
                {
                 id:doc.id,
                 ...doc.data()
                }
            ));
            this.adminCourses=[
                ...oldCourses,
                ...newCourses
            ]
            this.adminLastVisible=lastVisible;
        },

        async removeById(courseID){
            await deleteDoc(doc(DB,'courses',courseID))
            const newList = this.adminCourses.filter(course=>{
                return course.id != courseID;
            });
            this.adminCourses = newList;
        },

        async updateCourse(id,formData){
            const docRef = doc(DB,'courses',id);
            await updateDoc(docRef,{...formData});
        }
    }
})
