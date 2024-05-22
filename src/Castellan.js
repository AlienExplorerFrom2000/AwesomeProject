import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, Alert, Button, TouchableOpacity} from 'react-native'

const CastellanPage = () => {
    return (
      <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Knight Crusader</Text>
        <View style={styles.space}/>
        <Image style={styles.image} source={require('../assets/images/Castellan.jpg')} />
        <View style={styles.space}/>
        <Text style={styles.text}>
            Dominus-class Knights are among the largest available to any Knight house. 
            These walking fortresses march relentlessly into the fight, armed with weapons 
            capable of levelling entire armies, gunfire scattering uselessly off their ion 
            shields. The Knight Castellan's dual plasma core fuels a frightening array of 
            weapon systems, sufficient to make it a mobile artillery battery. Its awesome 
            plasma decimator gouges the heart out of an enemy army, while the firepower 
            of its volcano lance is comparable to an Imperial Navy warship.
        </Text>
        <View style={styles.paragraph}/>
        <Text style={styles.text}>
          This multi-part plastic kit builds one Knight Crusader, a titanic long range 
          Lords of War choice for your Imperial Knights armies - or a wandering 
          Freeblade for other Imperium forces.
        </Text>
        <View style={styles.space}/>
        <View style={styles.container}>
          <Text style={styles.left}>Knight Castellan(x1)</Text>
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

export default CastellanPage