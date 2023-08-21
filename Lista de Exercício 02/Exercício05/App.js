import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './Estilo'

export default function App() {
  return (
    <View style={{flex:1}}>
      
      <View style={styles.container1}></View>

      <View style = {styles.container2}>
      <View style={styles.circulo}></View>
      </View>

      <View style={styles.container3}></View>

      <View style={styles.container4}>
      <View style={[styles.retangulo, { backgroundColor: 'yellow' }]}></View>
      <View style={[styles.retangulo, { backgroundColor: 'purple' }]}></View>
      <View style={[styles.retangulo, { backgroundColor: 'lightgreen' }]}></View>
      </View>
      
    </View>
  );
}


