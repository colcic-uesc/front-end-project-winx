export const createFetchRequest = async (url, options = {}) => {
    const defaultHeaders = {
      'Content-Type': 'application/json',
    };
  
    const config = {
      headers: { ...defaultHeaders, ...options.headers },
      ...options,
    };
  
    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error(`Erro: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Erro na requisição:', error);
      throw error;
    }
};