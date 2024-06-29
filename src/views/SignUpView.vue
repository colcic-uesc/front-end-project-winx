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
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import InputComponent from '../components/InputComponent.vue';
  import ButtonComponent from '../components/ButtonComponent.vue';
  
  const email = ref('');
  const password = ref('');
  const user = ref('');
  const mode = ref(0);
  const name = ref('');
  const contactEmail = ref('');
  const department = ref('');
  const craa = ref('');
  const course = ref('');
  
  const handleSubmitUser = () => {
    console.log('Email:', email.value);
    console.log('Password:', password.value);
    console.log('User:', user.value);
    if (user.value == 'Professor') {
        mode.value = 1;
    } else {
        mode.value = 2;
    }
    console.log(mode);
  };

  const handleSubmitProfessor = () => {
    console.log('Name:', name.value);
    console.log('ContactEmail:', contactEmail.value);
    console.log('Department:', department.value);
    //depois fazer função pro submit bd
  };

  const handleSubmitStudent = () => {
    console.log('Name:', name.value);
    console.log('ContactEmail:', contactEmail.value);
    console.log('Craa:', craa.value);
    console.log('Course:', course.value);
    //depois fazer função pro submit bd
  };
  </script>
  
  <style scoped>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
  
  .signup-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh; /* Move os elementos mais para cima */
    background-color: #e0e8f9;
  }
  
  .signup-content {
    text-align: center;
  }
  
  h1 {
    margin-bottom: 30px; /* Ajusta a distância entre o título e os inputs */
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza os inputs e ícones */
    width: 320px;
  }
  
  .input-group {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    width: 300px; /* Aumenta a largura dos inputs */
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
    color: gray;
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
  