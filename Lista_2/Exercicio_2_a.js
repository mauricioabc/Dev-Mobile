import React from 'react';
import { View, StyleSheet } from 'react-native';

const Exercicio_2 = () => {
  return (
    <View style={styles.container}>
      <View style={{ width:500, height:350, backgroundColor: '#FFC0CB'}}></View>
      <View style={{ width:500, height:350, backgroundColor: '#ADD8E6'}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Exercicio_2;