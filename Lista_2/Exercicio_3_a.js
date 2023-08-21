import React from 'react';
import { View, StyleSheet } from 'react-native';

const Exercicio_3 = () => {
  return (
    <View style = {styles.container1}>
      <View style={styles.verde}></View>
      <View style={styles.vermelho}></View>
      <View style={styles.azul}></View>
    </View>
  );
}

const styles = StyleSheet.create({
    container1: {
      flex: 1,
      flexDirection: 'row'
    },
    container2: {
      flex: 1,
      alignItems: 'center'
    },
    vermelho: {
      width: '25%',
      height:'100%', 
      backgroundColor: '#FFC0CB'
    },
    azul: {
      width: '30%',
      height:'100%', 
      backgroundColor: '#ADD8E6'
    },
    verde: {
      width: '30%',
      height:'100%', 
      backgroundColor: 'lightgreen'
    },
  });

export default Exercicio_3;