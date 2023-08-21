import { StyleSheet } from 'react-native'

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
      justifyContent: 'space-evenly',
      backgroundColor: 'blue'
    },

    quadradoPreto: {
      width: 40,
      height: '50%', 
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
      width: 10,
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
    width: 100,
    height: '40%', 
    backgroundColor: 'peru',
  },

  retanguloBranco: {
    width: 60,
    height: 60, 
    backgroundColor: 'white',
    borderRadius: 15,
  },

  retanguloVermelho: {
    width: 60,
    height: 10, 
    backgroundColor: 'red',
  },


  });

  export default styles;