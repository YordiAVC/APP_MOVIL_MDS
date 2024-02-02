
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, ScrollView, StatusBar} from 'react-native';
import CabeGComponent from '../../Components/CabeGComponent/CabeGComponent';
import ModoYSOSComponent from '../../Components/ModoYSOSComponent/ModoYSOSComponent';
import BottonCompenets from '../../Components/BottonCompenets/BottonCompenets';
import SaludSVG from '../../assets/icons/alertas/SaludSVG';
import IncendioSVG from '../../assets/icons/alertas/IncendioSVG';
import LimpiezaSVG from '../../assets/icons/alertas/LimpiezaSVG';
import TransporteSVG from '../../assets/icons/alertas/TransporteSVG';
import AmbientalSVG from '../../assets/icons/alertas/AmbientalSVG';
import FizcalizacionSVG from '../../assets/icons/alertas/FizcalizacionSVG';



const HomeScreens = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true}/>
        <CabeGComponent/>
        <ImageBackground source={require('../../assets/fondos/WhatsAppImage2024-01-18at2.14.45PM(2).jpeg')} style={styles.centro}>
        <ScrollView style={styles.scroll_container}>
              <ModoYSOSComponent/>
              <View style={styles.centro_2}>

                  <BottonCompenets title='SALUD' altura={80} anchura={140} size={15} children={undefined} resumen={'Vigilancia\nsanitaria'} sizeR={10}>
                    <SaludSVG/>
                  </BottonCompenets>

                  <BottonCompenets title='INCENDIO' altura={80} anchura={140} size={15} children={undefined} resumen={'Salvando\nvidas del\nIncendio.'} sizeR={10}>
                    <IncendioSVG/>
                  </BottonCompenets>

                  <BottonCompenets title='LIMPIEZA' altura={80} anchura={140} size={15} children={undefined} resumen={'Alerta\nde recojo de\nbasura.'} sizeR={10}>
                    <LimpiezaSVG/>
                  </BottonCompenets>

                  <BottonCompenets title='TRANSPORTE' altura={80} anchura={140} size={12} children={undefined} resumen={'Sémaforos y\nauxilio vial.'} sizeR={10}>
                    <TransporteSVG/>
                  </BottonCompenets>

                  <BottonCompenets title='AMBIENTAL' altura={80} anchura={140} size={14} children={undefined} resumen={'Limpieza y\nárea verdes.'} sizeR={10}>
                    <AmbientalSVG/>
                  </BottonCompenets>

                  <BottonCompenets title='FIZCALIZACIÓN' altura={80} anchura={140} size={12} children={undefined} resumen={'Reporte de\n Denuncias'} sizeR={10}>
                    <FizcalizacionSVG/>
                  </BottonCompenets>
                  


              </View>
        </ScrollView>        
        </ImageBackground>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    centro:{
      flex:5,
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'stretch',
      backgroundColor:'#474747',
      zIndex:1,
    },
    navegador:{
      flex:0.5,
      gap:5,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'stretch',
      backgroundColor:'white',
      borderTopColor:'#636363',
      borderTopWidth:3
    },
    tab_btn:{
      alignItems:'center',
      justifyContent:'center',
      width:59,
      height:59,
      borderColor:'#5f5f5f',
    },
    centro_2:{
      flex:2,
      padding:10,
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'center',
      flexWrap:'wrap',
      alignSelf:'stretch',
      gap:15,
      backgroundColor:'#e9e9e9d5'
    },
    txt:{
        fontSize:50,
    },
    scroll_container:{
      flex:4,
      alignSelf:'stretch',
    }
})

export default HomeScreens