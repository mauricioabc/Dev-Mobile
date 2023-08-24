import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


const Exercicio_4 = () => {
  const [titulo, setTitulo] = useState('Clique em algum dos botões!');

  const alterarTitulo = (novoTitulo) => {
    setTitulo(novoTitulo); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewTitulo}>
        <Text style={styles.fonteTitulo}>{titulo}</Text>
      </View>
      <View style={styles.view1}>
        <View style={styles.botaoVerde}>
          <Button title='Botão 1' color='green' onPress={() => alterarTitulo('Você clicou no botão 1')}> </Button>
          <Button title='Botão 2' color='blue' onPress={() => alterarTitulo('Você clicou no botão 2')}> </Button>
          <Button title='Botão 3' color='orange' onPress={() => alterarTitulo('Você clicou no botão 3')}> </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  fonteTitulo: {
    fontSize: 24,
    textAlign: 'center'
  },
  botaoVerde:{
    width: '100%',
    height: '100%',
    marginTop: 20
  },
  viewTitulo: {
    width: '100%',
    height: '10%', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  view1: {
    width: '100%',
    height: '16%', 
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Exercicio_4;