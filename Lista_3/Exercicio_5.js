import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


const Exercicio_5 = () => {
  const [titulo, setTitulo] = useState('Olá! Esse é o texto inicial.');
  const [contador, setContador] = useState(0);

  const alterarTitulo = () => {
    if(contador == 0){
      setTitulo('Você clicou no botão.'); 
      setContador(1);
    }
    if(contador == 1){
      setTitulo('Clicou novamente.'); 
      setContador(2);
    }
    if(contador == 2){
      setTitulo('Se clicar de novo eu vou sumir…'); 
      setContador(3);
    }
    if(contador == 3){
      setTitulo(''); 
      setContador(4);
    }
    if(contador == 4){
      setTitulo('Olá! Esse é o texto inicial.'); 
      setContador(0);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewTitulo}>
        <Text style={styles.fonteTitulo}>{titulo}</Text>
      </View>
      <View style={styles.view1}>
        <View style={styles.botaoVerde}>
          <Button title='Próximo' color='green' onPress={() => alterarTitulo()}> </Button>
         </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fonteTitulo: {
    fontSize: 22,
    textAlign: 'center'
  },
  botaoVerde:{
    width: '75%',
    height: '100%',
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

export default Exercicio_5;