<script>
    import { vacancyList } from '../environment/vacancyList.js'
    import VacancyItem from '@/components/VacancyItemComponent.vue'
    export default {
        data(){
            return {
                name: 'Everaldina Guimarães',
                email: 'egbarbosa.cic@uesc.br',
                vacancies: vacancyList,
            }
        },
        props: {
            professorMode: {
                type: Boolean,
                default: false
            }
        },
        components: {
            VacancyItem
        },
        methods: {
            toVancancies(){
                this.$router.push('/vacancy-list')
            },
            cancelVacancy(vacancyID){
                if (confirm("Deseja mesmo se desinscrever da vaga?")) {
                    console.log("Continuar");
                } else {
                    console.log("Cancelar");
                }
            },
            addVancacy(){
                console.log("Adicionar vaga")
            }
        },
        mounted(){
            console.log(this.vacancies)
        }
    }
</script>

<template>
    <div class="profile-wrapper">
        <div class="profile-header">
            <img src="../assets/imgs/profile/profile0.jpg" alt="Profile Picture" class="profile-picture">
            <div class="profile-info">
                <p class="heading-secondary">Olá! {{ name }}</p>
                <p>
                    {{ email }}
                    <RouterLink 
                        :to="{ 
                            name: 'profile-edit', 
                            params: { id: $route.params.id },
                            query: { mode: 'editProfessor', user: JSON.stringify({ Login: 'teste@teste.com' }) }
                        }" 
                        class="edit-link"
                    >
                        <font-awesome-icon icon="pen-to-square" style="color: var(--color-variant-background);" />
                    </RouterLink>
                </p>
            </div>
        </div>
        <div class="profile-container">
            <div class="profile-content">
                <template v-if="vacancies.length == 0">
                    <p>Você não está inscrito em nenhuma vaga!</p>
                    <button :click="toVancancies">Ver vagas</button>
                </template>
                <template v-else>
                    <template v-if="professorMode">
                        <div class="add-container">
                            <div class="add-button heading-quaternary" @click="addVancacy()"> 
                                <span>adicionar</span>
                                <font-awesome-icon icon="fa-solid fa-square-plus" class="fa-xl" style="color: var(--color-green)" />
                            </div>
                        </div>
                    </template>
                    <div class="vacancy-list">
                        <div class="vacancy-container" v-for="vacancy in vacancies" :key="vacancy.vacancyID">
                            <template v-if="!professorMode">
                                <div class="cancel-container">
                                    <font-awesome-icon 
                                        class="fa-3x cancel-button" 
                                        :icon="['fas', 'rectangle-xmark']" 
                                        :style = "{ color: 'var(--color-cancel)' }"
                                        @click="cancelVacancy(vacancy.vacancyID)"
                                    />
                                </div>
                            </template>
                            <div class="vacancy-item">
                                <VacancyItem :vacancy="vacancy"/>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .profile-container {
        background-color: var(--color-white);
        border: 5px solid var(--color-secondary-hover);
        border-radius: 10px;
        padding: 40px 50px;
        text-align: center;
        position: relative;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .profile-wrapper {
        margin: 150px auto 100px auto;
        width: 80%;
        max-width: 900px;
        position: relative;
    }

    .profile-header {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        margin-bottom: 20px;
        position: absolute;
        top: -90px; /**/ 
        left: 8%;
        z-index: 1;
    }

    .profile-picture {
        border-radius: 50%;
        width: 120px;
        height: 120px;
        margin-right: 20px;
        border: 3px solid var(--color-secondary-hover);
    }

    .profile-info{
        text-align: left;
        margin-top: 10px;
    }
    
    .profile-info p {
        color: var(--color-variant-background) !important;
        margin: 5px 0 0 0;
        word-wrap: break-word;
    }

    .edit-link {
        margin-left: 10px;
    }

    .profile-content p {
        font-size: 18px;
        color: #333;
        margin-bottom: 20px;
    }

    .profile-content{
        width: 100%;
    }

    .vacancy-list {
        max-height: 400px; /* Defina a altura máxima para a lista de vagas */
        overflow-y: auto; /* Permite scroll vertical se o conteúdo exceder a altura máxima */
        padding: 0 5px; /* Adiciona espaçamento interno */
    }

    .vacancy-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .cancel-container {
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: center;
    }

    .vacancy-item{
        flex: 7;
    }

    .cancel-button{
        cursor: pointer;
    }

    .cancel-icon:hover {
        transform: scale(1.1);
    }

    .add-button {
       color: var(--color-green);
       background-color: var(--color-green-soft);
       border-radius: 8px;
       padding: 4px;
       width: 110px;
    }
    .add-button:hover {
        cursor: pointer;
    }

    .add-button span {
        margin-right: 10px;
    }

    .add-container {
        display: flex;
        justify-content: flex-end;
        margin: 10px 0;
    }

</style>