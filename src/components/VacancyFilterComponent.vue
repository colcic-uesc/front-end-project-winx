<script setup>
import { onMounted, ref } from 'vue';
import CheckBox from '@/components/CheckBoxComponent.vue';

    const props = defineProps({
        optionsList: {
            type: Object,
            required: true,
        },
        mode: {
            type: String,
            required: true,
        }
    });

    const checkedOptions = ref([]);
    const emit = defineEmits(['filterChanged']);

    
    const renderCheckbox = (showAtributte) => {
        switch (showAtributte) {
            case 'always':
                return true;
            case 'logged':
                return props.mode === 'studentMode' || props.mode === 'professorMode';
            default:
                return false;
        }
    }


    const updateValue = ({name, value}) => {
        let index = checkedOptions.value.findIndex(option => option.name === name);
        checkedOptions.value[index].value = value;
        emit('filterChanged', checkedOptions.value);
    }

    onMounted(() => {
        console.log(props.optionsList);
        props.optionsList.forEach(option => {
            checkedOptions.value.push({name: option.name, value: option.value});
        });
    });

</script>

<template>
    <div class="filter-container">
        <template v-for="option in optionsList">
            <CheckBox v-if= "renderCheckbox(option.show)"  
                :name="option.name" 
                :value="option.value" 
                :label="option.label" 
                @custom-checked="updateValue"
            />
        </template>
    </div>
    
</template>

<style scoped>
    .filter-container {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

</style>