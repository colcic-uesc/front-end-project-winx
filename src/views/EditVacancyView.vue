<template>
    <div>
      <HeaderComponent />
      <SidebarComponent />
      <div class="container">
        <h2>Dados da vaga</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="titulo">Título</label>
            <input type="text" id="titulo" v-model="form.titulo" />
          </div>
          <div class="form-group">
            <label for="status">Status</label>
            <input type="text" id="status" v-model="form.status" />
          </div>
          <div class="form-group">
            <label for="valor">Valor</label>
            <input type="text" id="valor" v-model="form.valor" />
          </div>
          <div class="form-group">
            <label for="dataInicio">Data de Início</label>
            <input type="date" id="dataInicio" v-model="form.dataInicio" />
          </div>
          <div class="form-group">
            <label for="dataTermino">Data de Término</label>
            <input type="date" id="dataTermino" v-model="form.dataTermino" />
          </div>
          <div class="form-group">
            <label for="tipoVaga">Tipo de Vaga</label>
            <input type="text" id="tipoVaga" v-model="form.tipoVaga" />
          </div>
          <div class="form-group">
            <label for="descricao">Descrição</label>
            <textarea id="descricao" v-model="form.descricao"></textarea>
          </div>
          <div class="form-group">
            <label for="requisitos">Requisitos</label>
            <textarea id="requisitos" v-model="form.requisitos"></textarea>
          </div>
          <button type="submit">Finalizar</button>
        </form>
      </div>
      <FooterComponent />
    </div>
  </template>
  
  <script>
  import HeaderComponent from './HeaderComponent.vue'
  import SidebarComponent from './SidebarComponent.vue'
  import FooterComponent from './FooterComponent.vue'
  
  export default {
    components: {
      HeaderComponent,
      SidebarComponent,
      FooterComponent
    },
    data() {
      return {
        form: {
          titulo: '',
          status: '',
          valor: '',
          dataInicio: '',
          dataTermino: '',
          tipoVaga: '',
          descricao: '',
          requisitos: ''
        }
      }
    },
    methods: {
      submitForm() {
        console.log('Form data:', this.form)
        // enviar os dados do formulário para o servidor
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    margin-left: 200px; /* ajustarrr*/
    padding: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  .form-group {
    margin-bottom: 15px;
  }
  label {
    margin-bottom: 5px;
  }
  input, textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    padding: 10px;
    background-color: #ff0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #ffd700;
  }
  </style>
  