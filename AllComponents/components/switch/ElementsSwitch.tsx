import React, { useState, useRef, FC, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Switch } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'

type ElementsSwitchProps = {};

const ElementsSwitch: FC<ElementsSwitchProps> = () => {
  const [switchVisible, setSwitchVisible] = useState(false)

  return (
    <View style={[styles.container]}>
      <View style={[styles.contentContainer]}>
        <View style={styles.row}>
          <Text>Normal switch</Text>
          <Switch value={switchVisible} onValueChange={() => { setSwitchVisible(!switchVisible) }}/>
        </View>

        <View style={styles.row}>
          <Text>Custom props switch</Text>
          <Switch
            value={switchVisible}
            onValueChange={() => { setSwitchVisible(!switchVisible) }}
            trackColor={{ false: 'gray', true: 'gray' }}
            thumbColor={switchVisible ? 'green' : 'red'} />
        </View>

        <View style={styles.row}>
          <Text>Default with switch on</Text>
          <Switch disabled value trackColor={{ false: 'tansparent' }} />
        </View>

        <View style={styles.row}>
          <Text>Default with switch off</Text>
          <Switch disabled />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center'
  },
  contentContainer: {
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});

export default ElementsSwitch;