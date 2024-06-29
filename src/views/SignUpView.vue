<template>
  <template v-if="mode == 'signUp'">
    <signUp/>
  </template>
  <template v-else-if="mode == 'editProfessor'">
    <signUp :user="user" :professor="professor"/>
  </template>
  <template v-else-if="mode == 'editStudent'">
    <signUp :user="user" :student="student"/>
  </template>
</template>

<script setup>
  import signUp from '@/components/SignUpComponent.vue'
  
  const props = defineProps(['mode', 'user', 'professor', 'student']);

</script>

