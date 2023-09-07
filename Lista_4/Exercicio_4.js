import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, Alert, FlatList } from 'react-native';

const Exercicio_4 = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cpf, setCpf] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  const adicionaUsuario = () => {
    const novoUsuario = { nome, idade, cpf };
    setUsuarios([...usuarios, novoUsuario]);
    Alert.alert(
      'Informações da Pessoa',
      `Nome: ${novoUsuario.nome}\nIdade: ${novoUsuario.idade}\nCPF: ${novoUsuario.cpf}`,
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
      <View style={styles.container1}>
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
          <View style={styles.botaoVerde}>
            <Button title='Confirmar' color='#32CD32' onPress={() => adicionaUsuario()}> </Button>
          </View>
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.view3}>
          <Text style={styles.fonteTitulo}>Listagem</Text>
        </View>
        <View style={styles.view4}>
        <FlatList
          data={usuarios}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemUsuario}>
              <Text style={styles.fonteTexto}>{item.nome}</Text>
              <Text style={styles.fonteTexto}> - {item.cpf}</Text>
            </View>
          )}
        />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DC',
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
  botaoVerde:{
    width: '30%',
    height: '100%'
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    fontSize: 20,
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
    height: '15%', 
    alignItems: 'center'
  },
  view1: {
    width: '100%',
    height: '40%', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  view2: {
    width: '95%',
    height: '55%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 3,
    borderColor: 'black',
  },
  view3: {
    width: '100%',
    height: '40%', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  view4: {
    width: '95%',
    height: '55%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
    margin: 10,
    borderWidth: 3,
    borderColor: 'black',
  },
  mesmaLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemUsuario: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    borderBottomWidth: 2,
    paddingBottom: 3,
  },
});

export default Exercicio_4;