// src/context/AuthContext.tsx
import React, { createContext, ReactNode, useContext, useEffect } from 'react';
import { supabase } from '../backend/lib/supabase'
import { Session } from '@supabase/supabase-js';
import { useLocalStorage } from '../hooks/useLocalStorage';

type AuthContextType = {
  user: Session | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useLocalStorage<Session | null>('user', null);

  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session);
    };
    fetchSession();
    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session);
    });

  }, [setUser]);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
