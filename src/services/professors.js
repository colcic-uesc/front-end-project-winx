import { BASE_URL } from "./connectCIC_Endpoint";
import { createFetchRequest } from "./httpClient";


export const getProfessor = async (professorId) => {
    try {
    return await createFetchRequest(`${BASE_URL}/professors/${professorId}`);
    } catch (error) {
    console.error('Erro ao buscar professor:', error);
    throw error;
    }
};

export const postProfessor = async (professortData) => {
    try {
      return await createFetchRequest(`${BASE_URL}/professors`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(professortData),
      });
    } catch (error) {
      console.error('Erro ao cadastrar professor:', error);
      throw error;
    }
};


export const getProfessorVacancies = async (professorId) => {
    try {
      return await createFetchRequest(`${BASE_URL}/professors/${professorId}/vacancies`);
    } catch (error) {
      console.error('Erro ao buscar vagas do professor:', error);
      throw error;
    }
};