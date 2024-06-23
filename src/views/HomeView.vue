<template>
    <div class="home">
      <HeaderComponent/>
      <header>
        <h1>Connect CIC</h1>
      </header>
  
      <main>
        <section class="welcome">
          <h2>Bem-vindo ao ConnectCic</h2>
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
  
      <footer>
        <p>© 2024 - Todos os direitos reservados</p>
        <p>Desenvolvido por Grupo das Winx</p>
      </footer>
    </div>
  </template>
  
  <script>
  import HeaderComponent from '../components/HeaderComponent.vue';  // Importar o LogoComponent correto
  
  export default {
    components: {
        HeaderComponent  // Registrar o LogoComponent
    }
  }

  </script>
  
  <style scoped>
  .home header {
    background: #f0f0f0;
    padding: 20px;
    text-align: center;
  }
  
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
  
  footer {
    background: #f0f0f0;
    padding: 20px;
    text-align: center;
  }
  </style>
  