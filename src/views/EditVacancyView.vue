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
          <div class="form-group descricao">
            <label for="descricao">Descrição</label>
            <textarea id="descricao" v-model="form.descricao"></textarea>
          </div>
          <div class="form-group requisitos">
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
  export default {
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
      };
    },
    methods: {
      submitForm() {
        // Lógica para enviar o formulário
        console.log(this.form);
      }
    }
  };
  </script>
  
  <style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
}

form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
    "titulo descricao"
    "status descricao"
    "valor descricao"
    "dataInicio requisitos"
    "dataTermino requisitos"
    "tipoVaga requisitos"
    "button button";
  gap: 30px;
  padding: 30px;
  border-radius: 8px;
}

h2 {
  grid-column: span 2;
  text-align: center;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
}

input, textarea {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  resize: vertical;
}

.descricao textarea, .requisitos textarea {
  width: 100%;
  height: 200px; /* Aumentei a altura conforme necessário */
}

.descricao {
  grid-area: descricao;
}

.requisitos {
  grid-area: requisitos;
}

button {
  grid-area: button;
  padding: 8px;
  background-color: #ff0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}

button:hover {
  background-color: #ffd700;
}

  </style>