import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { MainStackParamList } from './types';
import RoleSelectionPage from '../Screens/RoleSelectionPage';
import UserRegisterPage from '../Screens/UserRegisterPage';
import AdminRegisterPage from '../Screens/AdminRegisterPage';
import DistributorRegisterPage from '../Screens/DistributorRegisterPage';
import LoginPage from '../Screens/LoginPage';
import BottomTabs from '../components/BottomTabs';
import MenstrualCup from '../Screens/Learning/MenstrualCup';
import PeriodPanties from '../Screens/Learning/PeriodPanties';
import ReusablePads from '../Screens/Learning/ReusablePads';
import StraterKit from '../Screens/Learning/StraterKit';
import InventoryScreen from '../Screens/InventoryScreen';
import OrdersScreen from '../Screens/OdersScreen';
import BusinessDetailsScreen from '../Screens/BusinessDetailsScreen';
import OrdersPage from '../Screens/Distibutor/DistibuterHome';
import DistibuterHome from '../Screens/Distibutor/DistibuterHome';
import InventoryPage from '../Screens/Distibutor/ManageOrder';
import CreateOderPage from '../Screens/Distibutor/CreateOrderPage ';
import ManageOrder from '../Screens/Distibutor/ManageOrder';
import AddProductScreen from '../Screens/Distibutor/AddProductScreen';

import PlaceOrderScreen from '../Screens/SHG/PlaceOrderScreen ';
import ShgScreen from '../Screens/SHG/ShgScreen';




const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='LoginPage'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="LoginPage" component={LoginPage}/>
      <Stack.Screen name="MainTabs" component={BottomTabs}/>
      <Stack.Screen name="RoleSelectionPage" component={RoleSelectionPage} />
      <Stack.Screen name="UserRegisterPage" component={UserRegisterPage} />
      <Stack.Screen name="AdminRegisterPage" component={AdminRegisterPage} />
      <Stack.Screen name="DistributorRegisterPage" component={DistributorRegisterPage} />
      <Stack.Screen name='MenstrualCup' component={MenstrualCup}/>
      <Stack.Screen name='PeriodPanties' component={PeriodPanties}/>
      <Stack.Screen name='ReusablePads' component={ReusablePads}/>
      <Stack.Screen name='StarterKit' component={StraterKit}/> 
      <Stack.Screen name='InventoryScreen' component={InventoryScreen}/> 
      <Stack.Screen name='OdersScreen' component={OrdersScreen}/>
      <Stack.Screen name='BusinessDetailsScreen' component={BusinessDetailsScreen}/>
      <Stack.Screen name='OrdersPage' component={OrdersPage}/>
      <Stack.Screen name='DistibuterHome' component={DistibuterHome}/>
      <Stack.Screen name='CreateOrderPage'component={CreateOderPage}/>
      <Stack.Screen name='ManageOrder' component={ManageOrder}/>
      <Stack.Screen name='AddProductScreen' component={AddProductScreen}/>
      <Stack.Screen name='ShgScreen' component={ShgScreen}/>
      <Stack.Screen name='PlaceOrderScreen' component={PlaceOrderScreen}/>
    </Stack.Navigator>
  )
}

export default MainStack