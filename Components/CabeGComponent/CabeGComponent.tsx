import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import BarsSVG from '../../assets/icons/Botones/BarsSVG';


const CabeGComponent = () => {
  return (
    <View style={styles.container}>

        <BarsSVG/>

        <Image style={styles.img_logo} source={require('../../assets/img/Group 39.png')}/>

        <View style={styles.barra_inicio}>

          <View style={[styles.caja,styles.alarma]}>

          <Image source={require('../../assets/icons/Vector (1).png')}></Image>

          </View>

          <View style={[styles.caja,styles.usuario]}>

            <Image source={require('../../assets/icons/user-alt.png')}></Image>

          </View>

          <TouchableOpacity style={styles.barra_modo}>
          
            <Text style={styles.txt_barra_modo}>Modo Invitado</Text>
          
          </TouchableOpacity>

        </View>


    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignSelf:'stretch',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:20,
        shadowColor: "black",
        shadowOffset: {
	      width: 10,
	      height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 12,
        zIndex:2
    },
      img_icon_menu:{
        position:'absolute',
        left:20,
        top:20
    },
    img_logo:{
    },
    barra_inicio:{
      position:'absolute',
      top:5,
      right:10,
      padding:5,
      gap:10,
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'row',
      backgroundColor:'#00000000',
    },
    caja:{
      justifyContent:'center',
      alignItems:'center',
      width:20,
      height:20,
      borderRadius:30,
      shadowColor: "#000000",
      shadowOffset: {
	    width: 0,
	    height: 0,
      },
      shadowOpacity: 1,
      shadowRadius: 1,
      elevation: 5,
    },
    usuario:{
      backgroundColor:'#ffffff'
    },
    alarma:{
      backgroundColor:'#ffffff'
    },
    barra_modo:{
      paddingLeft:10,
      paddingRight:10,
      paddingTop:5,
      paddingBottom:5,
      backgroundColor:'#CC325A',
      borderRadius:30
    },
    txt_barra_modo:{
      color:'white',
      fontSize:12,
      fontWeight:'700'
    }

})

export default CabeGComponent