<template>
  <template v-if="signUpMode">
    <userForm/>
  </template>
  <template v-else-if="professor && !loading">
    <userForm :user="user" :professor="professor"/>
  </template>
  <template v-else-if="student && !loading">
    <userForm :user="user" :student="student"/>
  </template>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import userForm from '../components/UserFormComponent.vue'
  import { getIdFromToken } from '../utils/jwtDecoder'
  import { getRoleFromToken } from '../utils/jwtDecoder'
  import { getProfessorUser, getStudentUser } from '../services/users';
  import { getProfessor } from '../services/professors';
  import { getStudent } from '../services/students';

  const props = defineProps({
    signUpMode: {
      type: Boolean,
      default: true
    }
  });
  const token = localStorage.getItem('token');
  const user = ref(null);
  const professor = ref(null);
  const student = ref(null);
  const loading = ref(true);
  
  onMounted(async () => {
    if (!props.signUpMode) {
      const id = getIdFromToken(token);
      const role = getRoleFromToken(token);

      if (role === 'Professor') {
        try {
          user.value  = await getProfessorUser(id, token);
        }catch(e){
          console.error(e);
        }
      } else if (role === 'Student'){
        try{
          user.value  = await getStudentUser(id, token);
        }catch(e){
          console.error(e);
        }
      }

      console.log(user.value);

      if (role === 'Professor') {
        try {
          professor.value = await getProfessor(id);
          console.log(professor.value);
        }catch(e){
          console.error(e);
        }
      } else if (role === 'Student'){
        try {
          student.value = await getStudent(id, token);
          console.log(student.value);
        }catch(e){
          console.error(e);
        }
      }

      loading.value = false;
    }

  });

</script>

