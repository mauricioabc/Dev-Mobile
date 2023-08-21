import React from 'react';
import { View, StyleSheet } from 'react-native';

const Exercicio_5 = () => {
  return (
    <View style={{flex:1}}>
      <View style={styles.container1}></View>
      <View style = {styles.container2}>
      <View style={styles.circulo}></View>
    </View>
    <View style={styles.container3}></View>
      <View style={styles.container4}>
      <View style={[styles.retangulo, { backgroundColor: 'orange' }]}></View>
      <View style={[styles.retangulo, { backgroundColor: 'purple' }]}></View>
      <View style={[styles.retangulo, { backgroundColor: 'lightgreen' }]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container1: {
      flex: 0.5,
      backgroundColor: 'grey'
    },
    container2: {
      flex: 2.5,
      alignItems: 'center',
      justifyContent: 'center'
    },
    container3: {
        flex: 4.5,
        backgroundColor: ' #FFC0CB'
      },
    container4: {
      flex: 2,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    circulo: {
        width: 100,
        height: 100, 
        backgroundColor: 'blue',
        borderColor: 'black',
        borderWidth: 2.5,
        borderRadius: 50
    },
    retangulo: {
        width: 100,
        height: 60, 
        borderColor: 'black',
        borderWidth: 2.5,
        borderRadius: 20
    },
  });

export default Exercicio_5;