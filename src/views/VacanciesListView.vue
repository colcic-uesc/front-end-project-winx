<script setup>
import VacancyFilter from '@/components/VacancyFilterComponent.vue';
import VacancyItem from '@/components/VacancyItemComponent.vue';
</script>

<template>
    <div class="content-wrapper">
        <main>
            <div class="title">
                <h1> Vagas</h1>
            </div>
            <div class="vacancies">
                <div class="vacancy-filter-container">
                    <VacancyFilter />
                </div>
                <div class=vacancy-listr-container>
                    <VacancyItem />
                </div>

            </div>
        </main>
    </div>
</template>

<style scoped>
</style>
