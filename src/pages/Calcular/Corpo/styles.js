import styled from "styled-components/native";
import { Header } from '../../../components/Header/components';
import { Text } from 'react-native';

export const ContainerCorpoCalcular = styled.View`
    height: 100%;
    flex-direction: row;
    background-color: #C9E5FF;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 500px;
    
`


export const ContainerBlocos = styled.View`
    height: 150px;
    width: 150px;
    background-color: #fafcff;
    border-radius: 20px;
    flex-direction: column;
    padding: 20px;
    align-items: center;
    justify-content: space-around;

`

export const Label = styled.Text`
    font-size: 18px;
    font-weight: bold;
`