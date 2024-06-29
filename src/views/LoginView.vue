<template>
  <div class="login-container">
    <div class="login-content">
      <h1>Digite sua credenciais</h1>
      <form @submit.prevent="handleSubmit">
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
        <ButtonComponent btnClass="login-button">Login</ButtonComponent>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import InputComponent from '../components/InputComponent.vue';
import ButtonComponent from '../components/ButtonComponent.vue';

const email = ref('');
const password = ref('');

const handleSubmit = () => {
  console.log('Email:', email.value);
  console.log('Password:', password.value);
  // Lógica para lidar com o login
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh; /* Move os elementos mais para cima */
  background-color: #e0e8f9;
}

.login-content {
  text-align: center;
}

h1 {
  margin-bottom: 30px; /* Ajusta a distância entre o título e os inputs */
}

form {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza os inputs e ícones */
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

input {
  flex-grow: 1;
  padding: 10px 12px; 
  font-size: 16px;
  border: 1px solid #000; 
  border-radius: 8px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.login-button {
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

.login-button:hover {
    background-color: #F0D400;
}
</style>
