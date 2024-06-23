<template>
    <div class="home">
      <HeaderComponent/>
      <SidebarComponent/>
  
      <main>
        <section class="welcome">
            <div class="content-wrapper">
                <div class="text-content">
                <h2 style="color: var(--color-primary); font-size: 30px;"s>Bem-vindo ao ConnectCic</h2>
                <p>Conectando alunos e professores a oportunidades. O ConnectCic é uma plataforma que facilita a comunicação entre professores e alunos, oferecendo um espaço para a publicação e candidatura de vagas de estágio, pesquisa científica, bolsas para projetos e empregos.</p>
                <h3 style="margin-top: 40px;font-size: 16px;">Não tem uma conta?
                    <button @click="register">Cadastre-se</button>
                </h3>
                
                </div>
                <img src="../assets/uesc.png" alt="Descrição da Imagem">
            </div>
        </section>
        
        <section class="roles">
          <div class="student">
            <h3>Sou um aluno!</h3>
            
            <p>Busco oportunidades.</p>
            <button @click="viewStudentJobs">Ver vagas</button>
          </div>
          <div class="professor">
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
import SidebarComponent from '../components/SidebarComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';  // Importar o LogoComponent correto
import '../assets/base.css';
import '../assets/uesc.png';
  
  export default {
    components: {
        HeaderComponent, SidebarComponent  // Registrar o LogoComponent
    }
  }

  </script>
  
  <style scoped>
  
  .welcome, .roles {
    align-self: center;
    margin-top: 15px;
    padding: 20px;
    align-items: center;
    text-align: center;
  }

  .welcome .content-wrapper {
    margin-left: 130px;
    margin-right: 100px;
    display: flex;
    align-items: center; /* Centraliza verticalmente o conteúdo */
    justify-content: space-between; /* Espaço entre o texto e a imagem */
    text-align: center;
  }

  .welcome .text-content {
    flex: 1; /* Permite que o texto cresça e use espaço disponível */
    padding-right: 100px; /* Espaço entre o texto e a imagem */
    text-align: left;
    line-height: 2.0em;
  }

  .welcome img {
    margin-top: 15px;
    max-width: 700px; /* Largura máxima da imagem */
    height: auto; /* Mantém a proporção da imagem */
  }

  .roles {
    
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: space-between;
  }

  .roles .student {
    background-color: var(--color-secondary-hover);
    display: inline-block;
    border-radius: 0px 40px 40px 0px;
    left: 0;
    height: 150px;
    width: 200px;
    
  }

  .roles .professor {
    background-color: var(--color-secondary-hover);
    display: inline-block;
    border-radius: 0px 40px 40px 0px;
    right: 0;
    height: 150px;
    width: 200px;
  }

  .welcome button {
    background-color: transparent;
    border: none;
    color: var(--color-primary-hover);
    font-weight: bold;
    font-size: 18px;
    text-decoration: underline;
  }
  
  footer {
    background: #f0f0f0;
    padding: 20px;
    text-align: center;
    bottom: 0;
  }

  
  </style>
  