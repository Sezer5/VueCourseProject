<template>
    <div class="row">
        <div class="col-md-4 mb-5" v-for="course in courseStore.getHomeCourses" :key="course.id">
            <div class="card">
                <img class="card-img-top" :src="course.img">
                <div class="card-body">
                    <h5 class="card-title">{{course.title}}</h5>
                    <p class="card-text">{{course.summary}}</p>
                    <a href="#" class="btn btn-primary">Kursu İncele</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useCourseStore} from '@/stores/courses'
const courseStore = useCourseStore();
courseStore.getCourses();
</script>

<style>

</style>