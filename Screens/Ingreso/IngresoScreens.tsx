import React from 'react'
import { View, StyleSheet, Text, ImageBackground, Button, TouchableOpacity} from 'react-native'
import CabeceraComponent from '../../Components/Cabazera/CabeceraComponent'

const IngresoScreens = () => {
  return (
    <ImageBackground style={styles.container}>
        
        <CabeceraComponent/>

        <ImageBackground source={require('../../assets/fondos/WhatsAppImage2024-01-18at2.14.45PM(2).jpeg')} style={styles.caja_botones}>
            
                <TouchableOpacity style={styles.botones}>
                    <Text style={styles.txt_btn}>INGRESAR COMO INVITADO</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.botones , styles.btn_celeste]}>
                    <Text style={styles.txt_btn}>INGRESAR / REGISTRAR</Text>
                </TouchableOpacity>
        </ImageBackground>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    caja_botones:{
        flex:4,
        justifyContent:'center',
        alignItems:'center',
    },
    botones:{
        alignItems:'center',
        backgroundColor:'green',
        paddingTop:17,
        paddingBottom:17,
        paddingLeft:10,
        paddingRight:10,
        borderRadius:30,
        width:250,
        margin:50
    },
    btn_celeste:{
        backgroundColor: '#2693BE',
    },
    txt_btn:{
        color:'white',
        fontWeight:'700',
    }
});
export default IngresoScreens