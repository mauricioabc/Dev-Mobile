import React from 'react';
import { View, StyleSheet } from 'react-native';

const Exercicio_2 = () => {
  return (
    <View style={{flex:1}}>
      <View style = {styles.container1}>
        <View style={styles.vermelho}></View>
      </View>
      <View style={styles.container2}>
        <View style={styles.azul}></View>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
    container1: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
    },
    container2: {
      flex: 1,
      alignItems: 'flex-end'
    },
    vermelho: {
      width: '50%',
      height:'10%', 
      backgroundColor: '#FFC0CB'
    },
    azul: {
      width: '50%',
      height:'10%', 
      backgroundColor: '#ADD8E6'
    },
  });

export default Exercicio_2;