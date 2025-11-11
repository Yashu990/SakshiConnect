// src/context/LanguageContext.tsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import i18n from '../i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => Promise<void>;
  loading: boolean;
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: async () => {},
  loading: true,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState('en');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLanguage = async () => {
      try {
        const savedLang = await AsyncStorage.getItem('appLang');
        const lang = savedLang || 'en';
        setLanguageState(lang);
        await i18n.changeLanguage(lang);
      } catch (error) {
        console.warn('🌐 Failed to load saved language:', error);
      } finally {
        setLoading(false);
      }
    };
    loadLanguage();
  }, []);

  const setLanguage = async (lang: string) => {
    try {
      setLanguageState(lang);
      await i18n.changeLanguage(lang);
      await AsyncStorage.setItem('appLang', lang);
    } catch (error) {
      console.warn('⚠️ Failed to set language:', error);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, loading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
