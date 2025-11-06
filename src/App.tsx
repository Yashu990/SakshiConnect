import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './Navigation/MainStack';
import './i18n'; // ✅ Make sure this is imported here
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { LanguageProvider } from '../context/LanguageContext';

const App = () => {
  return (
    
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
       </LanguageProvider>
    </I18nextProvider>
   
  );
};

export default App;
