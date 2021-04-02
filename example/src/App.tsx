import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import Randomness from 'react-native-randomness';

export default function App() {
  const [result, setResult] = React.useState<any | undefined>();

  React.useEffect(() => {
    Randomness.random(16).then( (data) => {
      console.log("Randomness in JS", data)
      setResult(data)
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result ? result.toString() : 'N/A'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
