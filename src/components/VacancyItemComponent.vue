<template>
    <div class="vacancy-item">
      <div class="tag">Disponível</div>
      <div class="vacancy-details">
        <div class="vacancy-text">
          <span class="salary">R$ 600,00</span>
          <h3>Estudo do cacau nas fazendas com Python e Machine Learning</h3>
          <span class="author">Marcelo Ossamu Honda - Iniciação Científica</span>
        </div>
        <div class="interest-button">
          <button @click="expressInterest">tenho interesse</button>
        </div>
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
    
  }
  
  .tag {
    font-size: 14px;
    background-color: var(--color-green);
    color: white;
    font-weight: 550;
    width: 100px;
    text-align: center;
    border-radius: 8px 8px 0px 0px;
  }
  
  .salary {
    color: var(--color-variant-background);
  }
  
  .vacancy-details {
    height: 110px;
    display: flex;
    margin-bottom: 10px;
    background-color: #f0f0f0;
    border-radius: 10px;
    text-align: left;
  }

  .vacancy-text {
    padding-top: 20px;
    margin-left: 10px;
    
    color: var(--color-variant-background);
    line-height: 0.0em;
  }

  .vacancy-text h3{
    color: var(--color-variant-background);
    line-height: 1.0em;
  }
  
  .interest-button button{
    height: 100%;
    padding: 20px;
    background-color: var(--color-variant-background);
    color: white;
    font-weight: 600;
    border: none;
    cursor: pointer;
    align-content: center;
  }

  </style>
  