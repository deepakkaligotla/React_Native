import React, { useState, useRef, FC, useEffect } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { MD2Colors, MD3Colors, Paragraph, Switch, Text, TouchableRipple, } from 'react-native-paper';

type PaperSwitchProps = {};

const PaperSwitch: FC<PaperSwitchProps> = () => {

  const [valueNormal, setNormalValue] = React.useState<boolean>(true);
  const [valueCustom, setCustomValue] = React.useState<boolean>(true);

  const switchValueNormalLabel = `switch ${valueNormal === true ? 'on' : 'off'
    }`;

  const switchValueCustomlLabel = `switch ${valueCustom === true ? 'on' : 'off'
    }`;

  return Platform.OS === 'android' ? (
    <View style={styles.container}>
      <TouchableRipple onPress={() => setNormalValue(!valueNormal)}>
        <View style={styles.row}>
          <Text>Normal {switchValueNormalLabel}</Text>
          <View pointerEvents="none">
            <Switch value={valueNormal} />
          </View>
        </View>
      </TouchableRipple>

      <TouchableRipple onPress={() => setCustomValue(!valueCustom)}>
        <View style={styles.row}>
          <Text>Custom {switchValueCustomlLabel}</Text>
          <View pointerEvents="none">
            <Switch
              value={valueCustom}
              trackColor={{ false: 'gray', true: 'gray' }}
              thumbColor={valueNormal ? 'green' : 'red'}
            />
          </View>
        </View>
      </TouchableRipple>

      <View style={styles.row}>
        <Text>Switch on (disabled)</Text>
        <Switch disabled value />
      </View>

      <View style={styles.row}>
        <Text>Switch off (disabled)</Text>
        <Switch disabled />
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Normal {switchValueNormalLabel}</Text>
        <Switch
          value={valueNormal}
          onValueChange={() => setNormalValue(!valueNormal)}
        />
      </View>

      <View style={styles.row}>
        <Text>Custom {switchValueCustomlLabel}</Text>
        <Switch
          value={valueCustom}
          onValueChange={() => setCustomValue(!valueCustom)}
          trackColor={{ false: 'gray', true: 'gray' }}
          thumbColor={valueNormal ? 'green' : 'red'}
        />
      </View>

      <View style={styles.row}>
        <Text>Switch on (disabled)</Text>
        <Switch value disabled />
      </View>

      <View style={styles.row}>
        <Text>Switch off (disabled)</Text>
        <Switch value={false} disabled />
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
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default PaperSwitch;