import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Exercicio_1 = () => {
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.azulao}>Esse é o AZULÃO!</Text>
      </View>
      <View>
        <Text style={styles.vermelhinho}>Esse é o vermelhinho!</Text>
      </View>
      <View style={styles.mesmaLinha}>
        <Text>Esse mistura os dois!!</Text>
        <Text style={styles.azulao}> AZULÃO</Text>
        <Text> e </Text>
        <Text style={styles.vermelhinho}>vermelhinho</Text>
        <Text>!!!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  azulao: {
    fontSize: 22,
    color: 'blue'
  },
  vermelhinho: {
    fontSize: 18,
    color: 'red'
  },
  mesmaLinha: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },
});

export default Exercicio_1;