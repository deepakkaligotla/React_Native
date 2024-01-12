import React, { useState, useRef, FC, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { SearchBar } from 'react-native-elements'
import { useTheme } from '../theme/ThemeContext';

type ElementsSearchProps = {};

const ElementsSearch: FC<ElementsSearchProps> = () => {

  const { commonStyles } = useTheme()
  const [searchQuery, setSearchQuery] = useState('');
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardOpen(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardOpen(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView style={{ flex: isKeyboardOpen ? 2 : 1 }}>
      <View style={styles.container}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.contentContainer}>

          <View style={styles.searchBar}>
            <Text>Android platform</Text>
            <SearchBar
              placeholder="Type Here..."
              value={searchQuery}
              onChangeText={() => { }}
              onBlur={() => { }}
              onFocus={() => { }}
              platform={Platform.OS == "android" ? "android" : Platform.OS == "ios" ? "ios" : "default"}
              clearIcon={{ type: 'material', name: 'clear' }}
              searchIcon={{ type: 'material', name: 'search' }}
              loadingProps={{ animating: true }}
              showLoading={searchQuery !== ''}
              onClear={() => { setSearchQuery('') }}
              onCancel={() => { setSearchQuery('') }}
              lightTheme={false}
              round={true}
              cancelButtonTitle=""
              cancelButtonProps={{ color: 'black' }}
              showCancel />

            <Text>default platform</Text>
            <SearchBar
              placeholder="Type Here..."
              value={searchQuery}
              onChangeText={() => { }}
              onBlur={() => { }}
              onFocus={() => { }}
              platform="default"
              clearIcon={{ type: 'material', name: 'clear' }}
              searchIcon={{ type: 'material', name: 'search' }}
              loadingProps={{ animating: true }}
              showLoading={searchQuery !== ''}
              onClear={() => { setSearchQuery('') }}
              onCancel={() => { setSearchQuery('') }}
              lightTheme={false}
              round={true}
              cancelButtonTitle=""
              cancelButtonProps={{ color: 'black' }}
              showCancel />
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  searchBar: {
    width: Dimensions.get('window').width / 1.5,
  },
});

export default ElementsSearch;