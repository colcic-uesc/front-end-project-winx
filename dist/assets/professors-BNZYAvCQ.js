import{c as s,B as a}from"./httpClient-CwG61txm.js";const t=async o=>{try{return await s(`${a}/professors/${o}`)}catch(r){throw console.error("Erro ao buscar professor:",r),r}},c=async o=>{try{return await s(`${a}/professors`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})}catch(r){throw console.error("Erro ao cadastrar professor:",r),r}},n=async o=>{try{return await s(`${a}/professors/${o}/vacancies`)}catch(r){throw console.error("Erro ao buscar vagas do professor:",r),r}};export{n as a,t as g,c as p};