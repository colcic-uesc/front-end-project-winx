<template>
    <div class="home">
      <section class="welcome">
          <div class="content-wrapper">
              <div class="text-content">
              <h2 style="color: var(--color-primary); font-size: 30px;"s>Bem-vindo ao ConnectCic</h2>
              <p>Conectando alunos e professores a oportunidades. O ConnectCic é uma plataforma que facilita a comunicação entre professores e alunos, oferecendo um espaço para a publicação e candidatura de vagas de estágio, pesquisa científica, bolsas para projetos e empregos.</p>
              <h3 style="margin-top: 40px;font-size: 16px;">Não tem uma conta?
                  <RouterLink to = "/signup" class="router-link">Cadastre-se</RouterLink>
              </h3>
              
              </div>
              <img src="../assets/imgs/uesc.png" alt="Descrição da Imagem">
          </div>
      </section>
      
      <section class="roles">
        <div class="student">
          <div class = "content-wrapper">
              <img src="../assets/icons/searchIcon.png" alt="Descrição da Imagem">
            <div class="text-content">
              <h3>Sou um aluno!</h3>
              <p>Busco oportunidades.</p>
              <RouterLink to = "/vacancy-list" class="router-link">Ver vagas</RouterLink>
            </div>
          </div>
        </div>
        <div class="professor">
          <div class = "content-wrapper">
            <img src="../assets/icons/studentIcon.png" alt="Descrição da Imagem">
            <div class="text-content">
              <h3>Sou um professor!</h3>
              <p>Procuro colaboradores.</p>
              <RouterLink :to="{ name: 'create-vacancy'}"class="router-link">
                Inserir Vagas
              </RouterLink>
            </div>
          </div>
        </div>
      </section>
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
  
  a.router-link {
    font-size: 18px;
    color: var(--color-primary-hover);
    text-decoration: underline;
  }

  a.router-link:hover{
    color: var(--color-primary);
  }
  

  a.roles.router-link{
    text-underline-offset: 4px;
  }

  a.welcome.router-link{
    background-color: transparent;
    font-weight: bold;
  }

  a.router-link:visited {
    color: var(--color-primary-hover);
  }

  a.router-link:visited:hover {
    color: var(--color-primary);
  }

  </style>
  