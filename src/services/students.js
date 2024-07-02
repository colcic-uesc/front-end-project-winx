import { BASE_URL } from "./connectCIC_Endpoint";
import { createFetchRequest } from "./httpClient";


export const getStudent = async (studentId, token) => {
    try {
      return await createFetchRequest(`${BASE_URL}/students/${studentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error('Erro ao buscar aluno:', error);
      throw error;
    }
};

export const postStudent = async (studentData) => {
    try {
      return await createFetchRequest(`${BASE_URL}/students`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
      });
    } catch (error) {
      console.error('Erro ao cadastrar aluno:', error);
      throw error;
    }
};

export const getStudentVacancies = async (studentId, token) => {
    try {
      return await createFetchRequest(`${BASE_URL}/students/${studentId}/vacancies`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error('Erro ao buscar vagas do aluno:', error);
      throw error;
    }
};