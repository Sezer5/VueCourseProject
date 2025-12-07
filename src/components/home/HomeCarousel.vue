<template>
<div v-if="courseStore.getHomeSlides">
    <Carousel v-bind="carouselConfig" :wrap-around="true" class="carouselTop">
        <Slide v-for="course in courseStore.getHomeSlides" :key="course.id">
            <div class="sliderMessage" :style="{background:`url(${course.img})`}">
                <div class="slideContent">
                    {{course.title}}
                </div>
            </div>
        <div class="carousel__item">{{ slide }}</div>
        </Slide>

        <template #addons>
        <Navigation />
        <Pagination />
        </template>
  </Carousel>
</div>
  
</template>

<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import {useCourseStore} from '@/stores/courses'
const courseStore = useCourseStore();
</script>

<style>

</style>