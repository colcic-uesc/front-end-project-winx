<template>
    <div class="vacancy-item">
      <template v-if="vacancy.status === 'Aberta'">
        <div class="tag available">
          Disponível
        </div>
      </template>
      <template v-else>
        <div class="tag unavailable">
          Indisponível
        </div>
      </template>
      <div class="vacancy-details">
        <div class="vacancy-text">
          <span class="salary">
            {{ numbertoRS }}
          </span>
          <h3>
            {{ vacancy.projectTitle }}
          </h3>
          <p>
            <strong>Descrição: </strong>{{ vacancy.description }}
          </p>
          <p>
            <strong>Requisitos: </strong>{{ vacancy.requirements }}
          </p>
          <p class="author" v-if="professor && vacancyType"> 
            {{ professor.name }} - {{ vacancyType.name }}
          </p>
        </div>
        <div class="interest-button" :class="{'disabled':templateMode==='professorMode' && !ownedVacancy}">
          <button @click="handleClick" :disabled="templateMode==='professorMode' && !ownedVacancy">
            {{ buttonMessage() }}
          </button>

        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { getProfessor} from '../services/professors';
  import { getVacancyType } from '../services/vacancies';
  export default {
    data() {
      return {
        professor: null,
        vacancyType: null,
      }
    },
    props: {
      vacancy: {
        type: Object,
        required: true,
      },
      templateMode: {
        type: String,
        default: 'viewMode'
      },
      ownedVacancy: {
        type: Boolean,
        default: false
      }
    },
    
    methods: {
      handleClick() {
        if(this.templateMode === 'professorMode' && this.ownedVacancy){
            this.editVacancy();
        }
      },
      applyVacancy(){
        console.log('Aplicar para vaga!');
      },
      unsubscribeVacancy(){
        console.log('Tirar interesse na vaga!');
      },
      editVacancy(){
        this.$router.push({name: 'edit-vacancy', params: {id: this.vacancy.vacancyID}});
      },
      buttonMessage() {
        if (this.templateMode==='studentMode'){
          if(this.ownedVacancy){
            return 'Retirar Interesse'
          }
          return 'Tenho Interesse'
        }
        else if (this.templateMode==='professorMode'){
          return 'Editar Vaga'
        }
        else {
          return 'Tenho Interesse'
        }
      }
    },
    computed: {
      numbertoRS() {
        return `R$ ${this.vacancy.value.toFixed(2).toLocaleString()}`;
      }
    },
    async mounted() {
      try {
        const professorReponse = await getProfessor(this.vacancy.professorID);
        
        if (professorReponse) {
          this.professor = professorReponse;
        }
      } catch (error) {
        console.error(error);
      }

      try {
        const vacancyTypeResponse = await getVacancyType(this.vacancy.vacancyTypeID);
        
        if (vacancyTypeResponse) {
          this.vacancyType = vacancyTypeResponse;
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
  </script>
  
  <style scoped>
  
  .tag {
    font-size: 14px;
    color: white;
    font-weight: 550;
    width: 100px;
    text-align: center;
    border-radius: 8px 8px 0px 0px;
  }

  .tag.available {
    background-color: var(--color-green);
  }

  .tag.unavailable {
    background-color: var(--color-cancel);
  }
  
  .salary {
    color: var(--color-variant-background);
  }
  
  .vacancy-details {
    height: 150px;
    display: flex;
    margin-bottom: 10px;
    background-color: #f0f0f0;
    border-radius: 10px;
    text-align: left;
    justify-content: space-between;
  }

  .vacancy-text {
    padding-top: 20px;
    margin-left: 10px;
    color: var(--color-variant-background);
    line-height: 0.0em;
  }

  .vacancy-text p{
    line-height: 0.7em;
  }

  .vacancy-text h3{
    line-height: 0.7em;
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

  .interest-button.disabled button {
    opacity: 0.8;
    cursor: default;
  }

  </style>
  