import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, Alert, Button} from 'react-native'
import { Divider } from '@rneui/themed';

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
            <Divider style={styles.divider} />
            <View style={styles.container}>
              <Image style={styles.thumbnail} source={require('../assets/images/kc_t.png')} />
              <Button 
                title='Knight Crusader' 
                onPress={() =>
                  navigation.navigate('Crusader')
                }
              />
            </View>
            <Divider style={styles.divider} />
            <View style={styles.container}>
              <Image style={styles.thumbnail} source={require('../assets/images/kp_t.png')} />
              <Button 
                title='Knight Paladin' 
                onPress={() =>
                  navigation.navigate('Paladin')
                }
              />
            </View>
            <Divider style={styles.divider} />
            <View style={styles.space}/>         
          </View>
        </ScrollView>
    );
  };

  const styles = StyleSheet.create({
    root: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 10,      
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
    thumbnail: {
      width: 30,
      height: 30,  
    },
    text: {
      fontSize: 14,
      paddingHorizontal: 2
    },
    divider: {
      width: '100%', // Ensures the divider spans the full width
      height: 1, // Sets the height of the divider
      backgroundColor: 'black', 
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: Dimensions.get('window').width,
      paddingHorizontal: 10,
      marginVertical: 10,
    },
  });

export default HomePage