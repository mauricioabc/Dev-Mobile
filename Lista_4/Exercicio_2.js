import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button  } from 'react-native';

const Exercicio_2 = () => {
  const [num, setNum] = useState('');
  const [mostrarTabuada, setMostrarTabuada] = useState(false);

  const alterarNum = (numero) => {
    setNum(numero);
    setMostrarTabuada(true);
  }

  const data = Array.from({ length: 11 }, (_, id) => ({ id, numero: num }));

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tabuada do {num}</Text>
      {mostrarTabuada && (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Text style={styles.texto}>{item.id} x {item.numero} = {item.id * item.numero}</Text>
          )}
        />
      )}
      <View style={styles.botoes}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((numero) => (
          <Button
            key={numero}
            color={'black'}
            title={numero.toString()}
            onPress={() => alterarNum(numero)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:50,
    marginBottom:30
  },
  texto: {
    fontSize: 30,
  },
  botoes: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default Exercicio_2;