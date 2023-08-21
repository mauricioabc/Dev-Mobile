import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './Estilo'

export default function App() {
  return (
    <View style = {styles.container1}>
      <View style={styles.verde}></View>
      <View style={styles.coral}></View>
      <View style={styles.azul}></View>
    </View>
  );
}


