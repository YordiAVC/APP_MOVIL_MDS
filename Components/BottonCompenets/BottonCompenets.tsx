import React, { Children } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export type Props = {
    altura:number,
    anchura:number,
    title: string,
    size:number,
    sizeR:number,
    children:any,
    resumen:string,

};

const BottonCompenets: React.FC<Props> = ({
    title,
    altura=90,
    anchura=80,
    size=15,
    sizeR=15,
    children,
    resumen,
}) => {
    
  return (
    <TouchableOpacity style={{
                backgroundColor:'#ADADAD',
                paddingHorizontal:10,
                justifyContent:'space-between',
                alignItems:'center',
                flexDirection:'row-reverse',
                borderRadius:15,
                width:anchura,
                height:altura,
                gap:10}}>
        {children}
        <View style={styles.stresh}>
          <Text style={{ fontSize:size, color:'white', fontWeight:'500', textAlign:'left'}}>{title}</Text>
          <Text style={{ fontSize:sizeR, color:'white', fontWeight:'500', textAlign:'left'}}>{resumen}</Text>
        </View>
        
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
      stresh:{
        alignItems:'stretch',
      }

})

export default BottonCompenets