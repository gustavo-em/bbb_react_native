import React from 'react';

import {
  SafeAreaView,
} from 'react-native';


import Calcular from './src/pages/Calcular/component';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const App = () => {
  return (
    <SafeAreaView style={{flex: 1, boxSizing: 'border-box'}}>
      <Calcular/>
    </SafeAreaView>
  );
};

export default App;
