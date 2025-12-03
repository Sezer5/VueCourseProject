<template>
  <div class="text-center m-5" v-if="loading">
    <v-progress-circular indeterminate color="success"/>    
  </div>
  <div v-if="!loading">
    <Header />
    <router-view></router-view>
  </div>

</template>
<script setup>
import Header from '@/components/Navigation/Header.vue'
import {firstLoad} from '@/composable/auth'

const {loading} =firstLoad();
</script>
<style scoped>

</style>
