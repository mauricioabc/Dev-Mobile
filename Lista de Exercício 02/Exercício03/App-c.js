import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './Estilo'

export default function App() {
  return (
    <View style={{flex:1}}>
      
      <View style = {styles.container1}>
        <View style={styles.verde}></View>
        <View style={styles.coral}></View>
        <View style={styles.azul}></View>
      </View>

      <View style={styles.container2}>
        <View style={styles.roxo}>
        <View style={styles.amarelo}></View>
        </View>
      </View>
      
    </View>
  );
}


