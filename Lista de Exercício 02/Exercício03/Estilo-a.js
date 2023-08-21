import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container1: {
      flex: 1,
      flexDirection: 'row'
    },
    container2: {
        flex: 1,
        alignItems: 'center'
      },

    coral: {
        width: '25%',
        height:'100%', 
        backgroundColor: 'lightcoral'
    },

    azul: {
        width: '30%',
        height:'100%', 
        backgroundColor: 'lightblue'
    },

    verde: {
        width: '30%',
        height:'100%', 
        backgroundColor: 'lightgreen'
    },

    roxo: {
        width: '100%',
        height:'100%', 
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center'
    },

    amarelo: { 
        width: 100,
        height:100, 
        backgroundColor: 'yellow'
    },

  });

  export default styles;