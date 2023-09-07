import { StyleSheet, Text, View, FlatList  } from 'react-native';

const Exercicio_1 = () => {
  const data = [
    {id: 0, numero: 7},
    {id: 1, numero: 7},
    {id: 2, numero: 7},
    {id: 3, numero: 7},
    {id: 4, numero: 7},
    {id: 5, numero: 7},
    {id: 6, numero: 7},
    {id: 7, numero: 7},
    {id: 8, numero: 7},
    {id: 9, numero: 7},
    {id: 10, numero: 7},
  ]
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Tabuada do 7</Text>
        <FlatList
          data = {data}
          renderItem={ ({item}) =>
            <Text style={styles.texto}>{item.id} x {item.numero} = {item.id*item.numero}</Text>} 
        ></FlatList>
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
});

export default Exercicio_1;