import React, { useState, useRef, FC, useEffect, useMemo } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Keyboard, TextInput, KeyboardAvoidingView, Dimensions } from 'react-native';
import { } from 'react-native-elements'
import { useTheme } from '../theme/ThemeContext';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons';

type SearchProps = {};

const Search: FC<SearchProps> = () => {
  const { commonStyles } = useTheme()
  const [searchQuery, setSearchQuery] = useState('');
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const generateSampleData = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, index) => ({
      id: start + index,
      title: `${start + index}`,
    }));
  };

  const sampleData = generateSampleData(1, 100);

  const filteredData = useMemo(() => {
    return sampleData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sampleData]);

  const updateSearch = (text: string) => {
    setSearchQuery(text);
  };

  function onPress(item: { id: number; title: string; }): void {
    console.log(item.title);
  }

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
    <KeyboardAvoidingView style={{ flex: isKeyboardOpen ? 3 : 1 }}>
      <View style={[styles.container]}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.contentContainer}>

          <View style={styles.searchBar}>

            <View style={{}}><EvilIcons name="search" size={36} style={styles.searchIcon} /></View>

            <TextInput
                value={searchQuery}
                onChangeText={(query) => {
                  setSearchQuery(query);
                }}
                style={[commonStyles.text, styles.input]}
                placeholder="Search..."
              />

            <View style={{}}><Ionicons name="mic-outline" size={24} style={styles.searchIcon} /></View>
          </View>

          {filteredData.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => onPress(item)}
              activeOpacity={0.7}
              style={styles.item}>
              <Text style={commonStyles.text}>{item.title}</Text>
            </TouchableOpacity>
          ))}
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
  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchBar: {
    flexDirection: 'row',
    padding: 2,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 30,
    width: Dimensions.get('window').width / 1.5,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  searchIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {

  },
  item: {
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
    margin: 5,
    borderRadius: 8,
  },
});

export default Search;