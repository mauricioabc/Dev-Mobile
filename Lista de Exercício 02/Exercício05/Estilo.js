import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container1: {
    flex: 0.5,
    backgroundColor: 'grey'
  },

  container2: {
    flex: 2.5,
    alignItems: 'center',
    justifyContent: 'center'
  },

  container3: {
      flex: 4.5,
      backgroundColor: 'lightcoral'
    },

    container4: {
      flex: 2,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },

  circulo: {
      width: 100,
      height: 100, 
      backgroundColor: 'blue',
      borderColor: 'black',
      borderWidth: 3,
      borderRadius: 50
  },

  retangulo: {
      width: 100,
      height: 60, 
      borderColor: 'black',
      borderWidth: 3,
      borderRadius: 20
  },


  });

  export default styles;