<template>
    <div class="login-container">
      <div class="login-card">
        <h1>Digite suas credenciais</h1>
        <form @submit.prevent="handleSubmit">
          <InputComponent
            v-model="email"
            label="Email"
            type="email"
            placeholder="E-mail"
          />
          <InputComponent
            v-model="password"
            label="Senha"
            type="password"
            placeholder="Senha"
          />
          <button type="submit" class="login-button">Login</button>
        </form>
      </div>
    </div>
</template>
  
<script setup>
  import { ref } from 'vue';
  import InputComponent from '../components/InputComponent.vue'; 
  
  const email = ref('');
  const password = ref('');
  
  const handleSubmit = () => {
    console.log('Email:', email.value);
    console.log('Password:', password.value);
    // Lógica para lidar com o login
  };
</script>
  
<style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #e0e8f9;
  }
  
  .login-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  h1 {
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  .login-button {
    background-color: #ffcc00;
    border: none;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 20px;
  }
</style>
  