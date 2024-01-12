import React, { useState, useRef, FC, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {  } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'

type ElementsRadioProps = {};

const ElementsRadio: FC<ElementsRadioProps> = () => {

  return (
    <View style={[styles.container]}>
      <View style={[styles.contentContainer]}>
        <Text>No Radio component in Elements Library</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf:'center'
  },
});

export default ElementsRadio;