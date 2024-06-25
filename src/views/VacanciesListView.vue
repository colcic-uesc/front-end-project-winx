<script setup>
    import VacancyFilter from '@/components/VacancyFilterComponent.vue';
    import VacancyItem from '@/components/VacancyItemComponent.vue';
    import VacancyCategory from '../components/VancancyCategoriesComponent.vue';
</script>

<template>
    <div class="content-wrapper">
      <main>
        <h2>Vagas Disponíveis</h2>
        <div class="vacancies">
          <div class="vacancy-filter-container">
            <VacancyFilter />
            <VacancyCategory />
          </div>
          <div class="vacancy-list-container">
            <div class="vacancy-list">
              <VacancyItem />
              <VacancyItem />
              <VacancyItem />
              <VacancyItem />
              <VacancyItem />
              <VacancyItem />
              <VacancyItem />
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>

 <style scoped>
.content-wrapper {
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 100px;
  justify-content: center;
}

.content-wrapper h2 {
  margin-left: 330px;
  color: var(--color-variant-background);
  font-weight: 300px; 
}

.vacancies {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
}

.vacancy-filter-container {
  background-color: white;
  width: 300px;
  margin-right: 30px;
  border-radius: 0px 30px 30px 0px;
  border-color: var(--color-primary-hover);
  border-right: 3px solid var(--color-secondary-hover);
  padding: 20px;
}

.vacancy-list {
  max-height: 400px; /* Defina a altura máxima para a lista de vagas */
  overflow-y: auto; /* Permite scroll vertical se o conteúdo exceder a altura máxima */
  border-radius: 5px; /* Adiciona arredondamento nos cantos */
}
</style>
