<template>
    <div class="container">
        <HomeCarousel />
        <HomeCourses />
    </div>
</template>

<script setup>
import HomeCarousel from './HomeCarousel.vue'
import HomeCourses from './HomeCourses.vue'
import {useCourseStore} from '@/stores/courses'
const courseStore = useCourseStore();
if(!courseStore.HomeCourses){
    courseStore.getCourses()
}
</script>

<style>

</style>