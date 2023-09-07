import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, Alert, KeyboardAvoidingView } from 'react-native';
import Modal from 'react-native-modal';


const Exercicio_3 = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cpf, setCpf] = useState('');

  const pessoa = {
    nome: nome,
    idade: idade,
    cpf: cpf,
  };

  const toggleModal = () => {
    Alert.alert(
      'Informações da Pessoa',
      `Nome: ${pessoa.nome}\nIdade: ${pessoa.idade}\nCPF: ${pessoa.cpf}`,
      [
        {
          text: 'Fechar',
          onPress: () => console.log('Alerta fechado'),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.fonteTitulo}>Cadastro de Usuários</Text>
      </View>
      <View style={styles.view2}>
        <View style={styles.mesmaLinha}>
          <Text style={styles.fonteTexto}>Nome: </Text>
          <TextInput style={styles.input} value={nome} onChangeText={(nome)=>setNome(nome)}/>
        </View>
        <View style={styles.mesmaLinha}>
          <Text style={styles.fonteTexto}>Idade: </Text>
          <TextInput style={styles.input}  value={idade} onChangeText={(idade)=>setIdade(idade)}/>
        </View>
        <View style={styles.mesmaLinha}>
          <Text style={styles.fonteTexto}>CPF: </Text>
          <TextInput style={styles.input} value={cpf} onChangeText={(cpf)=>setCpf(cpf)}/>
        </View>
      </View>
      <View style={styles.viewbotao}>
        <View style={styles.botaoRoxo}>
          <Button title='Confirmar' color='#32CD32' onPress={() => toggleModal()}> </Button>
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
    backgroundColor: '#FFF8DC'
  },
  fonteTitulo: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 50,
    fontWeight: 'bold',
  },
  fonteTexto: {
    fontSize: 20,
    textAlign: 'center'
  },
  botaoRoxo:{
    width: '30%',
    height: '100%'
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: 4,
    marginBottom: 10,
    width: '70%',
  },
  viewTexto: {
    width: '100%',
    height: '70%'
  },
  viewbotao: {
    width: '100%',
    height: '10%', 
    alignItems: 'center'
  },
  view1: {
    width: '100%',
    height: '16%', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  view2: {
    width: '95%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 3,
    borderColor: 'black',
  },
  mesmaLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Exercicio_3;