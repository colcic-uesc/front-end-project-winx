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

export const getVacancyType = async (vacancyTypeId) => {
  try {
    return await createFetchRequest(`${BASE_URL}/vacancy-types/${vacancyTypeId}`);
  } catch (error) {
    console.error('Erro ao buscar vaga:', error);
    throw error;
  }
};

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

export const getProfessor = async (professorId) => {
  try {
    return await createFetchRequest(`${BASE_URL}/professors/${professorId}`);
  } catch (error) {
    console.error('Erro ao buscar professor:', error);
    throw error;
  }
}

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