import React from 'react';
import { View, StyleSheet } from 'react-native';

const Exercicio_6 = () => {
  return (
    <View style={{flex:1}}>
      <View style = {styles.container1}>
        <View style={styles.view1}>
          <View style={styles.quadradoPreto}></View>
          <View style={styles.retanguloRosa}></View>
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

const styles = StyleSheet.create({
    container1: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    container2: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
      },
    container3: {
      flex: 2,
      justifyContent: 'center',
    },
    container4: {
      flex: 3,
      alignItems: 'center',
      backgroundColor: 'lightsteelblue'
    },
    container5: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: 'blue'
    },
    quadradoPreto: {
      width: 40,
      height: '50%', 
      marginLeft: 10,
      backgroundColor: 'black',
    },
    retanguloRosa: {
      width: 80,
      height: '50%', 
      backgroundColor: 'pink',
    },
    view1:{
      flex: 1, 
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent:'center'
    },
    view2: {
        width: '80%',
        height: '80%', 
        backgroundColor: 'lightcoral',
        borderRadius: 25
    },
    view3: {
      width: '100%',
      height: '45%', 
      backgroundColor: 'mistyrose',
    },
    view4: {
      width: '100%',
      height: '45%', 
      backgroundColor: 'moccasin',
    },
    view5: {
      flexDirection: 'row',
      width: '100%',
      height: 60, 
      justifyContent:'space-evenly',
      alignItems:'flex-end',
    },
    view5_1: {
      width: 159,
      height: '100%', 
      justifyContent:'center',
      alignItems:'flex-start',
    },
    view6: {
      flexDirection: 'row',
      justifyContent:'space-around',
      alignItems:'center',
      width: '100%',
      height: 90, 
    },
    view7: {
      flexDirection: 'row',
      justifyContent:'space-around',
      alignItems:'flex-start',
      width: '100%',
      height: 90,
    },
    quadradoAzul: {
        width: 60,
        height: 60, 
        backgroundColor: 'lightblue',
    },
    retanguloMarrom: {
      width: 90,
      height: 30, 
      backgroundColor: 'peru',
    },
    retanguloBranco: {
      width: 60,
      height: 60, 
      backgroundColor: 'moccasin',
      borderRadius: 15,
    },
    retanguloVermelho: {
      width: 60,
      height: 10, 
      backgroundColor: 'red',
    },
  });

export default Exercicio_6;