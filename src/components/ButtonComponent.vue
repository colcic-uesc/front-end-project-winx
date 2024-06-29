<template>
  <button @click="handleClick" :class="btnClass">
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
  padding: 10px 25px; 
  font-size: 16px;
  color: #000000; 
  background-color: #F0E63A; 
  border: none;
  border-radius: 8px; 
  cursor: pointer;
  transition: background-color 0.3s;
}

.default-button:hover {
  background-color: #F0D400;
}
</style>
