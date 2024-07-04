<script setup>
    import { onMounted, ref } from 'vue';
    import { getIdFromToken, getRoleFromToken, getExpirationDateFromToken } from '@/utils/jwtDecoder';
    import { useRouter, useRoute } from 'vue-router';
    import { getSubscribedStudents } from '../services/vacancies';
    import { getProfessorVacancies } from '../services/professors';
    import StudentCard from '../components/StudentCardComponent.vue';


    const token = ref(localStorage.getItem('token'));
    const tokenId = ref(getIdFromToken(token.value));
    const role = ref(getRoleFromToken(token.value));
    const expirationDate = ref(getExpirationDateFromToken(token.value));
    const vacancySelected = ref('');
    const warningMessage = ref(null);

    const vacancies = ref([]);
    const students = ref([]);

    const router = useRouter();
    const route = useRoute();

    const checkAutorized = () => {
        if (token.value) {
            if (expirationDate.value > new Date()) {
                if (role.value === 'Professor' && tokenId.value == route.params.id) {
                    return true;
                }else{
                    return false;
                }
            } else {
                localStorage.removeItem('token');
                return false;
            }
        }else{
            return false;
        }
    }

    onMounted(async () => {
        if (checkAutorized()) {
            try {
                const response = await getProfessorVacancies(tokenId.value, token.value);
                vacancies.value = response;
            } catch (error) {
                console.error(error);
                warningMessage.value = 'Erro ao carregar vagas';
            }
        }else{
            router.push('/login');
        }

    });

    const selectVacancy = async () => {
        try {
            students.value = await getSubscribedStudents(vacancySelected.value, token.value);
        } catch (error) {
            console.error(error);
            warningMessage.value = 'Erro ao carregar alunos inscritos';
        }

        if (students.value.length === 0) 
            warningMessage.value = 'Nenhum aluno inscrito';
        else
            warningMessage.value = null;
    }
</script>

<template>
    <div class="content-container">
        <div class="select-vancancy">
            <select @change="selectVacancy" v-model="vacancySelected" class="select-input">
                <option disabled value="">Selecione um tipo de usuário</option>
                <option v-for="vacancy in vacancies" :value="vacancy.vacancyID">
                        {{ vacancy.projectTitle }} - {{ vacancy.description }}
                </option>
            </select>
        </div>
        <div class="students-subscribed" v-if="vacancySelected">
            <template v-if="!warningMessage">
                <div class="student-list">
                    <StudentCard v-for="student in students" :student="student" :key="student.studentID"/>
                </div>
            </template>
            <template v-else>
                <p> {{ warningMessage }}</p>
            </template>
        </div>
    </div>
</template>

<style>
    .content-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70%;
        min-width: 400px;
        margin: 100px auto;
    }

    .select-vancancy {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        width: 100%; 
    }

    .students-subscribed {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .select-input {
        flex-grow: 1;
        padding: 10px 12px; 
        font-size: 16px;
        border: 1px solid #000; 
        border-radius: 8px; 
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        color: var(--color-text);
        width: 100%;
        box-sizing: border-box; 
    }

    .student-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 20px;
        width: 100%;
    }
</style>