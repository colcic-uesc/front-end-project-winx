<template>
  <div>
    <div class="container">
      <h2>Dados da vaga</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <InputComponent
            v-model="form.titulo"
            type="text"
            placeholder="Título"
          />
        </div>
        <div class="form-group">
          <select v-model="form.status" class="custom-select">
            <option disabled value="">Status</option>
            <option value="Aberta">Aberta</option>
            <option value="Fechada">Fechada</option>
          </select>
        </div>
        <div class="form-group">
          <InputComponent
            v-model="form.valor"
            type="number"
            placeholder="Valor"
          />
        </div>
        <div class="form-group">
          <label for="dataInicio">Data de Início</label>
          <InputComponent
            id="dataInicio"
            v-model="form.dataInicio"
            type="date"
            placeholder="dd/mm/aaaa"
          />
        </div>
        <div class="form-group">
          <label for="dataTermino">Data de Término</label>
          <InputComponent
            id="dataTermino"
            v-model="form.dataTermino"
            type="date"
            placeholder="dd/mm/aaaa"
          />
        </div>
        <div class="form-group">
          <select v-model="form.tipoVaga" class="custom-select">
            <option disabled value="">Tipo de Vaga</option>
            <option value="1">Estágio</option>
            <option value="2">Iniciação Científica</option>
            <option value="3">Iniciação à Docência</option>
            <option value="4">TCC</option>
            <option value="5">Projeto de Extensão</option>
          </select>
        </div>
        <div class="form-group descricao">
          <textarea
            v-model="form.descricao"
            placeholder="Descrição"
            class="custom-textarea"
          ></textarea>
        </div>
        <div class="form-group requisitos">
          <textarea
            v-model="form.requisitos"
            placeholder="Requisitos"
            class="custom-textarea"
          ></textarea>
        </div>
        <div class="button-container">
          <ButtonComponent btnClass="custom-button" btnType="submit">
            Finalizar
          </ButtonComponent>
        </div>
      </form>
      <div v-if="formErrors.length > 0" class="validation-message-container">
        <ul>
          <li v-for="error in formErrors" :key="error">{{ error }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import InputComponent from '../components/InputComponent.vue';
  import ButtonComponent from '../components/ButtonComponent.vue';
  import { updateVacancy, postVacancy } from '@/services/vacancies';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const props = defineProps(['vacancy', 'professorID']);


  const form = ref({
    titulo: '',
    status: '',
    valor: '',
    dataInicio: '',
    dataTermino: '',
    tipoVaga: '',
    descricao: '',
    requisitos: ''
  });


  const formErrors = ref([]);

  onMounted(async () => {
    console.log(props.vacancy);
    console.log(props.professorID);

    if (props.vacancy) {
      console.log(props.vacancy);
      form.value.valor = props.vacancy.value;
      form.value.dataInicio = props.vacancy.startDate;
      form.value.dataTermino = props.vacancy.endDate;
      form.value.requisitos = props.vacancy.requirements;
      form.value.descricao = props.vacancy.description;
      form.value.titulo = props.vacancy.projectTitle;
      form.value.status = props.vacancy.status;
      form.value.tipoVaga = props.vacancy.vacancyTypeID
    }

    console.log(form.value);
  });

  const validateForm = () => {
    const errors = [];

    if (!form.value.titulo) {
      errors.push("O campo 'Título' é obrigatório.");
    } else if (form.value.titulo.length < 10) {
      errors.push("O campo 'Título' deve ter no mínimo 10 caracteres.");
    }

    if (!form.value.valor) {
      form.value.valor = 0;
    } if (form.value.valor < 0) {
      errors.push("O campo 'Valor' não pode ser negativo.");
    }

    if (!form.value.dataInicio) {
      errors.push("O campo 'Data de Início' é obrigatório.");
    }

    if (!form.value.dataTermino) {
      errors.push("O campo 'Data de Término' é obrigatório.");
    } else if (new Date(form.value.dataTermino) <= new Date(form.value.dataInicio)) {
      errors.push("A 'Data de Término' deve ser maior que a 'Data de Início'.");
    }

    if (!form.value.status) {
      errors.push("Selecione um 'Status' para a vaga.");
    }

    if (!form.value.tipoVaga) {
      errors.push("Selecione um 'Tipo de Vaga' para a vaga.");
    }

    return errors;
  };

  const submitForm = () => {
    formErrors.value = validateForm();

    if (formErrors.value.length === 0) {
      formErrors.value = [];
      console.log(form.value);
      addVacancy();
    } else {
      console.log(formErrors.value);
    }
  };

  const addVacancy = async () => {
    const vacancyPost = {
      value: form.value.valor,
      startDate: form.value.dataInicio,
      endDate: form.value.dataTermino,
      requirements: form.value.requisitos,
      description: form.value.descricao,
      projectTitle: form.value.titulo,
      status: form.value.status,
      professorID: props.professorID,
      vacancyTypeID: form.value.tipoVaga
    }

    const token = localStorage.getItem('token');

    if (props.vacancy){
      try {
        vacancyPost.vacancyID = props.vacancy.vacancyID;
        const response = await updateVacancy(props.vacancy.vacancyID, vacancyPost, token);
        console.log(response);
      } catch (error) {
        console.log(error); 
      }
    } else {
      try {
        const response = await postVacancy(vacancyPost, props.professorID, token);
        console.log(response);
      } catch (error) {
        console.log(error); 
      }
    }
    console.log("Vaga adicionada com sucesso!");
    router.push({ name: 'professor-profile', params: { id: props.professorID} });
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

.custom-select,
.custom-textarea,
input {
  width: 360px;
  padding: 12px;
  border: 1px solid #000;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
}

.custom-select::placeholder,
.custom-textarea::placeholder,
input::placeholder {
  font-family: 'Arial', sans-serif;
  font-size: 16px;
}

textarea {
  resize: vertical;
}

.descricao textarea, .requisitos textarea {
  width: 100%;
  height: calc(100% + 15px); 
}

.descricao {
  grid-area: descricao;
}

.requisitos {
  grid-area: requisitos; 
}

.button-container {
  grid-area: button;
  display: flex;
  justify-content: center;
}

.custom-button {
  padding: 10px 20px; 
  background-color: #F0E63A;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
}

.custom-button:hover {
  background-color: #F0D400;
}

label {
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  margin-bottom: 5px;
}
</style>
