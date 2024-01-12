import React, { useState, useRef, FC, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { } from 'react-native-elements'

type SheetProps = {};

const Sheet: FC<SheetProps> = () => {

  return (
    <View style={[styles.container]}>
      <ScrollView
        horizontal={false}
        contentContainerStyle={styles.contentContainer}>
        <Text>No Radio component in Elements Library</Text>
      </ScrollView>
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

export default Sheet;