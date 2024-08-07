import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core';
import {    
            faRightFromBracket, 
            faHome, 
            faUser, 
            faBriefcase,
            faPenToSquare, 
            faRectangleXmark, 
            faSquarePlus, 
            faEnvelope, 
            faLock, 
            faSitemap, 
            faAward, 
            faGraduationCap 
        } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


library.add(
                faRightFromBracket,
                faHome, 
                faUser, 
                faBriefcase, 
                faPenToSquare, 
                faRectangleXmark, 
                faSquarePlus, 
                faEnvelope, faLock, 
                faSitemap, 
                faAward, 
                faGraduationCap
            );

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router)

app.mount('#app')



