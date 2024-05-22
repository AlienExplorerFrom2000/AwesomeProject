import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, Alert, Button, TouchableOpacity} from 'react-native'

const CrusaderPage = () => {
    return (
      <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Knight Crusader</Text>
        <View style={styles.space}/>
        <Image style={styles.image} source={require('../assets/images/Crusader.jpg')} />
        <View style={styles.space}/>
        <Text style={styles.text}>
          Armed with a bristling array of heavy and long-ranged weapons, 
          the Knights Crusader find key firing positions from which to unleash salvo 
          after salvo at the enemy. Crusader pilots will gladly steer their suits even 
          into open ground to find the best place to shoot from, and are regarded as 
          especially dutiful and selfless by their peers.
        </Text>
        <View style={styles.paragraph}/>
        <Text style={styles.text}>
          This multi-part plastic kit builds one Knight Crusader, a heavily-armed 
          long-range Lords of War choice for your Imperial Knights armies - or a wandering 
          Freeblade for other Imperium forces.
        </Text>
        <View style={styles.space}/>
        <View style={styles.container}>
          <Text style={styles.left}>Knight Crusader</Text>
          <View style={styles.rightContainer}>
            <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Added to Cart')}>
              <Text style={styles.buttonText}>Add to Favourites</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    paragraph: {
      width: Dimensions.get('window').width,
      height: 10,
    },
    text: {
      fontSize: 14,
      paddingHorizontal: 5
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: Dimensions.get('window').width,
      paddingHorizontal: 5,
      marginVertical: 10,
      backgroundColor: '#a9a9a9',
    },
    left: {
      fontSize: 18,
    },
    rightContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
    },
    right: {
      fontSize: 18,
      marginRight: 10,
    },
    button: {
      backgroundColor: 'yellow',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 18,
    },
    buttonText: {
      fontSize: 14,
      color: 'black',
    },
  });

export default CrusaderPage