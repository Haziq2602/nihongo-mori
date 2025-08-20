
'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter, usePathname } from 'next/navigation';
import { LoadingIndicator } from '@/components/loading-indicator';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    await firebaseSignOut(auth);
    window.location.href = '/';
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

const unprotectedRoutes = ['/', '/login', '/signup'];

export const withAuth = <P extends object>(Component: React.ComponentType<P>) => {
  const AuthComponent = (props: P) => {
    const { user, loading: authLoading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    const [isShowingLoader, setIsShowingLoader] = useState(true);

    useEffect(() => {
      if (!authLoading) {
        // Enforce a minimum display time for the loader
        const timer = setTimeout(() => {
          setIsShowingLoader(false);
        }, 1500);

        return () => clearTimeout(timer);
      }
    }, [authLoading]);

    useEffect(() => {
      if (!authLoading && !isShowingLoader) {
        if (!user && !unprotectedRoutes.includes(pathname)) {
          router.push('/');
        } else if (user && (pathname === '/login' || pathname === '/signup')) {
          router.push('/dashboard');
        }
      }
    }, [user, authLoading, isShowingLoader, router, pathname]);

    const isLoading = (authLoading || isShowingLoader) && !unprotectedRoutes.includes(pathname);
    const isRedirecting = !user && !unprotectedRoutes.includes(pathname);

    if (isLoading || isRedirecting) {
      return <LoadingIndicator />;
    }

    return <Component {...props} />;
  };
  return AuthComponent;
};
