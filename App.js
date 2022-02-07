import React from 'react';

import {
  SafeAreaView,
} from 'react-native';


import Calcular from './src/pages/Calcular/component';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const App = () => {
  return (
    <SafeAreaView>
      <Calcular/>
      <FontAwesome5 name={'angle-left'} size={30}/>
    </SafeAreaView>
  );
};

export default App;
