import React, { useState, useRef, FC, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {  } from 'react-native-elements'

type TooltipProps = {};

const Tooltip: FC<TooltipProps> = () => {

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
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center'
  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default Tooltip;