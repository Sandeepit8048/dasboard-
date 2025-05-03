import { createContext, useContext, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    const storedToken = localStorage.getItem('token');
    try {
      jwtDecode(storedToken); // validate format
      return storedToken;
    } catch {
      localStorage.removeItem('token'); // clear bad token
      return null;
    }
  });

  const user = token ? jwtDecode(token) : null;

  const login = (newToken) => {
    try {
      jwtDecode(newToken); // Validate before saving
      setToken(newToken);
      localStorage.setItem('token', newToken);
    } catch (err) {
      console.error('Invalid token:', err);
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
