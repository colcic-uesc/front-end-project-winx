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
        let errorBody = '';
        try{
          const errorBody = await response.json();
        } catch (e) {
          console.warn('Erro ao ler o corpo da resposta:', e);
        }
        throw new Error(`Erro: ${response.status} ${response.statusText} - ${errorBody}`);
      }
      return response.status === 204 ? null : await response.json();
    } catch (error) {
      console.error('Erro na requisição:', error);
      throw error;
    }
};