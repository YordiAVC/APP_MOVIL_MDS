import { useState } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
const InicioScreens  = () => {
  const [vers, setVers] = useState('0.0.1')
    
  return (
    <View style={styles.container}>
        <Image
        style={styles.img_logo}
        source={require('../../assets/img/mds_digital.png')}
        />
        <Image
        style={styles.img_escudo}
        source={require('../../assets/img/mds_escudo.png')}
        />
        <Text
        style={styles.tx_ver}
        >
        version: {vers} alpha
        </Text>
        <Image
        style={styles.img_btn}
        source={require('../../assets/icons/Botones/Subtract.png')}
        />
    </View>
    
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 6,
        display:'flex',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img_logo:{
      backgroundColor:'#00000000'
    },
    img_escudo:{
      position:'absolute',
      bottom:45
    },
    tx_ver:{
      color:'#00000088',
      position:'absolute',
      fontSize:12,
      bottom:15,
      left:15
    },
    img_btn:{
      position:'absolute',
      bottom:15,
      right:15
    }
});
  

export default InicioScreens