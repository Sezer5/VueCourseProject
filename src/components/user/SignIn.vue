<template>
    <div class="signinContainer">
        <Form>
            <h1 class="text-center">{{isLoggedScreen ? 'Eğitmen Girişi' : 'Kayıt Ol!'}}</h1>
            <div class="form-group">
                <Field name="email" v-slot="{field,errors,errorMessage}">
                    <input type="email" class="form-control" placeholder="Lütfen Mailinizi Giriniz." v-bind="field" />
                    <div class="input-alert" v-if="errors.length!==0">
                        {{ errorMessage }}
                    </div>
                </Field>
            </div>
            <div class="form-group">
                <Field name="password" v-slot="{field,errors,errorMessage}">
                    <input type="password" class="form-control" placeholder="Lütfen Şifrenizi Giriniz." v-bind="field" />
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

const isLoggedScreen=ref(true);
</script>

<style scoped>
    

</style>