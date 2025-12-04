<template>
    <div>
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
                    <td><v-btn variant="outlined" color="red" size="small">Sil</v-btn></td>
                    <td><v-btn variant="outlined" color="blue" size="small">Güncelle</v-btn></td>
                    
                    
                </tr>
            </tbody>
        </v-table>
        <v-btn variant="outlined" class="mt-5" @click="loadMore()">Daha Fazla Kurs Yükle</v-btn>
  </div>
</template>

<script setup>
import {useCourseStore} from '@/stores/courses'
const courseStore = useCourseStore();
courseStore.adminGetCourses(3);

const loadMore = () =>{
    courseStore.adminGetMoreCourses(3);
}

</script>

<style>

</style>