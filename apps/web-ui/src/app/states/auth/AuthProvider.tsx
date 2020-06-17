import React, { useState, useEffect, useCallback } from 'react';
import { AuthContext } from './AuthContext';

const localStorageToken = localStorage.getItem('token');

const AuthProvider: React.FC = ({ children }) => {
  const [token, setStateToken] = useState<string | null>(
    localStorageToken ?? null
  );

  const setToken = useCallback(
    (token: string) => {
      if (token && token.length > 0) {
        localStorage.setItem('token', token);
      } else {
        localStorage.clear();
      }
      setStateToken(token);
      return token;
    },
    [setStateToken]
  );

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
