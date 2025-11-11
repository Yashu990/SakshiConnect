import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './Navigation/MainStack';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { LanguageProvider } from '../context/LanguageContext';
import { OrderProvider } from './context/OrderContext';
import { InventoryProvider } from './context/InventoryContext';
import './i18n';

const App = () => {
  return (
    <InventoryProvider>
      <OrderProvider>
        <LanguageProvider>
          <I18nextProvider i18n={i18n}>
            <NavigationContainer>
              <MainStack />
            </NavigationContainer>
          </I18nextProvider>
        </LanguageProvider>
      </OrderProvider>
    </InventoryProvider>
  );
};

export default App;