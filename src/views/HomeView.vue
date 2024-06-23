<template>
    <div class="home">
      <main>
        <section class="welcome">
          <h2>Bem-vindo ao ConnectCic <font-awesome-icon icon="house" /></h2>
          <p>Conectando alunos e professores a oportunidades. O ConnectCic é uma plataforma que facilita a comunicação entre professores e alunos, oferecendo um espaço para a publicação e candidatura de vagas de estágio, pesquisa científica, bolsas para projetos e empregos.</p>
          <button @click="register">Não tem uma conta? Cadastre-se</button>
        </section>
        
        <section class="roles">
          <div class="student">
            <h3>Sou um aluno!</h3>
            
            <p>Busco oportunidades.</p>
            <button @click="viewStudentJobs">Ver vagas</button>
          </div>
          <div class="teacher">
            <h3>Sou um professor!</h3>
            <p>Procuro colaboradores.</p>
            <button @click="postJob">Inserir vagas</button>
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script>

  </script>
  
  <style scoped>
  .welcome, .roles {
    padding: 20px;
    text-align: center;
  }
  
  .roles div {
    display: inline-block;
    margin: 20px;
    padding: 20px;
    background: #f8f8f8;
    border-radius: 10px;
  }
  </style>
  