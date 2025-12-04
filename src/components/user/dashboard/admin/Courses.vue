<template>
        <div v-if="loading" class="text-center m-3">
            <v-progress-circular indeterminate color="primary" />
        </div>
    <div  v-else>
        <v-table class="bg-light bg-gradient rounded">
            <thead>
            <tr>
                <th class="text-left">Resim</th>
                <th class="text-left">Kategori</th>
                <th class="text-left">Eğitmen</th>
                <th class="text-left">Kurs Adı</th>
                <th class="text-left">Kurs Puanı</th>
                <th class="text-left">Sil</th>
                <th class="text-left">Güncelle</th>
            </tr>
            </thead>
            <tbody>
                <tr
                    v-for="course in courseStore.adminCourses"
                    :key="course.id"
                >
                    <td><img :src="course.img" style="width:120px"></td>
                    <td>{{ course.category }}</td>
                    <td>{{ course.owner.firstname }} {{ course.owner.lastname }}</td>
                    <td>{{ course.title }}</td>
                    <td>{{ course.rating }}</td>
                    <td><v-btn variant="outlined" color="red" size="small" @click="removeCourse(course.id)">Sil</v-btn></td>
                    <td><v-btn variant="outlined" color="blue" size="small" @click="router.push({name:'courses_edit',params:{id:course.id}})">Güncelle</v-btn></td>
                    
                    
                </tr>
            </tbody>
        </v-table>
        <div v-if="btnLoad" class="text-center m-3">
            <v-progress-circular indeterminate color="primary" />
        </div>
    <div v-if="!btnLoad">
        <v-btn variant="outlined" class="mt-5" @click="loadMore()">Daha Fazla Kurs Yükle</v-btn>
    </div>
  </div>
</template>

<script setup>
import {useCourseStore} from '@/stores/courses'
import {ref} from 'vue'
import {useRoute,useRouter} from 'vue-router'
import {useToast} from 'vue-toast-notification'
const $toast=useToast();

const route = useRoute();
const router = useRouter();
const btnLoad = ref(false);
const loading = ref(false);
const courseStore = useCourseStore();


if(!courseStore.adminCourses || route.query.reload){
    loading.value=true;
    courseStore.adminGetCourses(3).finally(()=>{
         loading.value=false;
    });
}



const loadMore = () =>{
    btnLoad.value=true;
    courseStore.adminGetMoreCourses(3).then(()=>{
        $toast.success('Silme İşlemi Gerçekleşti');
    }).catch(()=>{  
        $toast.error('Silme işlemi başarısız');
    }).finally(()=>{
        btnLoad.value=false;
    });
}

const removeCourse = (courseID)=>{
    courseStore.removeById(courseID);
}


</script>

<style>

</style>