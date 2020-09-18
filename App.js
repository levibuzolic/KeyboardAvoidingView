import * as React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Button,
} from 'react-native';

export default function App() {
  const [enabled, setEnabled] = React.useState(true);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        enabled={enabled}
        behavior="padding"
        style={styles.kav}>
        <ScrollView style={styles.inner} />
      </KeyboardAvoidingView>
      <View style={styles.overlay}>
        <TextInput style={styles.input} value="Input" />
        <Button
          style={styles.button}
          title={
            enabled
              ? 'Disable KeyboardAvoidingView'
              : 'Enable KeyboardAvoidingView'
          }
          onPress={() => setEnabled((x) => !x)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  kav: {
    flex: 1,
  },
  inner: {
    flex: 1,
    borderWidth: 10,
    borderColor: 'green',
  },
  overlay: {
    position: 'absolute',
    top: 80,
    left: 50,
    right: 50,
  },
  input: {
    backgroundColor: '#eee',
    padding: 10,
    fontSize: 20,
  },
});
