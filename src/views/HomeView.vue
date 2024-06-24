<template>
    <div class="home">
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
            <div class = "content-wrapper">
                <img src="../assets/searchIcon.png" alt="Descrição da Imagem">
              <div class="text-content">
                <h3>Sou um aluno!</h3>
                <p>Busco oportunidades.</p>
                <button @click="viewStudentJobs">Ver vagas</button>
              </div>
            </div>
          </div>
          <div class="professor">
            <div class = "content-wrapper">
              <img src="../assets/studentIcon.png" alt="Descrição da Imagem">
              <div class="text-content">
                <h3>Sou um professor!</h3>
                <p>Procuro colaboradores.</p>
                <button @click="viewStudentJobs">Inserir vagas</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  </template>
  
  <script>

  </script>
  
  <style scoped>
  .welcome, .roles {
    align-self: center;
    align-items: center;
    text-align: center;
  }

  .welcome .content-wrapper {
    margin-top: 60px;
    margin-left: 150px;
    margin-right: 110px;
    display: flex;
    align-items: center; /* Centraliza verticalmente o conteúdo */
    justify-content: space-between; /* Espaço entre o texto e a imagem */
    text-align: center;
  }
  
  .roles .student .content-wrapper {
    display: flex;
    margin-left: 120px;
  }

  .roles .professor .content-wrapper {
    display: flex;
    margin-left: 65px;
  }

  .roles .professor img {
    margin-right: 30px;
    margin-top: 20px;
    height: fit-content;
    align-self: center;
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
    height: 150px;
    display: flex;
    justify-content: space-between;
    text-align: left;
  }

  .roles h3 {
    color: var(--color-primary-hover);
    font-weight: 750;
  }

  .roles p {
    color: var(--color-primary-hover);
    font-weight: 500;
  }

  .roles button {
    background: none;
    border: none;
    font-size: 18px;
    color: var(--color-primary-hover);
    text-underline-offset: 4px;
    text-decoration: underline;
  }

  .roles .student {
    background-color: var(--color-secondary);
    display: inline-block;
    border-radius: 0px 40px 40px 0px;
    left: 0;
    height: 150px;
    width: 550px;
    transform: translateY(30%); 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .roles .professor {
    background-color: var(--color-secondary);
    display: inline-block;
    border-radius: 40px 0px 0px 40px;
    right: 0;
    height: 150px;
    width: 550px;
    transform: translateY(30%); 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .welcome button {
    background-color: transparent;
    border: none;
    color: var(--color-primary-hover);
    font-weight: bold;
    font-size: 18px;
    text-decoration: underline;
  }
  </style>
  