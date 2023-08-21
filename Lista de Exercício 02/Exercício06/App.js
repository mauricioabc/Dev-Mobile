import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './Estilo'

export default function App() {
  return (
    <View style={{flex:1}}>
      
      <View style = {styles.container1}>
        <View style={styles.view1}>
          <View style={styles.quadradoPreto}></View>
          <View style={styles.retanguloRosa}></View>
        </View>
        <View style={styles.view1}>
          <View style={styles.quadradoPreto}></View>
          <View style={styles.retanguloRosa}></View>
        </View>
      </View>

      <View style={styles.container2}>
        <View style={styles.view2}></View>
      </View>

      <View style={styles.container3}>
        <View style={styles.view3}></View>
        <View style={styles.view4}></View>
      </View>

      <View style={styles.container4}>
        <View style={styles.view5}>
          <View style={styles.view5_1}>
            <View style={styles.retanguloMarrom}></View>
          </View>
          <View style={[styles.view5_1, {alignItems:'flex-end',}]}>
            <View style={styles.retanguloMarrom}></View>
          </View>
        </View>
          <View style={styles.view6}>
            <View style={styles.retanguloBranco}></View>
            <View style={styles.retanguloBranco}></View>
            <View style={styles.retanguloBranco}></View>
            <View style={styles.retanguloBranco}></View>
          </View>
          <View style={styles.view7}>
            <View style={styles.retanguloVermelho}></View>
            <View style={styles.retanguloVermelho}></View>
            <View style={styles.retanguloVermelho}></View>
            <View style={styles.retanguloVermelho}></View>
          </View>
      </View>

      <View style={styles.container5}>
        <View style={styles.quadradoAzul}></View>
        <View style={styles.quadradoAzul}></View>
        <View style={styles.quadradoAzul}></View>
        <View style={styles.quadradoAzul}></View>
      </View>
      
    </View>
  );
}


