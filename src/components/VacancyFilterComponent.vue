<script setup>
import { onMounted, ref } from 'vue';
import CheckBox from '@/components/CheckBoxComponent.vue';

    const checkedOptions = ref([]);
    const emit = defineEmits(['filterChanged']);

    const optionsList = [
        {name: 'showOnlyOpened', value: true, label: 'Mostrar somente vagas abertas'},
        {name: 'showOnlyPriced', value: false, label: 'Mostrar somente vagas remuneradas'},
        {name: 'hideYours', value: false, label: 'Esconder vagas já aplicadas'},
    ]


    function updateValue({name, value}) {
        let index = checkedOptions.value.findIndex(option => option.name === name);
        checkedOptions.value[index].value = value;
        emit('filterChanged', checkedOptions.value);
    }

    onMounted(() => {
        optionsList.forEach(option => {
            checkedOptions.value.push({name: option.name, value: option.value});
        });
    });

</script>

<template>
    <div class="filter-container">
        <CheckBox v-for="option in optionsList"  :name="option.name" :value="option.value" :label="option.label" @custom-checked="updateValue"/>
    </div>
    <div class="categories-container">
        Categorias

    </div>
    
</template>

<style scoped>
</style>