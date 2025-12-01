<template>
    <div class="signinContainer">
        <Form>
            <h1>Eğitmen Girişi</h1>
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
            <button class="btn btn-success btn-block">Giriş Yap</button>
        </Form>
    </div>
</template>

<script setup>
import {Field,Form} from 'vee-validate';
import * as yup from 'yup';
</script>

<style scoped>
    

</style>