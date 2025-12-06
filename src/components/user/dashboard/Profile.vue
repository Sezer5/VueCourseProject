<template>
    <div class="col-lg-4">
        <Form :validation-schema="formSchema" @submit="onSubmit">
            <h1 class="text-center">Eğitmen Bilgileri</h1>
            <div class="mb-4">
                <Field name="firstname" v-slot="{field,errors,errorMessage}">
                    <input type="text" class="form-control" placeholder="Lütfen Adınızı Giriniz." v-bind="field" :class="{'is-invalid':errors.length!==0}"/>
                    <div class="input-alert" v-if="errors.length!==0">
                        {{ errorMessage }}
                    </div>
                </Field>
            </div>
            <div class="mb-4">
                <Field name="lastname" v-slot="{field,errors,errorMessage}">
                    <input type="text" class="form-control" placeholder="Lütfen Soyadınızı Giriniz." v-bind="field" :class="{'is-invalid':errors.length!==0}"/>
                    <div class="input-alert" v-if="errors.length!==0">
                        {{ errorMessage }}
                    </div>
                </Field>
            </div>
            <div class="mb-4 text-end">
                <v-btn type="submit" variant="outlined">Güncelle</v-btn>
            </div>
            
        </Form>
    </div>
</template>

<script setup>
import {Field,Form} from 'vee-validate';

</script>

<style>

</style>