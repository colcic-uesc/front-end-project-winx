import { jwtDecode } from 'jwt-decode';

export const getClaimFromToken = (token, claim) => {
    if (!token) return null;
    
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

export const getIdFromToken = (token) => {
    return getClaimFromToken(token, 'id');
};


export const getRoleFromToken = (token) => {
    return getClaimFromToken(token, 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role');
};

export const getExpirationDateFromToken = (token) => {
    if (getClaimFromToken(token, 'exp') === null) 
      return null;
    else 
      return new Date(getClaimFromToken(token, 'exp') * 1000);
};

