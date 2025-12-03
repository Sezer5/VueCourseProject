<template>
    <div>
        <h1>Kurs Ekle</h1>
        <hr>
        <Form :validation-schema="formSchema" @submit="onSubmit">
            <div class="mb-4">
                <Field name="category" v-slot="{field,errors,errorMessage}">
                    <input type="text" class="form-control" placeholder="Lütfen Kategori Giriniz." v-bind="field" :class="{'is-invalid':errors.length!==0}"/>
                    <div class="input-alert" v-if="errors.length!==0">
                        {{ errorMessage }}
                    </div>
                </Field>
            </div>
            <div class="mb-4">
                <Field name="title" v-slot="{field,errors,errorMessage}">
                    <input type="text" class="form-control" placeholder="Lütfen Kursa Adı Giriniz." v-bind="field" :class="{'is-invalid':errors.length!==0}"/>
                    <div class="input-alert" v-if="errors.length!==0">
                        {{ errorMessage }}
                    </div>
                </Field>
            </div>
            <div class="mb-4">
                <Field name="summary" v-slot="{field,errors,errorMessage}">
                    <textarea type="text" class="form-control" placeholder="Lütfen Kurs Özeti Giriniz." v-bind="field" :class="{'is-invalid':errors.length!==0}">
                    </textarea>
                    <div class="input-alert" v-if="errors.length!==0">
                        {{ errorMessage }}
                    </div>
                </Field>
            </div>
            <div class="mb-4">
                <Field name="rating" v-slot="{field,errors,errorMessage}">
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
                <Field name="img" v-slot="{field,errors,errorMessage}">
                    <input type="text" class="form-control" placeholder="Lütfen Kurs Resmi Giriniz." v-bind="field" :class="{'is-invalid':errors.length!==0}"/>
                    <div class="input-alert" v-if="errors.length!==0">
                        {{ errorMessage }}
                    </div>
                </Field>
            </div>
            <v-btn type="submit" variant="outlined">Kurs Ekle</v-btn>
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
const ratingArray = [0,1,2,3,4,5];

function onSubmit(values,{resetForm}){
    console.log(values);
}
</script>

<style>

</style>