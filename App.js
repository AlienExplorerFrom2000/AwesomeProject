import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, Alert, Button,} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailedPage from './src/DetailedPage'

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

const HomePage = ({navigation}) => {
  return (
      <ScrollView>
        <View style={styles.root}>
          <Text style={styles.title}>Welcome</Text>
          <View style={styles.space}/>
          <Text>This is the second line</Text>
          <View style={styles.space}/>
          <Image style={styles.image} source={require('./assets/images/Knight.jpg')} />
          <View style={styles.space}/>
          <Button 
            title='Show me another' 
            onPress={() =>
              navigation.navigate('Detailed')
            }
            />
        </View>
      </ScrollView>
  );
};

/*const DetailedPage = () => {
  return (
    <ScrollView>
    <View style={styles.root}>
      <Text style={styles.title}>Knight Crusader</Text>
      <View style={styles.space}/>
      <Image style={styles.image} source={require('./assets/images/Crusader.jpg')} />

    </View>
    </ScrollView>
  );
};*/

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
  },
  space: {
    width: Dimensions.get('window').width,
    height: 30,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 500,
  }
});

export default YourApp;