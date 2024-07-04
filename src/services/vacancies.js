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

  export const getSubscribedStudents = async (vacancyId, token) => {
    try {
      return await createFetchRequest(`${BASE_URL}/vacancies/${vacancyId}/students`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    catch (error) {
      console.error('Erro ao buscar estudantes inscritos:', error);
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
  
  export const postVacancy = async (vacancy, professorID, token) => {
    try {
      return await createFetchRequest(`${BASE_URL}/professors/${professorID}/vacancies`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify(vacancy),
        }
      );
    } catch (error) {
      console.error('Erro ao cadastrar vaga:', error);
      throw error;
    }
  };

  export const updateVacancy = async (vacancyId, vacancy, token) => {
    try {
      return await createFetchRequest(`${BASE_URL}/vacancies/${vacancyId}`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify(vacancy),
        }
      );
    } catch (error) {
      console.error('Erro ao atualizar vaga:', error);
      throw error;
    }
  };

  export const deleteVacancy = async (vacancyId, token) => {
    try {
      return await createFetchRequest(`${BASE_URL}/vacancies/${vacancyId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    }catch (error) {
      console.error('Erro ao deletar vaga:', error);
      throw error;
    }
  };