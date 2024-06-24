<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import SidebarComponent from './components/SidebarComponent.vue';
import ButtonComponent from './components/ButtonComponent.vue';

</script>

<template>
  <HeaderComponent />
  <SidebarComponent />

  <RouterView />
  <FooterComponent />
</template>

<style scoped>
/* css global */
</style>
