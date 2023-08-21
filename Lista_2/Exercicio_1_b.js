import React from 'react';
import { View, StyleSheet } from 'react-native';

const Exercicio_1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.orangeSquare} />
      <View style={styles.purpleSquare} />
      <View style={styles.greenSquare} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orangeSquare: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
  },
  purpleSquare: {
    width: 100,
    height: 100,
    backgroundColor: 'purple',
  },
  greenSquare: {
    width: 100,
    height: 100,
    backgroundColor: '#90EE90',
  },
});

export default Exercicio_1;