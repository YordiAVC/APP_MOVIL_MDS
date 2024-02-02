import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const ModoYSOSComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.caja_texto}>
        <Text style={styles.modo_txt}>Bienvenido </Text><Text style={styles.modo_txt_negrita}>Invitados</Text>
      </View>
      
      <View style={styles.caja_SOS}>
          <View style={styles.caja_SOS_text}>
            <Text style={styles.caja_SOS_txt}>Si tienes una emergencia{"\n"} aplasta el boton</Text>
          </View>
          <TouchableOpacity>
            <Image source={require('../../assets/icons/Botones/Group 36.png')}/>
          </TouchableOpacity>
      </View>
    </View>
  )
}
const styles= StyleSheet.create({
  container:{
    flex:2,
    padding:20,
    alignItems:'center',
    justifyContent:'center',
    
  },
  txt_centro:{
    textAlign:'center',
    fontSize:50,
    backgroundColor:'black',
    color:'white'
  },
  caja_texto:{
    backgroundColor:'#ffffff8d',
    padding:5,
    borderRadius:5,
    flex:1,
    textAlignVertical:'center',
    textAlign:'center',
    flexDirection:'row',
    alignSelf:'stretch',
    marginBottom:5
  },
  modo_txt:{
    color:'#0a0a0a',
    fontSize:20,
    fontWeight:'normal'
  },
  modo_txt_negrita:{
    color:'#0a0a0a',
    fontSize:20,
    fontWeight:'bold'
  },
  caja_SOS:{
    flex:1,
    padding:20,
    gap:20,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
    flexDirection:'row',
    backgroundColor:'rgba(255,255,255,0.7)',
    borderColor:'#dbdbdb',
    borderWidth:2
  },
  caja_SOS_text:{

  },
  caja_SOS_txt:{
    color:'#252525',
    fontSize:15,
    fontWeight:'500',
    textAlign:'center'
  }

})

export default ModoYSOSComponent