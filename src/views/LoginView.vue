<template>
  <div class="login-container">
    <div class="login-content">
      <h1>Digite suas credenciais</h1>
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
        <ButtonComponent btnClass="login-button" btnType="submit">Login</ButtonComponent>
      </form>
      <h3 v-if="msg">{{ msg }}</h3>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import InputComponent from '../components/InputComponent.vue';
import ButtonComponent from '../components/ButtonComponent.vue';
import { authUser } from '../api/endpoints'; 
import { useRoute, useRouter } from 'vue-router';
import { getClaimFromToken } from '../utils/jwtDecoder';

const email = ref('');
const password = ref('');
const msg = ref('');
const router = useRouter();
const route = useRoute();

const handleSubmit = async () => {
  if (email.value && password.value) {
    msg.value = 'Autenticando...';
    try {
      const response = await authUser({ login: email.value, password: password.value});
      const token = response.token;

      msg.value = 'Usuário autenticado! Redirecionando...';
      localStorage.setItem('token', token);
      
      const id = getClaimFromToken(token, 'id');
      const role = getClaimFromToken(token, 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role');


      setTimeout(() => {
        // Redireciona após 3 segundos
        if (role === 'Professor')
          router.push({ name: 'professor-profile', params: { id: id} })
        else    
          router.push({ name: 'student-profile', params: { id: id} })
      }, 1000);
    } catch (error) {
      msg.value = 'Usuário não autenticado! Verifique os dados e tente novamente.';
      console.error("erro de senha errada", error.message);
    }
  } else {
    msg.value = 'Por favor, preencha todos os campos.';
  }
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh; 
  background-color: #e0e8f9;
}

.login-content {
  text-align: center;
}

h1 {
  margin-bottom: 30px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center; 
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
