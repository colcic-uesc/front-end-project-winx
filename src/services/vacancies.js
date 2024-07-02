import { BASE_URL } from "./connectCIC_Endpoint";
import { createFetchRequest } from "./httpClient";

export const getVacancies = async () => {
    try {
      return await createFetchRequest(`${BASE_URL}/vacancies`);
    } catch (error) {
      console.error('Erro ao buscar vagas:', error);
      throw error;
    }
  };
  
  export const getVacancy = async (vacancyId) => {
    try {
      return await createFetchRequest(`${BASE_URL}/vacancies/${vacancyId}`);
    }
    catch (error) {
      console.error('Erro ao buscar vaga:', error);
      throw error;
    }
  };
  
  export const getVacancyTypes = async () => {
    try {
      return await createFetchRequest(`${BASE_URL}/vacancy-types`);
    } catch (error) {
      console.error('Erro ao buscar vagas:', error);
      throw error;
    }
  };
  
  export const getVacancyType = async (vacancyTypeId) => {
    try {
      return await createFetchRequest(`${BASE_URL}/vacancy-types/${vacancyTypeId}`);
    } catch (error) {
      console.error('Erro ao buscar vaga:', error);
      throw error;
    }
  };
  