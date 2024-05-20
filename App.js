import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './src/HomePage';
import CrusaderPage from './src/CrusaderPage'
import PaladinPage from './src/PaladinPage';

const Stack = createNativeStackNavigator();

const YourApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name="Crusader"
          component={CrusaderPage}
          options={{title: 'KC'}}
        />
        <Stack.Screen
          name="Paladin"
          component={PaladinPage}
          options={{title: 'KP'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default YourApp;