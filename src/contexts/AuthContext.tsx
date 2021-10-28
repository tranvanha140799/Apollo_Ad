import { ReactNode, createContext, useState, useContext } from 'react';

interface ContextProviderProps {
  authenticated: boolean;
  children: ReactNode;
}

interface ContextProps {
  isAuthenticated: boolean;
  setAuthenticated: (auth: boolean) => void;
}

export const AuthContext = createContext<ContextProps | undefined>(undefined);

export const AuthProvider = ({ children, authenticated }: ContextProviderProps) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(authenticated);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function useIsAuthenticated() {
  const context = useAuth();
  return context?.isAuthenticated;
}
