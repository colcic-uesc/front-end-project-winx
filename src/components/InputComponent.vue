<template>
    <div class="input-wrap">
      <label v-if="label">{{ label }}</label>
      <input 
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
      />
    </div>
</template>
  
<script setup>
  defineProps({
    label: {
      type: [String, Boolean],
      default: false,
    },
    modelValue: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  });
</script>
  
<style scoped>
  .input-wrap {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  
    input {
      padding: 8px 12px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  
    label {
      margin-bottom: 8px;
      font-size: 14px;
      color: #333;
    }
  }
</style>
  