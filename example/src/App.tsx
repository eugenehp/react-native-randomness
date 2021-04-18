import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { randomBytes } from 'react-native-randomness';

export default function App() {
  const [result, setResult] = React.useState<any | undefined>();

  React.useEffect(() => {
    randomBytes().then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>True random result:</Text>
      <Text>{result ? `[${result.join(',')}]` : 'N/A'}</Text>
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
