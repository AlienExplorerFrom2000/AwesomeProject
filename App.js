import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailedPage from './src/DetailedPage'
import HomePage from './src/HomePage';

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
          name="Detailed"
          component={DetailedPage}
          options={{title: 'Something Else'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default YourApp;