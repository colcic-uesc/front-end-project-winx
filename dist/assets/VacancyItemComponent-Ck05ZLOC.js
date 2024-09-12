import{g as u}from"./professors-BNZYAvCQ.js";import{b as p}from"./vacancies-L-RnlYzh.js";import{s as h,u as v}from"./students-Dmmjq8w4.js";import{_ as m,j as f,o as r,c as i,a as t,t as c,x as d,f as _,A as b,p as V,g as M}from"./index-DDnPH6aG.js";const g={data(){return{professor:null,vacancyType:null}},props:{vacancy:{type:Object,required:!0},templateMode:{type:String,default:"viewMode"},ownedVacancy:{type:Boolean,default:!1}},methods:{handleClick(){if(this.templateMode==="professorMode"&&this.ownedVacancy)this.editVacancy();else if(this.templateMode==="studentMode"){const e=localStorage.getItem("token"),s=f(e);this.ownedVacancy?this.unsubscribeVacancy(s,e):this.applyVacancy(s,e)}},applyVacancy(e,s){try{const a=h(e,this.vacancy.vacancyID,s);console.log(a),this.$emit("applied")}catch(a){console.error(a)}},unsubscribeVacancy(e,s){try{const a=v(e,this.vacancy.vacancyID,s);console.log(a),this.$emit("unsubscribed")}catch(a){console.error(a)}},editVacancy(){this.$router.push({name:"edit-vacancy",params:{id:this.vacancy.vacancyID}})},buttonMessage(){return this.templateMode==="studentMode"?this.ownedVacancy?"Retirar Interesse":"Tenho Interesse":this.templateMode==="professorMode"?"Editar Vaga":"Tenho Interesse"}},computed:{numbertoRS(){return`R$ ${this.vacancy.value.toFixed(2).toLocaleString()}`}},async mounted(){try{const e=await u(this.vacancy.professorID);e&&(this.professor=e)}catch(e){console.error(e)}try{const e=await p(this.vacancy.vacancyTypeID);e&&(this.vacancyType=e)}catch(e){console.error(e)}}},l=e=>(V("data-v-bf495879"),e=e(),M(),e),I={class:"vacancy-item"},k={key:0,class:"tag available"},T={key:1,class:"tag unavailable"},S={class:"vacancy-details"},w={class:"vacancy-text"},D={class:"salary"},x=l(()=>t("strong",null,"Descrição: ",-1)),R=l(()=>t("strong",null,"Requisitos: ",-1)),C={key:0,class:"author"},A=["disabled"];function B(e,s,a,j,o,n){return r(),i("div",I,[a.vacancy.status==="Aberta"?(r(),i("div",k," Disponível ")):(r(),i("div",T," Indisponível ")),t("div",S,[t("div",w,[t("span",D,c(n.numbertoRS),1),t("h3",null,c(a.vacancy.projectTitle),1),t("p",null,[x,d(c(a.vacancy.description),1)]),t("p",null,[R,d(c(a.vacancy.requirements),1)]),o.professor&&o.vacancyType?(r(),i("p",C,c(o.professor.name)+" - "+c(o.vacancyType.name),1)):_("",!0)]),t("div",{class:b(["interest-button",{disabled:a.templateMode==="professorMode"&&!a.ownedVacancy||a.templateMode!=="professorMode"&&a.vacancy.status!=="Aberta"}])},[t("button",{onClick:s[0]||(s[0]=(...y)=>n.handleClick&&n.handleClick(...y)),disabled:a.templateMode==="professorMode"&&!a.ownedVacancy||a.templateMode!=="professorMode"&&a.vacancy.status!=="Aberta"},c(n.buttonMessage()),9,A)],2)])])}const z=m(g,[["render",B],["__scopeId","data-v-bf495879"]]);export{z as V};
