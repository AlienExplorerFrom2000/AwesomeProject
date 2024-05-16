import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, Alert, Button,} from 'react-native'

const DetailedPage = () => {
    return (
      <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Knight Crusader</Text>
        <View style={styles.space}/>
        <Image style={styles.image} source={require('../assets/images/Crusader.jpg')} />
      </View>
      </ScrollView>
    );
  };

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

  export default DetailedPage