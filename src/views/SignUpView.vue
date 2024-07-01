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
  import { getClaimFromToken } from '../utils/jwtDecoder'

  const props = defineProps(['mode']);
  // const token = localStorage.getItem('token');
  // console.log(localStorage.getItem("token"));
  //console.log(getClaimFromToken(token,'userName'));

</script>

