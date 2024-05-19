import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, Alert, Button,} from 'react-native'

const HomePage = ({navigation}) => {
    return (
        <ScrollView>
          <View style={styles.root}>
            <Text style={styles.title}>Welcome</Text>
            <View style={styles.space}/>
            <Image style={styles.image} source={require('../assets/images/Knight.jpg')} />
            <View style={styles.space}/>
            <Text style={styles.text}>This is an app to show case all imperial 
            knights from Wh40K and there customisation options. You can save the
            ones your interested in to the Favourites page</Text>
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
      width: Dimensions.get('window').width-10,
      height: 500,  
    },
    text: {
      fontSize: 14,
      paddingHorizontal: 2
    },
  });

export default HomePage