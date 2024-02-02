import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const CabeceraComponent = () => {
  return (
    <View style={styles.cabecera}>
        <Text style={styles.txt_left}>el cambio {"\n"}es ahora</Text>
        <Image
          style={styles.img_digital}
          source={require('../../assets/img/mds_digital_R.png')}
        />
      </View>
  )
}
const styles = StyleSheet.create({
    cabecera:{
      flex:1,
      padding:25,
      backgroundColor:'white',
      shadowColor: "black",
      shadowOffset: {
        width: 15,
        height: 15,
      },
      shadowOpacity: 1,
      shadowRadius: 5,
      elevation: 8,
      alignSelf:'stretch',
      zIndex:2
    },
    img_digital:{
      alignSelf:'center',
      transform: [{translateY:-15}]
    },
    caja_text:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      paddingLeft:40,
      paddingRight:40
    },
    caja_text_titulo:{
      color:'#4DA34F',
      fontWeight:'bold',
      fontSize:20
    },
    txt_left:{
        color:'#434546',
        fontSize:15,
    }
  });

export default CabeceraComponent