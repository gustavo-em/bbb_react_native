import React from 'react'
import { View,Text } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Container, TextoHeader } from './styles';
export const Header = ()=>{
    return (
        <>
            <Container>
             <FontAwesome5 name={'angle-left'} size={30} color="#1970CB"/>
             <TextoHeader>Status Connection</TextoHeader>
             <FontAwesome5 name={'bars'} size={30} color="#1970CB"/>
            </Container>
        </>
    )
}