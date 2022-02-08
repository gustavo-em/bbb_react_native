import * as React from 'react'
import { View, Text } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import NetInfo from '@react-native-community/netinfo';
import { Header } from '../../components/Header/components';
import { CorpoCalcular } from './Corpo/component';


export default function Calcular(){

 
    return ( 
        <View> 
            {/* <Text>Conect: {status.isConnected ? 'Yes' : 'No'}</Text> 
            <Text>isWifi: {status.isWifiEnabled ? 'Yes' : 'No'}</Text> 
            <FontAwesome5 name={'rocket'} size={30} color="#900"/>
           */}
            <Header/>
            <CorpoCalcular/>

        </View>
    )
}