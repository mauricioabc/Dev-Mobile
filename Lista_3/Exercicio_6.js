import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';


const Exercicio_6 = () => {
  const [titulo, setTitulo] = useState('');
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  const alterarTexto = () => {
    setTitulo(`Seu nome é ${nome} e você tem ${idade} anos de idade.`); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.fonteTitulo}>Dados do Usuário</Text>
      </View>
      <View style={styles.view2}>
        <TextInput style={styles.input} placeholder='Nome' value={nome} onChangeText={(nome)=>setNome(nome)}/>
        <TextInput style={styles.input} placeholder='Idade' value={idade} onChangeText={(idade)=>setIdade(idade)}/>
      </View>
      <View style={styles.viewbotao}>
        <View style={styles.botaoRoxo}>
          <Button title='Confirmar' color='purple' onPress={() => alterarTexto()}> </Button>
         </View>
      </View>
      <View style={styles.viewTexto}>
          <Text style={styles.fonteTexto}>{titulo}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  fonteTitulo: {
    fontSize: 30,
    textAlign: 'center'
  },
  fonteTexto: {
    fontSize: 24,
    textAlign: 'center'
  },
  botaoRoxo:{
    width: '30%',
    height: '100%'
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    marginBottom: 10,
    width: '90%'
  },
  viewTexto: {
    width: '100%',
    height: '70%'
  },
  viewbotao: {
    width: '100%',
    height: '6%', 
    alignItems: 'center'
  },
  view1: {
    width: '100%',
    height: '16%', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  view2: {
    width: '100%',
    height: '16%', 
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default Exercicio_6;