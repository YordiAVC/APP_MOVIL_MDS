import React from 'react'
import { View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreens from './Screens/Home/HomeScreens';
import IngresoScreens from './Screens/Ingreso/IngresoScreens';
import InicioScreens from './Screens/Inicio/Iniciocreens';
import ResumenScreens from './Screens/Resumen/ResumenScreens';
import SeguridadScreens from './Screens/Seguridad/SeguridadScreens';
import AmbientalScreens from './Screens/Ambiental/AmbientalScreens';
import SocialScreens from './Screens/Social/SocialScreens';
import RentaScreens from './Screens/Renta/RentaScreens';
import EconomicoScreens from './Screens/Economico/EconomicoScreens';
import UrbanoScreens from './Screens/Urbano/UrbanoScreens';

const Tab = createBottomTabNavigator(); 

function MyTab (){
    return(
        <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
            tabBarActiveTintColor:'#222222',
        }}
        
        >
            <Tab.Screen 
                name="Home" 
                component={HomeScreens}
                options={{
                    headerShown:false,
                }} />
            <Tab.Screen 
                name="Ingreso" 
                component={IngresoScreens}
                options={{
                    headerShown:false,
                }}/>
            <Tab.Screen 
                name="Inicio" 
                component={InicioScreens} 
                options={{
                    headerShown:false,
                }}/>
            <Tab.Screen 
                name="Resumen" 
                component={ResumenScreens}
                options={{
                    headerShown:false,
                }} />
            
            <Tab.Screen 
                name="Seguridad" 
                component={SeguridadScreens}
                options={{
                    headerShown:false,
                }} />
            <Tab.Screen 
                name="Ambiental" 
                component={AmbientalScreens}
                options={{
                    headerShown:false,
                }} />
            <Tab.Screen 
                name="Social" 
                component={SocialScreens}
                options={{
                    headerShown:false,
                }} /> 
            <Tab.Screen 
                name="Renta" 
                component={RentaScreens}
                options={{
                    headerShown:false,
                }} /> 
            <Tab.Screen 
                name="ECONÓMICO" 
                component={EconomicoScreens}
                options={{
                    headerShown:false,
                }} />
            <Tab.Screen 
                name="URBANO" 
                component={UrbanoScreens}
                options={{
                    headerShown:false,
                }} /> 
        </Tab.Navigator>
    )
}

export default function  Navigator(){
    return(
        <NavigationContainer>
            <MyTab/>
        </NavigationContainer> 
    );
}