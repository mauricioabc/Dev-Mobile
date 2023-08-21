import React from 'react';
import { View, StyleSheet } from 'react-native';

const Exercicio_4 = () => {
  return (
    <View style={{flex:1}}>
      <View style = {styles.container1}>
        <View style={styles.azul}></View>
        <View style={styles.vermelho}></View>
      </View>
      <View style={styles.container2}>
        <View style={styles.vermelho}></View>
        <View style={styles.azul}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container1: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    container2: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-between'
      },
    vermelho: {
        width: 100,
        height: 100, 
        backgroundColor: 'red'
    },
    azul: {
        width: 100,
        height: 100, 
        backgroundColor: 'blue'
    },
  });

export default Exercicio_4;