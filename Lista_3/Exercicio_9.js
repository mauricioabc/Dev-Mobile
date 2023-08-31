import React, { useState } from 'react';
import { StyleSheet, View, Image, Switch } from 'react-native';


const Exercicio_9 = () => {
  const imagePaths = {
    pokebolaFechada: require('./assets/pokebola-fechada.png'),
    pokebolaAberta: require('./assets/pokebola-aberta.png'),
  };

  const [imagePath, setImagePath] = useState('pokebolaFechada'); // Valor inicial
  const [enabled, setEnabled] = useState(false); // Valor inicial

  const trocaImagem = () => {
    setEnabled((previousState) => !previousState)
    if(enabled == false){
      setImagePath('pokebolaAberta');
    } else {
      setImagePath('pokebolaFechada');
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.view1}>
          <Switch trackColor={{false: 'gray', true: 'black'}} 
                  thumbColor={enabled ? 'red' : 'white'}
                  onChange={trocaImagem}
                  value={ enabled }
                  style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
          />
        </View>
        <View style={styles.view2}>
          <Image style={styles.viewImagem} source={imagePaths[imagePath]} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    width: '100%',
    height: '26%', 
    justifyContent: 'flex-end',
    alignItems: 'center'
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

export default Exercicio_9;