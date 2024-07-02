import { BASE_URL } from "./connectCIC_Endpoint";
import { createFetchRequest } from "./httpClient";

export const authUser = async (userData) => {
    try {
      return await createFetchRequest(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
    } catch (error) {
      console.error('Erro ao autenticar usuário:', error);
      throw error;
    }
};


export const getStudentUser = async (studentId, token) => {
    try {
      return await createFetchRequest(`${BASE_URL}/users/students/${studentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error('Erro ao buscar aluno:', error);
      throw error;
    }
};

export const postStudentUser = async (studentData) => {
    try {
      return await createFetchRequest(`${BASE_URL}/users/students`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
      });
    } catch (error) {
      console.error('Erro ao usuario: ', error);
      throw error;
    }
};

export const getProfessorUser = async (professorId, token) => {
    try {
      return await createFetchRequest(`${BASE_URL}/users/professors/${professorId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error('Erro ao buscar professor:', error);
      throw error;
    }
};

export const postProfessorUser = async (professorData) => {
    try {
      return await createFetchRequest(`${BASE_URL}/users/professors`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(professorData),
      });
    } catch (error) {
      console.error('Erro ao usuario: ', error);
      throw error;
    }
};


