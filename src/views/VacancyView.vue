<script setup>
    import VacancyComponent from '../components/VacancyFormComponent.vue';
    import { useRouter, useRoute } from 'vue-router';
    import { ref, onMounted } from 'vue';
    import { getVacancy } from '../api/endpoints';

    const router = useRouter();
    const route = useRoute();

    const props = defineProps({
        editMode: {
            type: Boolean,
            default: true
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

    onMounted(async () => {
        console.log(props.editMode)
        if (props.editMode) {
            vacancy.value = await getVacancy(route.params.id);
            vacancy.value.startDate = formatDateForInput(vacancy.value.startDate);
            vacancy.value.endDate = formatDateForInput(vacancy.value.endDate);
            loading.value = false;
        }
    });
</script>

<template>
    <template v-if="editMode && !loading">
        <VacancyComponent  :vacancy="vacancy"/>
    </template>
    <template v-else>
         <VacancyComponent />
    </template>
</template>

<style scoped>
</style>