import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import CabeGComponent from '../../Components/CabeGComponent/CabeGComponent'
import CajaComponent from '../../Components/CajaComponent/CajaComponent'
import BottonCompenets from '../../Components/BottonCompenets/BottonCompenets'
import IconSeguridadSVG from '../../assets/icons/Botones/IconSeguridadSVG'
import IcoGpsSVG from '../../assets/icons/Botones/IcoGpsSVG'

const SocialScreens = () => {
  return (
    <View style={styles.container}>
        <CabeGComponent/>
        <View style={styles.caja_botones}>
        
            <CajaComponent children={undefined} titulo={'SOCIAL'}>
           <Image style={styles.caja_img}  source={require('../../assets/fondos/WhatsAppImage2024-01-19at12.20.00PM(1).jpeg')}/>
           <View style={styles.caja_btns}>

            <BottonCompenets altura={80} anchura={120} title={'Opcion 1'} size={15} sizeR={10} children={undefined} resumen={'Descripcion'}>
                <IconSeguridadSVG />
            </BottonCompenets>

            <BottonCompenets altura={80} anchura={120} title={'Ubicación'} size={15} sizeR={10} children={undefined} resumen={'Descripcion'}>
                    <IcoGpsSVG/>
            </BottonCompenets>

            <BottonCompenets altura={80} anchura={120} title={'Opcion 1'} size={15} sizeR={10} children={undefined} resumen={'Descripcion'}>
                <IconSeguridadSVG />
            </BottonCompenets>

            </View>
            </CajaComponent>

        
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center'
    },
    caja_img:{
        flex:6,
        width:400
    },
    caja_btns:{
        flex:3,
        flexWrap:'wrap',
        gap:5,
        paddingTop:30,
        flexDirection:'row',
        justifyContent:'center',
        alignSelf:'stretch',
        alignItems:'center',
    },
    caja_botones:{
        backgroundColor:'black',
        flex:5,
        alignContent:'flex-start',
        alignSelf:'stretch',
    }
})

export default SocialScreens