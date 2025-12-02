<template>
    <div class="signinContainer">
        <Form :validation-schema="formSchema" @submit="onSubmit">
            <h1 class="text-center">{{isLoggedScreen ? 'Eğitmen Girişi' : 'Kayıt Ol!'}}</h1>
            <div class="form-group">
                <Field name="email" v-slot="{field,errors,errorMessage}">
                    <input type="email" class="form-control" placeholder="Lütfen Mailinizi Giriniz." v-bind="field" :class="{'is-invalid':errors.length!==0}"/>
                    <div class="input-alert" v-if="errors.length!==0">
                        {{ errorMessage }}
                    </div>
                </Field>
            </div>
            <div class="form-group">
                <Field name="password" v-slot="{field,errors,errorMessage}">
                    <input type="password" class="form-control" placeholder="Lütfen Şifrenizi Giriniz." v-bind="field" :class="{'is-invalid':errors.length!==0}"/>
                    <div class="input-alert" v-if="errors.length!==0">
                        {{ errorMessage }}
                    </div>
                </Field>
            </div>
            <button class="btn color-vue btn-block">{{isLoggedScreen ? 'Giriş Yap' : 'Kayıt Ol!'}}</button>
            <div class="formChange" @click="isLoggedScreen = !isLoggedScreen">
                <span v-if="isLoggedScreen">Kayıt Ol!</span>
                <span v-else>Giriş Yap</span>
            </div>
        </Form>
    </div>
</template>

<script setup>
import {Field,Form} from 'vee-validate';
import * as yup from 'yup';
import {ref} from 'vue';
import {useUserStore} from '@/stores/user.js';

const userStore = useUserStore();



const formSchema = yup.object({
    email:yup.string().required('Email girmek zorunludur').email('Lütfen doğru formatta email giriniz!'),
    password:yup.string().required('Şifre girmek zorunludur')
});



const isLoggedScreen=ref(true);







function onSubmit(values,{resetForm}){
    userStore.register(values);
}
</script>

<style scoped>
    

</style>