<template>
    <div>
        Courses
    </div>
</template>

<script setup>
import {useCourseStore} from '@/stores/courses'
const courseStore = useCourseStore();
courseStore.adminGetCourses(3);


</script>

<style>

</style>