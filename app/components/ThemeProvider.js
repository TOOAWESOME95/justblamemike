'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [heaven, setHeaven] = useState(false);

  useEffect(() => {
    const saved = typeof window !== 'undefined' && window.sessionStorage.getItem('jbm-heaven');
    if (saved === 'true') setHeaven(true);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem('jbm-heaven', heaven);
    }
    if (heaven) {
      document.documentElement.classList.add('heaven');
    } else {
      document.documentElement.classList.remove('heaven');
    }
  }, [heaven]);

  return (
    <ThemeContext.Provider value={{ heaven, setHeaven, toggle: () => setHeaven(h => !h) }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
