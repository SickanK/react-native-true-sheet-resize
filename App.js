import { TrueSheet } from '@lodev09/react-native-true-sheet';
import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const sheet = useRef(null)
  const [state, setState] = useState(false)
  const presentRef = useRef(false)

  const presentTrue = () => {
    presentRef.current = true
    sheet.current?.present()
  }

  const presentFalse = () => {
    presentRef.current = false
    sheet.current?.present()
  }

  const dismiss = () => {
    sheet.current?.dismiss()
  }

  return (
    <>
      <View style={styles.container}>
        <Button onPress={presentTrue} title="Present Green Large" />
        <Button onPress={presentFalse} title="Present Blue Small" />
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      <TrueSheet
        ref={sheet}
        sizes={state ? ["medium"] : ["large"]}
        cornerRadius={24}
        onPresent={() => {
          console.log('present', presentRef.current)
          setState(presentRef.current)
        }}
        onDismiss={dismiss}
      >
        <Button onPress={dismiss} title="Dismiss" />
        {state === true ? <View style={styles.sheetLarge} />
          : <View style={styles.sheetSmall} />}
      </TrueSheet>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sheet: {
    marginTop: 20,
  },
  sheetLarge: {
    height: 200,
    backgroundColor: 'green',
  },
  sheetSmall: {
    backgroundColor: 'blue',
    height: 100,
  },
});
