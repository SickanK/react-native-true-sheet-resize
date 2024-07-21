import { TrueSheet } from '@lodev09/react-native-true-sheet';
import { StatusBar } from 'expo-status-bar';
import { useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const sheet = useRef(null)
  const scrollViewRef = useRef(null)
  const [state, setState] = useState(null)

  const presentTrue = () => {
    setState(true)
  }

  const presentFalse = () => {
    setState(false)
  }

  const dismiss = () => {
    setState(null)
    sheet.current?.dismiss()
  }

  useEffect(() => {
    if (state !== null) {
      sheet.current?.present()
    }
  }, [state])

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
        sizes={['auto', "large"]}
        cornerRadius={24}
        scrollRef={scrollViewRef}
        onDismiss={dismiss}
      >
        <View>
          <Button onPress={dismiss} title="Dismiss" />
          {state === null ? <View /> : state === true ? <View style={styles.sheetLarge} />
            : <View style={styles.sheetSmall} />}
        </View>
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
