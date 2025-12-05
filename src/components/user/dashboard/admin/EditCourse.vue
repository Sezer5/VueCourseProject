<template>
    <div v-if="loading" class="text-center m-3">
        <v-progress-circular indeterminate color="primary" />
    </div>
    <div v-if="!loading">
        <h1>Kurs Ekle</h1>
        <hr>
        <Form :validation-schema="CourseSchema" @submit="onSubmit" class="mb-4">
            <div class="mb-4">
                <Field name="category" v-slot="{field,errors,errorMessage}" v-model="course.category">
                    <input type="text" class="form-control" placeholder="Lütfen Kategori Giriniz." v-bind="field" :class="{'is-invalid':errors.length!==0}"/>
                    <div class="input-alert" v-if="errors.length!==0">
                        {{ errorMessage }}
                    </div>
                </Field>
            </div>
            <div class="mb-4">
                <Field name="title" v-slot="{field,errors,errorMessage}" v-model="course.title">
                    <input type="text" class="form-control" placeholder="Lütfen Kursa Adı Giriniz." v-bind="field" :class="{'is-invalid':errors.length!==0}"/>
                    <div class="input-alert" v-if="errors.length!==0">
                        {{ errorMessage }}
                    </div>
                </Field>
            </div>
            <div class="mb-4">
                <Field name="summary" v-slot="{field,errors,errorMessage}" v-model="course.summary">
                    <textarea type="text" class="form-control" placeholder="Lütfen Kurs Özeti Giriniz." v-bind="field" :class="{'is-invalid':errors.length!==0}">
                    </textarea>
                    <div class="input-alert" v-if="errors.length!==0">
                        {{ errorMessage }}
                    </div>
                </Field>
            </div>
            <div class="mb-4">
                <Field name="rating" v-slot="{field,errors,errorMessage}" v-model="course.rating">
                    <select v-bind="field" class="form-select" :class="{'is-invalid':errors.length!==0}">
                        <option value="Kurs Puanı Seçiniz">Kurs Puanı Seçiniz</option>
                        <option v-for="rating in ratingArray" :key="rating" :value="rating">{{rating}}</option>
                    </select>
                    <div class="input-alert" v-if="errors.length!==0">
                        {{ errorMessage }}
                    </div>
                </Field>
            </div>
            <div class="mb-4">
                <Field name="img" v-slot="{field,errors,errorMessage}" v-model="course.img">
                    <input type="text" class="form-control" placeholder="Lütfen Kurs Resmi Giriniz." v-bind="field" :class="{'is-invalid':errors.length!==0}"/>
                    <div class="input-alert" v-if="errors.length!==0">
                        {{ errorMessage }}
                    </div>
                </Field>
            </div>
            
            <v-btn type="submit" variant="outlined">Güncelle</v-btn>
            <!-- <div class="formChange" @click="isLoggedScreen = !isLoggedScreen">
                <span v-if="isLoggedScreen">Kayıt Ol!</span>
                <span v-else>Giriş Yap</span>
            </div> -->
        </Form>
    </div>
</template>

<script setup>
import {Field,Form} from 'vee-validate';
import * as yup from 'yup';
import CourseSchema from './schema.js'
import {useCourseStore} from '@/stores/courses'
import {ref} from 'vue'
import {useToast} from 'vue-toast-notification'
import {useRoute} from 'vue-router' 
const course=ref({});
const route = useRoute();
const $toast=useToast();
const ratingArray = [0,1,2,3,4,5];
const courseStore = useCourseStore();
courseStore.getCourseById(route.params.id).then((response)=>{
    course.value={...response};
});
const loading = ref(false);

function onSubmit(values,{resetForm}){
    courseStore.updateCourse(route.params.id,values);
}
</script>

<style>

</style>