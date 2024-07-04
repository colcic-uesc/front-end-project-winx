<script setup>
    import VacancyComponent from '../components/VacancyFormComponent.vue';
    import { useRouter, useRoute } from 'vue-router';
    import { ref, onMounted } from 'vue';
    import { getVacancy } from '../services/vacancies';
    import { getRoleFromToken, getExpirationDateFromToken, getIdFromToken } from '../utils/jwtDecoder'

    const router = useRouter();
    const route = useRoute();

    const professorID = ref(null);

    const props = defineProps({
        editMode: {
            type: Boolean,
            default: false
        },
    });

    const vacancy = ref(null);
    const loading = ref(true);

    const formatDateForInput = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };  

    const checkAuthorized = () => {
        const token = localStorage.getItem('token');
        if (token) {
          const role = getRoleFromToken(token);
          const expirationDate = getExpirationDateFromToken(token);
          professorID.value = getIdFromToken(token);
          console.log(role,expirationDate,professorID.value,getIdFromToken(token))

          if (expirationDate < new Date()) {
            localStorage.removeItem('token');
            router.push('/login');
          }else if (role !== 'Professor') {
                router.push('/login');
          } 
        } else {
          router.push('/login');
        }
    }

    onMounted(async () => {
        console.log(props.editMode)
        checkAuthorized();
        if (props.editMode) {
            vacancy.value = await getVacancy(route.params.id);
            vacancy.value.startDate = formatDateForInput(vacancy.value.startDate);
            vacancy.value.endDate = formatDateForInput(vacancy.value.endDate);
        }
        loading.value = false;
    });
</script>

<template>
    <template v-if="editMode && !loading">
        <VacancyComponent  :vacancy="vacancy" :professorID="professorID"/>
    </template>
    <template v-else-if="!loading">
         <VacancyComponent :professorID="professorID"/>
    </template>
</template>

<style scoped>
</style>