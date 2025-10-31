import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { MainStackParamList } from './types';
import HomePage from '../Screens/HomePage';
import MainPage from '../Screens/MainPage';
import RoleSelectionPage from '../Screens/RoleSelectionPage';
import UserRegisterPage from '../Screens/UserRegisterPage';
import AdminRegisterPage from '../Screens/AdminRegisterPage';
import DistributorRegisterPage from '../Screens/DistributorRegisterPage';



const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='HomePage'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="HomePage" component={HomePage}/>
      <Stack.Screen name="MainPage" component={MainPage}/>
      <Stack.Screen name="RoleSelectionPage" component={RoleSelectionPage} />
      <Stack.Screen name="UserRegisterPage" component={UserRegisterPage} />
      <Stack.Screen name="AdminRegisterPage" component={AdminRegisterPage} />
      <Stack.Screen name="DistributorRegisterPage" component={DistributorRegisterPage} />
    </Stack.Navigator>
  )
}

export default MainStack