<template>
    <div class="sidebar" :class="{ collapsed: isCollapsed }" @click="toggleMenu">
         <div v-if="!isCollapsed">
           <button @click.stop="goHome" aria-label="Go Home">
             <font-awesome-icon icon="house" />
           </button>
           <button @click.stop="goProfile" aria-label="Go to Profile">
             <font-awesome-icon icon="user" />
           </button>
           <button @click.stop="goJobs" aria-label="View Jobs">
             <font-awesome-icon icon="briefcase" />
           </button>
         </div>
       </div>
   </template>
   
  
   <script>

   export default {
     name: 'Sidebar',
     data() {
       return {
         isCollapsed: false
       };
     },
     methods: {
       toggleMenu() {
         this.isCollapsed = !this.isCollapsed;
       },
       goHome() {
         this.$router.push('/home');
       },
       goProfile() {
         this.$router.push('/profile/1');
       },
       goJobs() {
         this.$router.push('/vacancy-list');
       }
     }
   }
   </script>

   <style scoped>
   .sidebar {
     height: 150px;
     width: 60px;
     display: flex;
     flex-direction: column;
     align-items: center;
     background-color: var(--color-variant-background);
     padding: 10px;
     border-radius: 0 10px 10px 0px;
     position: fixed;   
     top: 50%;          
     transform: translateY(-50%); 
     left: 0;
     z-index: 1000;     
   }
   
   .sidebar.collapsed {
     width: 20px;
   }
   
   .sidebar button {
     cursor: pointer;
     text-align: center;
     background: none;
     border: none;
     font-size: 20px;
     color: var(--color-secondary-hover); /* Melhora a visibilidade dos ícones */
     height: 40px;
     width: 50px;
     margin: 5px; /* Espaçamento entre os botões */
   }
   
   </style>
   
  