import React from 'react';
import { View, StyleSheet } from 'react-native';

const Exercicio_1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.orangeSquare} />
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
});

export default Exercicio_1;