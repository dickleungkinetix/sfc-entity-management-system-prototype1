import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '../lib/supabase';

interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  authenticate: (password: string) => Promise<boolean>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [adminPassword, setAdminPassword] = useState<string | null>(null);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Fetch admin password from database
        const { data, error } = await supabase
          .from('admin_credentials')
          .select('password')
          .single();

        if (error) {
          console.error('Error fetching admin credentials:', error);
          // Fallback to default password if database query fails
          setAdminPassword('admin123');
        } else {
          setAdminPassword(data.password);
        }

        // Check if user was previously authenticated (stored in localStorage)
        const authStatus = localStorage.getItem('isAuthenticated');
        if (authStatus === 'true') {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
        setAdminPassword('admin123'); // Fallback
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const authenticate = async (password: string): Promise<boolean> => {
    // Compare against password from database
    if (adminPassword && password === adminPassword) {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  };

  const signOut = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  const value = {
    isAuthenticated,
    loading,
    authenticate,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
