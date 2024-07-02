<script setup>
    import VacancyFilter from '@/components/VacancyFilterComponent.vue';
    import VacancyItem from '@/components/VacancyItemComponent.vue';
    import VacancyCategory from '../components/VancancyCategoriesComponent.vue';
    import { getVacancies } from '@/services/vacancies';
    import { getIdFromToken, getRoleFromToken, getExpirationDateFromToken } from '@/utils/jwtDecoder';
    import { getStudentVacancies } from '@/services/students';
    import { onMounted, ref } from 'vue';

    const vacancies = ref([]);
    const vacanciesOwned = ref([]);
    const mode = ref('viewMode');

    const ownedVacancy = (vacancy) => {
        return vacanciesOwned.value.some(v => v.vacancyID === vacancy.vacancyID);
    };

    function onFilterChanged(filters) {
        console.log(filters);
    }

    function onCategoriesChanged(categories) {
        console.log(categories);
    }

    onMounted(async () => {
        try {
            const response = await getVacancies();
            vacancies.value = response;
        } catch (error) {
            console.error(error);
        }

        const token = localStorage.getItem('token');

        if (token) {
          const expirationDate = getExpirationDateFromToken(token);
          if (expirationDate > new Date()) {
            const role = getRoleFromToken(token);
            const tokenId = getIdFromToken(token);

            if (role === 'Student') {
              mode.value = 'studentMode';
              try {
                const response = await getStudentVacancies(tokenId, token);
                vacanciesOwned.value = response;
              } catch (error) {
                console.error(error);
              }
            } else if (role === 'Professor') {
              mode.value = 'professorMode';
              vacanciesOwned.value = vacancies.value.filter(vacancy => vacancy.professorID === tokenId);
            } else {
              console.error('Invalid role');
            }

          }else{
            localStorage.removeItem('token');
          }
        }
    }); 


</script>

<template>
    <div class="content-wrapper">
        <h2>Vagas Disponíveis</h2>
        <div class="vacancies">
          <div class="vacancy-filter-container">
            <VacancyFilter @filter-changed="onFilterChanged" />
            <VacancyCategory @categories-changed="onCategoriesChanged" />
          </div>
          <div class="vacancy-list-container">
            <div class="vacancy-list">
              <VacancyItem v-for="vacancy in vacancies" 
                :key="vacancy.vacancyID" 
                :vacancy="vacancy" 
                :template-mode="mode"
                :owned-vacancy="ownedVacancy(vacancy)"
              />
            </div>
          </div>
        </div>
    </div>
  </template>

 <style scoped>
.content-wrapper {
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 80px;
  justify-content: center;
}

.content-wrapper h2 {
  margin-left: 330px;
  color: var(--color-variant-background);
  font-weight: 300px; 
}

.vacancy-list-container{
  width: 100%;
}

.vacancies {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px 0;
  
}

.vacancy-filter-container {
  background-color: white;
  width: 300px;
  margin-right: 30px;
  border-radius: 0px 30px 30px 0px;
  border-color: var(--color-primary-hover);
  border-right: 3px solid var(--color-secondary-hover);
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.vacancy-list {
  max-height: 400px; /* Defina a altura máxima para a lista de vagas */
  overflow-y: auto; /* Permite scroll vertical se o conteúdo exceder a altura máxima */
  border-radius: 5px; /* Adiciona arredondamento nos cantos */
}
</style>
