import React, { createContext, useContext, useMemo, useState } from 'react';
import { User } from '../../interfaces/user';


interface UserContextReturnType {
  users: User[];
}
interface UserContextProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext({} as UserContextReturnType);

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [users, setUsers] = useState<User[]>([]);

  const providerValues = useMemo<UserContextReturnType>(
    () => ({
     users
    }),
    [users],
  );

  return <UserContext.Provider value={providerValues}>{children}</UserContext.Provider>;
}

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }

  return context;
};
