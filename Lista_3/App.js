import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';


const Exercicio_8 = () => {
  const imagePaths = {
    pokebola: require('./assets/pokebola.png'),
    bulbasauro: require('./assets/bulbasauro.png'),
    squirtle: require('./assets/squirtle.png'),
    charmander: require('./assets/charmander.png'),
  };

  const [imagePath, setImagePath] = useState('pokebola'); // Valor inicial

  const trocaImagem = (newImagePath) => {
    setImagePath(newImagePath);
  };

  return (
    <View style={styles.container}>
        <View style={styles.view1}>
          <Text style={styles.fonteTitulo}>Escolha o seu Pokemon!</Text>
        </View>
        <View style={styles.view2}>
        <Image style={styles.viewImagem} source={imagePaths[imagePath]} />
        </View>
        <View style={styles.viewbotoes}>
          <View style={styles.botao}>
            <Button title='Bulbasauro' color='green' onPress={() => trocaImagem('bulbasauro')}> </Button>
          </View>
          <View style={styles.botao}>
            <Button title='Squirtle' color='blue' onPress={() => trocaImagem('squirtle')}> </Button>
          </View>
          <View style={styles.botao}>
            <Button title='Charmander' color='red' onPress={() => trocaImagem('charmander')}> </Button>
          </View>
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonteTitulo: {
    fontSize: 30,
    textAlign: 'left',
    marginTop: '40%'
  },
  botao: {
    width: '30%',
    height: '100%'
  },
  viewTexto: {
    width: '100%',
    height: '70%'
  },
  viewbotoes: {
    flexDirection: 'row',
    justifyContent: 'center',
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
    height: '50%', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewImagem: {
    width: '90%',
    height: '90%', 
    resizeMode: 'contain',
  },
});

export default Exercicio_8;