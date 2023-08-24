import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Exercicio_3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.view1}>
          <Text style={styles.fonteBranca}>Esse é mais um exemplo de texto. </Text>
        </View>
        <StatusBar style="auto" />
      </View>
      <View style={styles.container2}>
        <View style={styles.view2}>
            <Text style={styles.fonteBranca}>Porém aqui vamos combinar style e flexbox para dividir o texto em duas colunas. Essa é a primeira coluna! Aqui vai um exemplo de texto qualquer.</Text>
        </View>
        <View style={styles.view3}>
            <Text style={styles.fonteAzul}>Esse é outro exemplo de texto para popular a segunda coluna, porém, sem criatividade para escrever mais! :D</Text>
        </View>          
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  container1: {
    flex: 2,
    justifyContent: 'center'
  },
  container2: {
    flex: 2,
    flexDirection: 'row', 
    justifyContent: 'center'
  },
  fonteAzul: {
    fontSize: 26,
    color: 'blue',
  },
  fonteBranca: {
    fontSize: 22,
    color: 'white'
  },
  view1: {
    width: '100%',
    height: '100%', 
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  },
  view2: {
    width: '50%',
    height: '100%', 
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  view3: {
    width: '50%',
    height: '100%', 
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
});

export default Exercicio_3;