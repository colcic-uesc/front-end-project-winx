
<script setup>
    import CheckBox from '@/components/CheckBoxComponent.vue';
    import { onMounted, ref } from 'vue';


    const props = defineProps({
        categories: {
            type: Array,
            required: true,
        },
        checkedCategories: {
            type: Array,
            required: true,
        },
    });
    const emit = defineEmits(['categoriesChanged']);

    onMounted(async () => {
            // categories.value = await getVacancyTypes();
            // checkedCategories.value = categories.value.map(category => category.vacancyTypeID.toString());
    });

    function updateValue({name, value}) {
        let index = props.checkedCategories.findIndex(category => category === name);
        if (index === -1) {
            props.checkedCategories.push(name);
        } else {
            props.checkedCategories.splice(index, 1);
        }
        emit('categoriesChanged', props.checkedCategories);
    }

</script>

<template>
    <div class="category-filter-container">
        <div class="heading-tertiary category-title">
            Categorias
        </div>
        <div class="category-filter">
            <CheckBox v-for="category in categories" 
                :name="category.vacancyTypeID.toString()" 
                :value="checkedCategories.includes(category.vacancyTypeID.toString())"
                :label="category.name" 
                @custom-checked="updateValue"/>
            
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