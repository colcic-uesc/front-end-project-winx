<template>
    <div class="vacancy-item">
      <div class="vacancy-status">
        <span class="status">Disponível</span>
        <span class="salary">R$ 600,00</span>
      </div>
      <div class="vacancy-details">
        <h3>Estudo do cacau nas fazendas com Python e Machine Learning</h3>
        <p>Pesquisa avançada em agricultura utilizando Python e ML para melhorar a produção de cacau.</p>
        <span class="author">Marcelo Ossamu Honda - Iniciação Científica</span>
      </div>
      <div class="interest-button">
        <button @click="expressInterest">tenho interesse</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      expressInterest() {
        alert('Interesse registrado!');
      }
    }
  }
  </script>
  
  <style scoped>
  .vacancy-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 10px;
  }
  
  .vacancy-status {
    color: green;
    font-weight: bold;
  }
  
  .salary {
    color: blue;
  }
  
  .vacancy-details h3 {
    margin: 0;
  }
  
  .interest-button button {
    background-color: blue;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  