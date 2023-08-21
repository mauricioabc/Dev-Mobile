import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container1: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },

    container2: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end'
      },

    coral: {
        width: 100,
        height: 100, 
        backgroundColor: 'lightcoral'
    },

    azul: {
        width: 100,
        height: 100, 
        backgroundColor: 'blue'
    },


  });

  export default styles;