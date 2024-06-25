<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import SidebarComponent from './components/SidebarComponent.vue';

</script>

<template>

  <div class="app-container">
    <HeaderComponent />
    <SidebarComponent />
    <div class="main-content">

      <RouterView />
    </div>
    <FooterComponent />
  </div>
</template>

<style scoped>
  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .main-content {
    display: flex;
    flex: 1;
  }

  .main-content > * {
    flex: 1;
  }

  RouterView {
    flex: 1;
  }
</style>
