import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView} from 'react-native'

const YourApp = () => {
  return (
    <ScrollView>
    <View
      style={styles.root}>
      <Text style={styles.title}>Welcome</Text>
      <View style={styles.space}/>
      <Text>This is the second line</Text>
      <View style={styles.space}/>
      <Image style={styles.image} source={require('./assets/images/Knight.jpg')} />
      
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    padding: 55,
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