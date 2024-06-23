<template>
    <div class="logo-container">
      <img src="@/assets/LogoIcon.svg" alt="Connect CIC Logo">
    </div>
  </template>
  
  <script>
  export default {
    name: 'LogoComponent'
  }
  </script>
  
  <style scoped>
  .logo-container {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px;
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-bottom-right-radius: 50px;
  }
  </style>
  