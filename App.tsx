import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from './Navigator';
export default function App() {

  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <StatusBar style='auto' hidden={true}/>
      {/* <InicioScreens/> */}
      {/* <ResumenScreens/> */}
      {/* <IngresoScreens/> */}
      {/* <HomeScreens/> */}
      <Navigator/>
    </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:'white',
      fontFamily:'Roboto',
  },
});

