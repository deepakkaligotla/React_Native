import React, { useState, FunctionComponent } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

type DividerProps = {};

const Divider: FunctionComponent<DividerProps> = () => {
  const { commonStyles } = useTheme()

  const items = ['Black', 'Yellow', 'Blue', 'Violet', 'Green', 'Red'];

  return (
    <View style={styles.container}>
      <Text style={[{ textAlign: 'center', fontSize: 24 }, commonStyles.text]}>Divider</Text>
      <FlatList
        style={{borderWidth:1, flexWrap:'wrap', backgroundColor:'gray', alignContent:'center', padding: 10}}
        renderItem={({ item }) => 
        <View>
          <Text style={[commonStyles.text]}>{item}</Text>
          <View style={[styles.divider]}/>
        </View>}
        keyExtractor={(item) => item}
        data={items}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: 'white',
    marginVertical: 10,
  }
});

export default Divider;