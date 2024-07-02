import { jwtDecode } from 'jwt-decode';

export const getClaimFromToken = (token, claim) => {
    try {
        // Decodifica o token JWT
        const decodedToken = jwtDecode(token);
    
        // Retorna a claim específica
        return decodedToken[claim];
      } catch (error) {
        console.error("Erro ao decodificar o token JWT:", error);
        return null;
      }
};