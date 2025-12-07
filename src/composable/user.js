import {useUserStore} from '@/stores/user'
import {ref} from 'vue'
export const updateProfile = () =>{
    const userStore = useUserStore();
    const loading = ref(false);
    const firstname = ref(userStore.user.firstname)
    const lastname = ref(userStore.user.lastname)
    function onSubmit(values,{resetForm}){
        loading.value = true;
        userStore.updateProfile(values).finally(()=>{
            loading.value = false;
        });
    }
    return {onSubmit,loading,firstname,lastname}
}