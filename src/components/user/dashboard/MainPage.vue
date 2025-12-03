<template>
    <div class="container-fluid">
        <div class="row">
            <nav class="col-md-2 bg-light d-block collapse sidebar">
                <div>
                    <ul class="nav">
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name:'dashboard'}">
                                <v-icon icon="mdi-view-dashboard"/>
                                <span>Kullanıcı Sayfası</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name:'profile'}">
                                <v-icon icon="mdi-account"/>
                                <span>Eğitmen</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name:'courses'}" v-if="userStore.user.isAdmin">
                                <v-icon icon="mdi-note-outline"/>
                                <span>Kurslarım</span>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name:'courses_add'}" v-if="userStore.user.isAdmin">
                                <v-icon icon="mdi-note-edit-outline"/>
                                <span>Kurs Ekle</span>
                            </router-link>
                        </li>
                    </ul>
                </div>

            </nav>
            <div class="col-md-10">
                <router-view></router-view>
            </div>


        </div>
        
    </div>
</template>

<script setup>
import {useUserStore} from '@/stores/user';

const userStore = useUserStore()

</script>