<script setup>
    import { ref } from 'vue';

    const emit = defineEmits(['customChecked']);
    const props = defineProps({
        name: String,
        value: Boolean,
        label: String,
    });
    const checked = ref(props.value);

    function updateValue(event) {
        checked.value = event.target.checked;
        emit('customChecked', { name: props.name, value: checked.value });
    };

</script>

<template>
    <div class="checkbox-container">
        <input type="checkbox" :id="name" v-model="checked" @change="updateValue" />
        <label :for="name">{{ label }}</label>
    </div>
</template>

<style scoped>
    .checkbox-container {
        display: flex;
        align-items: flex-start;
        width: 100%;
        gap: 7px;
    }

    .checkbox-container label {
        flex: 1;
        word-wrap: break-word;
    }
    /* aumenta o tamanho do checkbox */
    input[type="checkbox"] {
        transform: scale(1.5); /* Ajusta o valor do tamanho */

        /* suporte para navegadores distintos */
        -webkit-transform: scale(1.5); 
        -moz-transform: scale(1.5);
        -ms-transform: scale(1.5); 
        -o-transform: scale(1.5);
    }
</style>