
<script setup>
    import CheckBox from '@/components/CheckBoxComponent.vue';
    import { onMounted, ref } from 'vue';
    import { getVacancyTypes } from '@/services/endpoints';

    const checkedCategories = ref([]);
    const categories = ref([]);
    const emit = defineEmits(['categoriesChanged']);

    onMounted(async () => {
        try {
            categories.value = await getVacancyTypes();
        } catch (error) {
            console.error(error);
        }
    });

    function updateValue({name, value}) {
        let index = checkedCategories.value.findIndex(category => category === name);
        if (index === -1) {
            checkedCategories.value.push(name);
        } else {
            checkedCategories.value.splice(index, 1);
        }
        emit('categoriesChanged', checkedCategories.value);
    }

</script>

<template>
    <div class="category-filter-container">
        <div class="heading-tertiary category-title">
            Categorias
        </div>
        <div class="category-filter">
            <CheckBox v-for="category in categories" :name="category.vacancyTypeID.toString()" :value="false" :label="category.name" @custom-checked="updateValue"/>
            
        </div>
    </div>
</template>

<style scoped>
    .category-title{
        margin-bottom: 16px;
    }

    .category-filter {
        margin-left: 12px;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
</style>