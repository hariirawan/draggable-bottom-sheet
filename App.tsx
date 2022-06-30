/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetRefProps} from './components/BottomSheet';

const App = () => {
  const refBottomSheet = useRef<BottomSheetRefProps>(null);

  const triggerBottomSheet = () => {
    const isActive = refBottomSheet?.current?.isActive?.();

    if (isActive) {
      refBottomSheet?.current?.scrollTo?.(0);
    } else {
      refBottomSheet?.current?.scrollTo?.(-400);
    }
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={triggerBottomSheet}>
          <Text style={{color: 'white'}}>Show Bottom Sheet</Text>
        </TouchableOpacity>
      </View>

      <BottomSheet ref={refBottomSheet}>
        <View>
          {Array.from(Array(5)).map((val, key) => {
            return (
              <View key={key} style={styles.item}>
                <View>
                  <Text>Hari Irawan</Text>
                  <Text>087666673246</Text>
                </View>

                <View style={styles.radioButton}></View>
              </View>
            );
          })}
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021736',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
  },
  item: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 40,
    backgroundColor: 'blue',
  },
});

export default App;
