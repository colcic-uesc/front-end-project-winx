<script>
    import { getProfessor, getProfessorVacancies } from '../services/professors';
    import VacancyItem from '@/components/VacancyItemComponent.vue';
    import { getStudent, getStudentVacancies } from '../services/students';
    import { getRoleFromToken, getIdFromToken, getExpirationDateFromToken } from '@/utils/jwtDecoder';

    export default {
        data(){
            return {
                name: '',
                email: '',
                vacancies: {},
                token: null,
                tokenId: null,
                role: null
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
                this.$router.push({ name: 'create-vacancy' });
            },
            logout(){
                localStorage.removeItem('token');
                this.$router.push('/');
            },
            checkAuthorized(){
                this.token = localStorage.getItem('token');
                if (this.token) {
                    this.role = getRoleFromToken(this.token);
                    const expirationDate = getExpirationDateFromToken(this.token);
                    if (expirationDate < new Date()) {
                        localStorage.removeItem('token');
                        router.push('/login');
                    } else {
                        if ((this.role === "Professor" && !this.professorMode) || (this.role === "Student" && this.professorMode) || (this.role === "Student" && this.role === "Professor")){
                            router.push('/login');
                        }
                    } 
                } else {
                router.push('/login');
                }
            }
        },
        async mounted(){
            let profileResponse, vacancyResponse;
            this.checkAuthorized();

            if (this.token){            
                try{
                    if (this.professorMode)
                        profileResponse = await getProfessor(this.$route.params.id);
                    else 
                        profileResponse = await getStudent(this.$route.params.id, this.token);

                    this.name = profileResponse.name;
                    this.email = profileResponse.email;
                }catch(e){
                    console.error(e);
                    this.$router.push('/');
                }

                try{
                    if (this.professorMode)
                        vacancyResponse = await getProfessorVacancies(this.$route.params.id);
                    else
                        vacancyResponse = await getStudentVacancies(this.$route.params.id, this.token);

                    this.vacancies = vacancyResponse;
                }catch(e){
                    console.error(e);
                    this.$router.push('/');
                }
            } 
            else{
                this.$router.push('/login');
            } 
        }
    }
</script>

<template>
    <div class="profile-wrapper">
        <div class="profile-header">
            <img src="../assets/imgs/profile/profile0.jpg" alt="Profile Picture" class="profile-picture">
            <div class="profile-info">
                <p class="heading-secondary">Olá! {{ name }}</p>
                <div class="container">
                    <p>
                        {{ email }}
                    </p>
                    <div class="profile-options">
                        <RouterLink 
                            :to="{ 
                                name: professorMode ? 'professor-profile-edit' : 'student-profile-edit',
                                params: { id: $route.params.id } 
                            }"
                            class="edit-link"
                        >
                            <font-awesome-icon icon="pen-to-square" style="color: var(--color-variant-background);" /> 
                            Editar
                        </RouterLink>
                        <div class="logout" @click="logout">
                            <font-awesome-icon icon="right-from-bracket" style="color: var(--color-variant-background);" />
                            Sair
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        <div class="profile-container">
            <div class="profile-content">
                <template v-if="vacancies.length == 0">
                    <p>Você não possui nenhuma vaga!</p>
                    <button v-if="professorMode" class="vacancy-button heading-quaternary" @click="addVancacy">Adiconar vaga</button>
                    <button v-else class="vacancy-button heading-quaternary" @click="toVancancies">Ver vagas</button>
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
                                <VacancyItem 
                                    :vacancy="vacancy" 
                                    :ownedVacancy = "true" 
                                    :templateMode = "professorMode? 'professorMode': 'studentMode'"
                                    @unsubscribed="vacancies = vacancies.filter(v => v.vacancyID !== vacancy.vacancyID)"   
                                />
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

    .profile-options{
        color: var(--color-variant-background);
        display: flex;
        align-items: flex-end;
        gap: 10px;
    }

    a.edit-link {
        color: var(--color-variant-background);
        text-decoration: none;
    }

    a.edit-link:hover {
        color: var(--color-variant-second-background);
    }

    a.edit-link:visited {
        color: var(--color-variant-background);
    }

    .logout {
        cursor: pointer;
    }

    .logout:hover {
        color: var(--color-variant-second-background);
    }

    .container{
        display: flex;
        gap: 10px;
    }

    .vacancy-button{
        background-color: var(--color-variant-background);
        border: none;
        color: var(--color-white);
        border-radius: 10px;
        padding: 6px 20px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

</style>