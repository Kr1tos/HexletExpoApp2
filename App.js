// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutScreen from './screens/AboutScreen';
import LanguagesScreen from './screens/LanguagesScreen';
import NotFoundScreen from './screens/NotFoundScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="О Себе" component={AboutScreen} />
        <Tab.Screen name="Мои Языки" component={LanguagesScreen} />
        <Tab.Screen name="Не найдено" component={NotFoundScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
