import{_ as z,u as L,l as q,r as c,b as D,o as m,c as S,a as l,t as U,k as t,n as g,s as h,w as $,y as Z,f as w,q as R,x as I,m as E,F as G,d as H,p as J,g as K,j as Q,i as W,e as T}from"./index-DDnPH6aG.js";import{I as b,B as x}from"./ButtonComponent-ClYkf8Gc.js";import{p as X,a as Y}from"./students-Dmmjq8w4.js";import{p as ee,a as F,b as oe,g as se,c as ae}from"./users-Dxwfu_ww.js";import{p as te,g as le}from"./professors-BNZYAvCQ.js";import"./httpClient-CwG61txm.js";const P=f=>(J("data-v-a547741a"),f=f(),K(),f),ne={class:"signup-container"},ue={key:0,class:"signup-content"},re={class:"input-group"},ie={class:"input-group"},ce={key:0,class:"input-group"},de=P(()=>l("option",{disabled:"",value:""},"Selecione um tipo de usuário",-1)),pe=P(()=>l("option",{value:"Professor"},"Professor",-1)),ve=P(()=>l("option",{value:"Student"},"Aluno",-1)),me=[de,pe,ve],fe={key:1,class:"signup-content"},ge=P(()=>l("h1",null,"Dados pessoais",-1)),he={class:"input-group"},ye={class:"input-group"},_e={class:"input-group"},Ve={key:2,class:"signup-content"},Se=P(()=>l("h1",null," Dados pessoais ",-1)),be={class:"input-group"},ke={class:"input-group"},we={class:"input-group"},Pe={class:"input-group"},Ce={key:3},Ue={key:1},Re={__name:"UserFormComponent",props:{user:{type:Object,default:null},professor:{type:Object,default:null},student:{type:Object,default:null}},setup(f){const C=L();q();const n=f,i=c(""),d=c(""),p=c(""),y=c(0),u=c(""),r=c(""),v=c(""),_=c(""),k=c(""),a=c("");c(null);const B=s=>{const e=[];return s?(s.length<6&&e.push("O campo 'Password' deve ter no mínimo 6 caracteres."),s.length>16&&e.push("Sua senha não pode exceder 16 caracteres."),/[A-Z]/.test(s)||e.push("Sua senha deve ter pelo menos uma letra maiúscula."),/[a-z]/.test(s)||e.push("Sua senha deve ter pelo menos uma letra minúscula."),/[0-9]/.test(s)||e.push("Sua senha deve ter pelo menos um número.")):e.push("O campo 'Password' é obrigatório."),e},O=()=>{const s=B(d.value);console.log(s),i.value&&s.length===0&&p.value?(console.log("Email:",i.value),console.log("Password:",d.value),console.log("User:",p.value),p.value=="Professor"||n.professor?y.value=1:y.value=2,a.value=""):i.value?s.length>0?a.value=s:p.value||(a.value="Por favor, selecione um tipo de usuário."):a.value="Por favor, preencha o campo Email."},M=async()=>{if(u.value&&N(r.value)&&v.value){if(u.value.length<6){a.value=["O nome deve conter no minimo 6 caracteres"];return}a.value=["Cadrastrando professor..."];let s;try{s=(await te({Name:u.value,Email:r.value,Department:v.value})).professorID,console.log(s)}catch{a.value=["Erro ao cadastrar professor. Tente novamente mais tarde."];return}try{const V=await ee({Login:i.value,Password:d.value,ProfessorId:s});console.log(V)}catch{a.value=["Erro ao cadastrar usuário. Tente novamente mais tarde."];return}const o=(await F({login:i.value,password:d.value})).token;localStorage.setItem("token",o),console.log(o),setTimeout(()=>{a.value=["Professor cadastrado com sucesso! Redirecionando..."],setTimeout(()=>{C.push({name:"professor-profile",params:{id:s}})},1e3)},2e3)}else a.value=["Por favor, preencha todos os campos corretamente."]},j=async()=>{if(u.value&&N(r.value)&&k.value){if(u.value.length<6){a.value=["O nome deve conter no minimo 6 caracteres"];return}if(_.value||(_.value=0),_.value<0){a.value=["CRAA não pode ser negativo."];return}else if(_.value>10){a.value=["CRAA não pode ser maior que 10."];return}else{console.log("Name:",u.value),console.log("ContactEmail:",r.value),console.log("Craa:",_.value),console.log("Course:",k.value),a.value=["Cadrastrando aluno..."];let s;try{s=(await X({Name:u.value,Email:r.value,CRAA:_.value,Course:k.value,Status:"Cursando"})).studentID}catch{a.value=["Erro ao cadastrar aluno. Tente novamente mais tarde."];return}try{const V=await oe({Login:i.value,Password:d.value,StudentId:s});console.log(V)}catch{a.value=["Erro ao cadastrar usuário. Tente novamente mais tarde."];return}const o=(await F({login:i.value,password:d.value})).token;localStorage.setItem("token",o),console.log(o),setTimeout(()=>{a.value=["Aluno cadastrado com sucesso! Redirecionando..."],setTimeout(()=>{C.push({name:"student-profile",params:{id:s}})},1e3)},2e3)}}else a.value=["Por favor, preencha todos os campos corretamente."]},N=s=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);return D(()=>{n.user&&(i.value=n.user.login,d.value="",n.professor?(console.log("Professor:",n.professor),u.value=n.professor.name,r.value=n.professor.email,v.value=n.professor.department,p.value="Professor"):n.student&&(u.value=n.student.name,r.value=n.student.email,_.value=n.student.craa,k.value=n.student.course,p.value="Student"))}),(s,e)=>(m(),S("div",ne,[y.value==0?(m(),S("div",ue,[l("h1",null,U(f.user?"Novas credenciais":"Crie sua conta"),1),l("form",{onSubmit:E(O,["prevent"])},[l("div",re,[t(g(h),{icon:"envelope",class:"icon"}),t(b,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=o=>i.value=o),type:"email",placeholder:"Email"},null,8,["modelValue"])]),l("div",ie,[t(g(h),{icon:"lock",class:"icon"}),t(b,{modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=o=>d.value=o),type:"password",placeholder:"Senha"},null,8,["modelValue"])]),f.user?w("",!0):(m(),S("div",ce,[t(g(h),{icon:"user",class:"icon"}),$(l("select",{"onUpdate:modelValue":e[2]||(e[2]=o=>p.value=o),class:"select-input"},me,512),[[Z,p.value]])])),t(x,{btnClass:"signup-button",btnType:"submit"},{default:R(()=>[I(U(f.user?"Continuar":"Cadastrar"),1)]),_:1})],32)])):w("",!0),y.value==1?(m(),S("div",fe,[ge,l("form",{onSubmit:E(M,["prevent"])},[l("div",he,[t(g(h),{icon:"user",class:"icon"}),t(b,{modelValue:u.value,"onUpdate:modelValue":e[3]||(e[3]=o=>u.value=o),type:"text",placeholder:"Nome"},null,8,["modelValue"])]),l("div",ye,[t(g(h),{icon:"envelope",class:"icon"}),t(b,{modelValue:r.value,"onUpdate:modelValue":e[4]||(e[4]=o=>r.value=o),type:"email",placeholder:"Email de contato"},null,8,["modelValue"])]),l("div",_e,[t(g(h),{icon:"sitemap",class:"icon"}),t(b,{modelValue:v.value,"onUpdate:modelValue":e[5]||(e[5]=o=>v.value=o),type:"text",placeholder:"Departamento"},null,8,["modelValue"])]),t(x,{btnClass:"signup-button",btnType:"submit"},{default:R(()=>[I(" Finalizar ")]),_:1})],32)])):w("",!0),y.value==2?(m(),S("div",Ve,[Se,l("form",{onSubmit:E(j,["prevent"])},[l("div",be,[t(g(h),{icon:"user",class:"icon"}),t(b,{modelValue:u.value,"onUpdate:modelValue":e[6]||(e[6]=o=>u.value=o),type:"text",placeholder:"Nome"},null,8,["modelValue"])]),l("div",ke,[t(g(h),{icon:"envelope",class:"icon"}),t(b,{modelValue:r.value,"onUpdate:modelValue":e[7]||(e[7]=o=>r.value=o),type:"email",placeholder:"Email de contato"},null,8,["modelValue"])]),l("div",we,[t(g(h),{icon:"award",class:"icon"}),t(b,{modelValue:_.value,"onUpdate:modelValue":e[8]||(e[8]=o=>_.value=o),type:"number",placeholder:"CRAA"},null,8,["modelValue"])]),l("div",Pe,[t(g(h),{icon:"graduation-cap",class:"icon"}),t(b,{modelValue:k.value,"onUpdate:modelValue":e[9]||(e[9]=o=>k.value=o),type:"text",placeholder:"Curso"},null,8,["modelValue"])]),t(x,{btnClass:"signup-button",btnType:"submit"},{default:R(()=>[I("Finalizar")]),_:1})],32)])):w("",!0),a.value?(m(),S("div",Ce,[l("ul",null,[Array.isArray(a.value)?(m(!0),S(G,{key:0},H(a.value,o=>(m(),S("li",{key:o},U(o),1))),128)):(m(),S("li",Ue,U(a.value),1))])])):w("",!0)]))}},A=z(Re,[["__scopeId","data-v-a547741a"]]),Fe={__name:"UserView",props:{signUpMode:{type:Boolean,default:!0}},setup(f){const C=f,n=localStorage.getItem("token"),i=c(null),d=c(null),p=c(null),y=c(!0);return D(async()=>{if(!C.signUpMode){const u=Q(n),r=W(n);if(r==="Professor")try{i.value=await se(u,n)}catch(v){console.error(v)}else if(r==="Student")try{i.value=await ae(u,n)}catch(v){console.error(v)}if(console.log(i.value),r==="Professor")try{d.value=await le(u),console.log(d.value)}catch(v){console.error(v)}else if(r==="Student")try{p.value=await Y(u,n),console.log(p.value)}catch(v){console.error(v)}y.value=!1}}),(u,r)=>f.signUpMode?(m(),T(A,{key:0})):d.value&&!y.value?(m(),T(A,{key:1,user:i.value,professor:d.value},null,8,["user","professor"])):p.value&&!y.value?(m(),T(A,{key:2,user:i.value,student:p.value},null,8,["user","student"])):w("",!0)}};export{Fe as default};
