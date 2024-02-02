import React from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native'

export type Props={
    children:any
    titulo:string
}

const CajaComponent:React.FC<Props> = ({
    children,
    titulo,
}) => {
  return (
    <View style={styles.caja}>
        <View style={styles.txt_caja}>
            <Text style={styles.txt}>{titulo}</Text>
        </View>
        {children}
    </View>
  )
}
const styles=StyleSheet.create({
    caja:{
        flex:4,
        backgroundColor:'#eee',
        alignSelf:'stretch',
        justifyContent:'center',
        alignItems:'center'
    },
    txt_caja:{
        padding:20,
        alignSelf:'stretch',
        backgroundColor:'white'  
    },txt:{
        fontSize:20,
        fontWeight:'700',
        color:'#434546'
    }
})
export default CajaComponent