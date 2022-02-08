import React from 'react'
import { ContainerBlocos, ContainerCorpoCalcular, Label } from './styles'
import DropShadow from "react-native-drop-shadow";
import { Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import NetInfo from '@react-native-community/netinfo';


export const CorpoCalcular = ()=>{

    const [status, setStatus] = React.useState(false)
    
    React.useEffect(()=>{ 
        NetInfo.addEventListener(state => {
            console.log(state)
            setStatus(state)    
        });
    })

    return (
        <>
        
            <ContainerCorpoCalcular>

                <DropShadow style={{                
                    shadowColor: "#000",
                    shadowOffset: {
                    width: 0,
                    height: 0,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 5,
                }}>
                    
                    <ContainerBlocos>
                        <Label>Connected</Label>
                        <FontAwesome5 name={'signal'} size={30} color={status.isConnected ? "#1970CB" : "#b92c2c"}/>
                    </ContainerBlocos>
                </DropShadow>

                <DropShadow style={{                
                    shadowColor: "#000",
                    shadowOffset: {
                    width: 0,
                    height: 0,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 5,
                }}>
                    
                    <ContainerBlocos>
                        <Label>Is WiFi</Label>
                        <FontAwesome5 name={'wifi'} size={30} color={status.isWifiEnabled ? "#1970CB" : "#b92c2c"}/>
                    </ContainerBlocos>
                </DropShadow>

            </ContainerCorpoCalcular>
        </>
    )
}