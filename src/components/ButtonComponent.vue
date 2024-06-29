<!-- src/components/ButtonComponent.vue -->
<template>
    <button @click="handleClick" :class = "btnClass">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'ButtonComponent',
    props: {
      btnClass: {
        type: String,
        default: 'default-button'
      }
    },
    methods: {
      handleClick(event) {
        this.$emit('clickButton', event);
      }
    }
  }
  </script>
  
  <style scoped>
  .default-button {
    padding: 10px 20px;
    font-size: 16px;
    color: rgb(210, 210, 204);
    background-color: var(--color-primary);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .default-button:hover {
    background-color: rgb(54, 54, 168);
  }
  </style>
  