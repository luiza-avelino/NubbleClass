import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import {Text} from './src/components/Text/Text'

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <Text preset='headingLarge' style={{color: 'red'}}>Coffstack</Text>
      <Text preset='headingLarge' style={{fontFamily: 'Satoshi-BlackItalic'}}>Coffstack</Text>
      <Text preset='headingLarge' style={{fontFamily: 'Satoshi-Black'}}>Coffstack</Text>
    </SafeAreaView>
  );
}

export default App;