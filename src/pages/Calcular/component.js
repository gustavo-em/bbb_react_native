import * as React from 'react'
import { View, Text } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import NetInfo from '@react-native-community/netinfo';


export default function Calcular(){

    const [status, setStatus] = React.useState(false)
    
    React.useEffect(()=>{
        NetInfo.addEventListener(state => {
            console.log(state)
            setStatus(state)    
        });
    })
 
    return ( 
        <View> 
            <Text>Conect: {status.isConnected ? 'Yes' : 'No'}</Text> 
            <Text>isWifi: {status.isWifiEnabled ? 'Yes' : 'No'}</Text> 
            <FontAwesome5 name={'rocket'} size={30} color="#900"/>
          
        </View>
    )
}