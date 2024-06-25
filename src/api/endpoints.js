import { createFetchRequest } from './httpClient';

const BASE_URL = 'http://localhost:5057';

export const getVacancies = async () => {
  try {
    return await createFetchRequest(`${BASE_URL}/vacancies`);
  } catch (error) {
    console.error('Erro ao buscar vagas:', error);
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