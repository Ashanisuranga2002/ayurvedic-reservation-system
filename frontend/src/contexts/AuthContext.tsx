import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type User = { name: string; isAdmin: boolean } | null;

type AuthContextType = {
  user: User;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(() => {
    try {
      const raw = localStorage.getItem('auth_user');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (user) localStorage.setItem('auth_user', JSON.stringify(user)); else localStorage.removeItem('auth_user');
  }, [user]);

  const login = async (username: string, password: string) => {
    // Demo authentication: accept admin/password for admin access
    if (username === 'admin' && password === 'password') {
      const u = { name: 'Administrator', isAdmin: true };
      setUser(u);
      return true;
    }
    // For demo, non-admin login allowed
    if (username && password) {
      const u = { name: username, isAdmin: false };
      setUser(u);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
