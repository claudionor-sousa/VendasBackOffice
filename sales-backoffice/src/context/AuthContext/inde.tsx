import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAlertContext } from '../AlertContext';


interface AuthContextReturnType {
  authenticated: boolean;
  login: (userName: string, password: string) => Promise<any>;
  logout: () => void;
  user: { name: string; email: string; picture: string | null };
}

const AuthContext = createContext({} as AuthContextReturnType);

export function AuthContextProvider({ children }: React.PropsWithChildren<any>) {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<{ name: string; email: string, picture: string | null }>({ name: '', email: '', picture: '' });
  const { showAlert } = useAlertContext();
  const navigate = useNavigate();

  const logout = useCallback(() => {
    showAlert('success','deslogado com sucesso!')
    navigate('/login');
    setAuthenticated(false);
    setUser({ name: '', email: '', picture: '' }); 
  }, []);

  const login = useCallback(
    async (userName: string, password: string) => {
      if(userName === 'claudionor@pca.com.br' && password ==='123'){
        setUser({ name: 'claudionor', email: 'claudionor@pca.com.br', picture: null });
        setAuthenticated(true);
        navigate('/dashboard');
        showAlert('success','Login Realizado com sucesso!')
      } 
      else{
        setAuthenticated(false)
        showAlert('warning','credenciais inválidas')
      } 
    },
    []
  );
  

  const providerValues = useMemo<AuthContextReturnType>(
    () => ({  login,logout, user,authenticated }),
    [authenticated, logout,login, user, ],
  );

  return <AuthContext.Provider value={providerValues}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }

  return context;
};
