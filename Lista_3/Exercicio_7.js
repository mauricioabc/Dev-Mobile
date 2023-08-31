import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';


const Exercicio_7 = () => {
  const [textoIMC, setTextoIMC] = useState('Seu IMC é: ');
  const [textoSituacao, setTextoSituacao] = useState('Situação: ');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const calcular = () => {
    const imc = peso / (altura * altura);
    let situacao = '';
    if (imc < 17) {
      situacao = 'Muito abaixo do peso';
    } else if (imc < 18.49) {
      situacao = 'Abaixo do peso';
    } else if (imc < 24.99) {
      situacao = 'Peso normal';
    } else if (imc < 29.99) {
      situacao = 'Acima do peso';
    } else if (imc < 34.99) {
      situacao = 'Obesidade I';
    } else if (imc < 39.99) {
      situacao = 'Obesidade II (Severa)';
    } else {
      situacao = 'Obesidade III (Mórbida)';
    }
    setTextoIMC(`Seu IMC é: ${imc.toFixed(2)}`);
    setTextoSituacao(`Situação: ${situacao}`);
  };  

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
      <View style={styles.view1}>
        <Text style={styles.fonteTitulo}>Calculadora de IMC</Text>
      </View>
      <View style={styles.mesmaLinha}>
        <Text style={styles.fonteInput}>Peso: </Text>
        <TextInput style={styles.input} placeholder=' Kg' value={peso} onChangeText={(peso)=>setPeso(peso)}/>
        <Text style={styles.fonteInput}> Altura: </Text>
        <TextInput style={styles.input} placeholder=' Metros' value={altura} onChangeText={(altura)=>setAltura(altura)}/>
      </View>
      <View style={styles.viewbotao}>
        <View style={styles.botaoAzul}>
          <Button title='Calcular' color='blue' onPress={() => calcular()}> </Button>
         </View>
      </View>
      <View style={styles.viewTexto}>
          <Text style={styles.fonteTexto}>{textoIMC}</Text>
          <Text style={styles.fonteTexto}>{textoSituacao}</Text>
      </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.viewTabela1}>
            <Text style={styles.fonteTextoTabelaTitulo}>Resultado</Text>
            <Text style={styles.fonteTextoTabela}>Abaixo de 17</Text>
            <Text style={styles.fonteTextoTabela}>Entre 17 e 18,49</Text>
            <Text style={styles.fonteTextoTabela}>Entre 18,5 e 24,99</Text>
            <Text style={styles.fonteTextoTabela}>Entre 25 e 29,99</Text>
            <Text style={styles.fonteTextoTabela}>Entre 30 e 34,99</Text>
            <Text style={styles.fonteTextoTabela}>Entre 35 e 39,99</Text>
            <Text style={styles.fonteTextoTabela}>Acima de 40</Text>
        </View>
        <View style={styles.viewTabela2}>
            <Text style={styles.fonteTextoTabelaTitulo}>Situação</Text>
            <Text style={styles.fonteTextoTabela}>Muito abaixo do peso</Text>
            <Text style={styles.fonteTextoTabela}>Abaixo do peso</Text>
            <Text style={styles.fonteTextoTabela}>Peso normal</Text>
            <Text style={styles.fonteTextoTabela}>Acima do peso</Text>
            <Text style={styles.fonteTextoTabela}>Obesidade I</Text>
            <Text style={styles.fonteTextoTabela}>Obesidade II (Severa)</Text>
            <Text style={styles.fonteTextoTabela}>Obesidade III (Mórbida)</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fonteTitulo: {
    fontSize: 30,
    textAlign: 'left'
  },
  fonteInput: {
    fontSize: 18,
  },
  fonteTexto: {
    fontSize: 18,
    textAlign: 'center'
  },
  fonteTextoTabelaTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  fonteTextoTabela: {
    fontSize: 14,
    marginBottom: 3,
    textAlign: 'left'
  },
  botaoAzul:{
    width: '90%',
    height: '100%'
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 0.2,
    marginBottom: 20,
    width: '30%',
    justifyContent: 'center'
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
    height: '26%', 
    justifyContent: 'center',
    marginLeft: 10
  },
  view2: {
    width: '100%',
    height: '16%', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewTabela1: {
    width: '48%',
    height: '70%', 
    marginTop: 70,
    justifyContent: 'flex-start',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 10  
  },
  viewTabela2: {
    width: '48%',
    height: '70%', 
    marginTop: 70,
    justifyContent: 'flex-start',
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 10  
  },
  mesmaLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20
  },
  mesmaLinhaTexto: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },  
});

export default Exercicio_7;