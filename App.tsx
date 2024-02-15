import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingLarge" bold italic style={{color: 'red'}}>
        Coffstack
      </Text>
      <Text
        preset="headingLarge"
        semibold
        style={{fontFamily: 'Satoshi-BlackItalic'}}>
        Coffstack
      </Text>
      <Text
        preset="headingLarge"
        semibold
        italic
        style={{fontFamily: 'Satoshi-Black'}}>
        Coffstack
      </Text>
    </SafeAreaView>
  );
}

export default App;
