<template>
  <div class="input-wrap">
    <input 
      :type="type"
      :value="modelValue"
      @input="updateValue"
      v-bind="$attrs"
    />
  </div>
</template>

<script setup>
  import { ref, watch} from 'vue';

  const props = defineProps({
    modelValue: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  });

  const emit = defineEmits(['update:modelValue']);

  const inputValue = ref(props.modelValue);

  watch(() => props.modelValue, (newValue) => {
    inputValue.value = newValue;
  });

  const updateValue = (event) => {
    inputValue.value = event.target.value;
    emit('update:modelValue', inputValue.value);
  };
</script>

<style scoped>
.input-wrap {
  flex-grow: 1;
}

input {
  width: 100%;
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid #000; 
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box; 
  flex-grow: 1;
  color: var(--color-text);
}
</style>
