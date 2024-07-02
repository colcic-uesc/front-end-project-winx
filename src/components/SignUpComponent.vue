<template>
  <div class="signup-container">
    <template v-if="mode == 0">
      <div class="signup-content">
        <h1>Crie sua conta</h1>
        <form @submit.prevent="handleSubmitUser">
          <div class="input-group">
            <font-awesome-icon icon="envelope" class="icon" />
            <InputComponent
              v-model="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div class="input-group">
            <font-awesome-icon icon="lock" class="icon" />
            <InputComponent
              v-model="password"
              type="password"
              placeholder="Senha"
            />
          </div>
          <div class="input-group">
            <font-awesome-icon icon="user" class="icon" />
            <select v-model="user" class="select-input">
              <option disabled value="">Selecione um tipo de usuário</option>
              <option value="Professor">Professor</option>
              <option value="Student">Aluno</option>
            </select>
          </div>
          <ButtonComponent btnClass="signup-button" btnType="submit">Cadastrar</ButtonComponent>
        </form>
      </div>
    </template>
    <template v-if="mode == 1">
      <div class="signup-content">
        <h1>Crie sua conta</h1>
        <form @submit.prevent="handleSubmitProfessor">
          <div class="input-group">
            <font-awesome-icon icon="user" class="icon" />
            <InputComponent
              v-model="name"
              type="text"
              placeholder="Nome"
            />
          </div>
          <div class="input-group">
            <font-awesome-icon icon="envelope" class="icon" />
            <InputComponent
              v-model="contactEmail"
              type="email"
              placeholder="Email de contato"
            />
          </div>
          <div class="input-group">
            <font-awesome-icon icon="sitemap" class="icon" />
            <InputComponent
              v-model="department"
              type="text"
              placeholder="Departamento"
            />
          </div>
          <ButtonComponent btnClass="signup-button" btnType="submit">Finalizar</ButtonComponent>
        </form>
      </div>
    </template>
    <template v-if="mode == 2">
      <div class="signup-content">
        <h1>Crie sua conta</h1>
        <form @submit.prevent="handleSubmitStudent">
          <div class="input-group">
            <font-awesome-icon icon="user" class="icon" />
            <InputComponent
              v-model="name"
              type="text"
              placeholder="Nome"
            />
          </div>
          <div class="input-group">
            <font-awesome-icon icon="envelope" class="icon" />
            <InputComponent
              v-model="contactEmail"
              type="email"
              placeholder="Email de contato"
            />
          </div>
          <div class="input-group">
            <font-awesome-icon icon="award" class="icon" />
            <InputComponent
              v-model="craa"
              type="number"
              placeholder="CRAA"
            />
          </div>
          <div class="input-group">
            <font-awesome-icon icon="graduation-cap" class="icon" />
            <InputComponent
              v-model="course"
              type="text"
              placeholder="Curso"
            />
          </div>
          <ButtonComponent btnClass="signup-button" btnType="submit">Finalizar</ButtonComponent>
        </form>
      </div>
    </template>
    <div v-if="msg">
      <ul>
        <li v-if="Array.isArray(msg)" v-for="error in msg" :key="error">
          {{ error }}
        </li>
        <li v-else>
          {{ msg }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import InputComponent from '../components/InputComponent.vue';
import ButtonComponent from '../components/ButtonComponent.vue';
import { postStudent } from '../api/endpoints';
import { postStudentUser } from '../api/endpoints';
import { postProfessor } from '../api/endpoints';
import { postProfessorUser } from '../api/endpoints'
import { authUser } from '../api/endpoints';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const props = defineProps({
  user: {
    type: Object,
    default: null
  },
  professor: {
    type: Object,
    default: null
  },
  student: {
    type: Object,
    default: null
  }
});

const professor = ref({
  name: '',
  email: '',
  department: ''
});
const student = ref({
  name: '',
  email: '',
  craa: '',
  course: ''
});

const email = ref('');
const password = ref('');
const user = ref('');
const mode = ref(0);
const name = ref('');
const contactEmail = ref('');
const department = ref('');
const craa = ref('');
const course = ref('');
const msg = ref('');

const validatePassword = (password) => {
  const errors = [];
  if (!password) {
    errors.push("O campo 'Password' é obrigatório.");
  } else {
    if (password.length < 6) errors.push("O campo 'Password' deve ter no mínimo 6 caracteres.");
    if (password.length > 16) errors.push("Sua senha não pode exceder 16 caracteres.");
    if (!/[A-Z]/.test(password)) errors.push("Sua senha deve ter pelo menos uma letra maiúscula.");
    if (!/[a-z]/.test(password)) errors.push("Sua senha deve ter pelo menos uma letra minúscula.");
    if (!/[0-9]/.test(password)) errors.push("Sua senha deve ter pelo menos um número.");
  }
  return errors;
};

const handleSubmitUser = () => {
  const passwordErrors = validatePassword(password.value);
  console.log(passwordErrors);
  if (email.value && passwordErrors.length === 0 && user.value) {
    console.log('Email:', email.value);
    console.log('Password:', password.value);
    console.log('User:', user.value);
    if (user.value == 'Professor') {
      mode.value = 1;
    } else {
      mode.value = 2;
    }
    msg.value = ''
  } else {
    if (!email.value) msg.value = 'Por favor, preencha o campo Email.';
    else if (passwordErrors.length > 0) msg.value = passwordErrors;
    else if (!user.value) msg.value = 'Por favor, selecione um tipo de usuário.';
  }
};

const handleSubmitProfessor = async () => {
  if (name.value && isValidEmail(contactEmail.value) && department.value) {
    if (name.value.length < 6){
      msg.value = ["O nome deve conter no minimo 6 caracteres"];
      return;
    }

    console.log('Name:', name.value);
    console.log('ContactEmail:', contactEmail.value);
    console.log('Department:', department.value);
    msg.value = ['Cadrastrando professor...'];

    let professorId;
    try {
      const professorReponse = await postProfessor({
        Name: name.value,
        Email: contactEmail.value,
        Department: department.value
      });

      professorId = professorReponse.professorID;
      console.log(professorId);
    } catch (error) {
      msg.value = ['Erro ao cadastrar professor. Tente novamente mais tarde.'];
      return;
    }

    try{
      const userResponse = await postProfessorUser({
        Login: email.value,
        Password: password.value,
        ProfessorId: professorId
      });
      console.log(userResponse);
    } catch (error) {
      msg.value = ['Erro ao cadastrar usuário. Tente novamente mais tarde.'];
      return;
    }

    const authResponse = await authUser({ login: email.value, password: password.value});
    const token = authResponse.token;

    localStorage.setItem('token', token);
    console.log(token);

    setTimeout(() => {
      msg.value = ['Professor cadastrado com sucesso! Redirecionando...'];
      setTimeout(() => {
        // Redireciona após 3 segundos
        router.push({ name: 'professor-profile', params: { id: professorId} })
      }, 1000);
    }, 2000);
  } else {
    msg.value = ['Por favor, preencha todos os campos corretamente.'];
  }
};

const handleSubmitStudent = async () => {
  if (name.value && isValidEmail(contactEmail.value) && course.value) {
    if (name.value.length < 6){
      msg.value = ["O nome deve conter no minimo 6 caracteres"];
      return;
    }


    if (!craa.value){
      craa.value = 0;
    }

    if (craa.value < 0) {
      msg.value = ['CRAA não pode ser negativo.'];
      return;
    }else if (craa.value > 10) {
      msg.value = ['CRAA não pode ser maior que 10.'];
      return;
    }else{
      console.log('Name:', name.value);
      console.log('ContactEmail:', contactEmail.value);
      console.log('Craa:', craa.value);
      console.log('Course:', course.value);
      msg.value = ['Cadrastrando aluno...'];


      let studentId;
      try {
        const studentReponse = await postStudent({
          Name: name.value,
          Email: contactEmail.value,
          CRAA: craa.value,
          Course: course.value,
          Status: 'Cursando'})

        studentId = studentReponse.studentID;
        console.log(studentReponse);
      } catch (error) {
        msg.value = ['Erro ao cadastrar aluno. Tente novamente mais tarde.'];
        return;
      }

      try{
        const userResponse = await postStudentUser({
          Login: email.value,
          Password: password.value,
          StudentId: studentId
        })
        console.log(userResponse);
      } catch (error) {
        msg.value = ['Erro ao cadastrar usuário. Tente novamente mais tarde.'];
        return;
      }

      const authResponse = await authUser({ login: email.value, password: password.value});
      const token = authResponse.token;

      localStorage.setItem('token', token);
      console.log(token);

      setTimeout(() => {
        msg.value = ['Aluno cadastrado com sucesso! Redirecionando...'];
        setTimeout(() => {
          // Redireciona após 3 segundos
          router.push({ name: 'student-profile', params: { id: studentId} })
        }, 1000);
      }, 2000);
    }
  } else {
    msg.value = ['Por favor, preencha todos os campos corretamente.'];
  }
};


const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

onMounted(() => {
  if (props.user) {
    email.value = props.user.Login || ''
    password.value = ''
    if (props.professor) {
      professor.value = {
        name: props.professor.Name,
        email: props.professor.Email,
        department: props.professor.Department
      }
    } else if (props.student) {
      student.value = {
        name: props.student.Name,
        email: props.student.Email,
        craa: props.student.CRAA,
        course: props.student.Course
      }
    }
  }
});
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

.signup-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh; 
  background-color: #e0e8f9;
}

.signup-content {
  text-align: center;
}

h1 {
  margin-bottom: 30px; 
}

form {
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: 320px;
}

.input-group {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  width: 300px; 
}

.icon {
  margin-right: 8px;
  font-size: 24px; 
  color: #3653AE; 
}

.select-input {
  flex-grow: 1;
  padding: 10px 12px; 
  font-size: 16px;
  border: 1px solid #000; 
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: var(--color-text);
  width: 100%;
  box-sizing: border-box; 
}

.signup-button {
  padding: 10px 25px; 
  font-size: 16px;
  color: #000000; 
  background-color: #F0E63A; 
  border: none;
  border-radius: 8px; 
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;
}

.signup-button:hover {
  background-color: #F0D400;
}
</style>
