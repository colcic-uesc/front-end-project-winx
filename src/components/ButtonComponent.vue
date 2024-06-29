<!-- src/components/ButtonComponent.vue -->
<template>
  <button :type="btnType" @click="handleClick" :class="btnClass">
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
    },
    btnType: {
      type: String,
      default: 'button' 
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
  color: #F0E63A;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.default-button:hover {
  background-color: #F0D400;
}
</style>
