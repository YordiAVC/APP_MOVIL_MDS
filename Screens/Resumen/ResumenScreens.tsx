import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ResumenScreens = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cabecera}>

        <Text style={styles.txt_left}>el cambio {"\n"}es ahora</Text>
        <Image
          style={styles.img_digital}
          source={require('../../assets/img/mds_digital_R.png')}
        />
      </View>

      <View style={styles.centro}>
        <Image
          style={styles.img_estadistica}
          source={require('../../assets/img/Group 10.png')}
        />
      </View>

      <View style={styles.caja_text}>
          <Text style={styles.caja_text_titulo}>Titulos (para el resumen)</Text>
          <Text style={styles.caja_text_parrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      </View>

      <View style={styles.pie}>
            <View style={styles.btn_slider}></View>
            <View style={styles.btn_slider}></View>
            <View style={styles.btn_slider}></View>
            <View style={styles.btn_slider}></View>
            <Image style={styles.btn_sig} source={require('../../assets/icons/Botones/Subtract.png')}/>
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex:6,
  },
  cabecera:{
    flex:1.5,
    padding:20,
    marginTop:20,
    backgroundColor:'white',
    shadowColor: "black",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 10,
  },
  img_digital:{
    alignSelf:'center',
    transform: [{translateY:-15}]
  },
  centro:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:6,
    backgroundColor:'white'
  },
  img_estadistica:{
    resizeMode:'contain',
  },
  caja_text:{
    flex:1.25,
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
  caja_text_parrafo:{
    fontSize:10,
    textAlign:'center'
  },
  pie:{
    flex:1.25,
    padding:0,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-start',
    gap:10,
    backgroundColor:'white'
  },
  btn_slider:{
    borderRadius:30,
    width:15,
    height:15,
    backgroundColor:'black'
  },
  btn_sig:{
    position:'absolute',
    bottom:25,
    right:25
  },
  txt_left:{
    color:'#434546',
    fontSize:15,

  }
})


export default ResumenScreens