import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react';
import { User } from '~/pages/api/signin';

interface AuthContextType {
  user: User | null;
  token: string | null;
}

interface AuthActionsType {
  setUser: (user: User) => void;
  clearUser: () => void;
  setToken: (token: string) => void;
  clearToken: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);
const AuthActionsContext = createContext<AuthActionsType | null>(null);

export function useAuthState() {
  const values = useContext(AuthContext) as AuthContextType;
  return values;
}

export function useAuthActions() {
  const actions = useContext(AuthActionsContext) as AuthActionsType;
  return {
    ...actions,
  };
}

export default function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const state = {
    user,
    token,
  };
  const actions = useMemo(
    () => ({
      setUser,
      clearUser() {
        setUser(null);
      },
      setToken,
      clearToken() {
        setToken(null);
      },
    }),
    [],
  );
  return (
    <AuthActionsContext.Provider value={actions}>
      <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
    </AuthActionsContext.Provider>
  );
}
