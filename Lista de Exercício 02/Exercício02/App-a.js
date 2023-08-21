import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './Estilo'

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={{ width:500, height:350, backgroundColor: 'lightcoral'}}></View>
      <View style={{ width:500, height:350, backgroundColor: 'lightblue'}}></View>

    </View>
  );
}


