import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Exercicio_2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.fonteAzul}>Este é outro exemplo de texto!</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.fonteBranca}>Com alinhamentos à esquerda.</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.fonteVermelha}>Com alinhamentos à direita.</Text>
      </View>
      <View style={styles.view1}>
        <Text  style={styles.fonteAzul}>Com alinhamento centralizado.</Text>
      </View>
      <View style={styles.view4}>
        <Text>E cor de fundo!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  fonteAzul: {
    fontSize: 30,
    color: 'blue',
    textAlign: 'center'
  },
  fonteBranca: {
    fontSize: 22,
    color: 'white'
  },
  fonteVermelha: {
    fontSize: 22,
    color: 'red'
  },
  view1: {
    width: '100%',
    height: '10%', 
    backgroundColor: 'rgb(144, 238, 144)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  view2: {
    width: '100%',
    height: '5%', 
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  view3: {
    width: '100%',
    height: '5%', 
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  view4: {
    width: '100%',
    height: '3%', 
    backgroundColor: 'rgb(255, 144, 144)',
    justifyContent: 'center'
  },
});

export default Exercicio_2;