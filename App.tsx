import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import {Text} from './src/components/Text/Text'

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <Text preset='headingLarge' style={{color: 'red'}}>Teste</Text>
      <Text preset='headingMedium' style={{color: 'red'}}>Teste</Text>
      <Text preset='headingSmall'  style={{color: 'red'}}>Teste</Text>
      <Text preset='headingMedium'>Teste</Text>
      <Text preset='paragraphLarge'>Teste</Text>
      <Text preset='paragraphMedium'>Teste</Text>
    </SafeAreaView>
  );
}

export default App;
