import React, { useState, useRef, FC, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, Keyboard, KeyboardAvoidingView, Dimensions } from 'react-native';
import { Avatar, List, MD3Colors, Searchbar } from 'react-native-paper';

type PaperSearchProps = {};

const PaperSearch: FC<PaperSearchProps> = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const [searchQueries, setSearchQuery] = React.useState({
    searchBarMode: '',
    traileringIcon: '',
    traileringIconWithRightItem: '',
    rightItem: '',
    loadingBarMode: '',
    searchViewMode: '',
    searchWithoutBottomLine: '',
    loadingViewMode: '',
    clickableBack: '',
    clickableDrawer: '',
    clickableLoading: '',
  });

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
      <View style={[styles.container]}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.contentContainer}>

          <Searchbar
            placeholder="Search"
            onChangeText={(query) =>
              setSearchQuery({ ...searchQueries, searchBarMode: query })
            }
            value={searchQueries.searchBarMode}
            style={styles.searchbar}
            mode='view'/>

          <List.Section title="Bar mode">
            <Searchbar
              placeholder="Search"
              onChangeText={(query) =>
                setSearchQuery({ ...searchQueries, searchBarMode: query })
              }
              value={searchQueries.searchBarMode}
              style={styles.searchbar}
              mode="bar"
            />
            <Searchbar
              placeholder="Trailering icon"
              onChangeText={(query) =>
                setSearchQuery({ ...searchQueries, traileringIcon: query })
              }
              value={searchQueries.traileringIcon}
              traileringIcon={'microphone'}
              traileringIconColor={
                isVisible ? MD3Colors.error40 : 'white'
              }
              traileringIconAccessibilityLabel={'microphone button'}
              onTraileringIconPress={() => setIsVisible(true)}
              style={styles.searchbar}
              mode="bar"
            />
            <Searchbar
              mode="bar"
              placeholder="Trailering icon with right item"
              onChangeText={(query) =>
                setSearchQuery({
                  ...searchQueries,
                  traileringIconWithRightItem: query,
                })
              }
              value={searchQueries.traileringIconWithRightItem}
              traileringIcon={'microphone'}
              traileringIconColor={
                isVisible ? MD3Colors.error40 : 'white'
              }
              traileringIconAccessibilityLabel={'microphone button'}
              onTraileringIconPress={() => setIsVisible(true)}
              right={(props) => (
                <Avatar.Image
                  {...props}
                  size={30}
                  source={{ uri: 'https://reactnative.dev/img/logo-og.png' }}
                />
              )}
              style={styles.searchbar}
            />
            <Searchbar
              mode="bar"
              placeholder="Right item"
              onChangeText={(query) =>
                setSearchQuery({
                  ...searchQueries,
                  rightItem: query,
                })
              }
              value={searchQueries.rightItem}
              right={(props) => (
                <Avatar.Image
                  {...props}
                  size={30}
                  source={{ uri: 'https://reactnative.dev/img/logo-og.png' }}
                />
              )}
              style={styles.searchbar}
            />
            <Searchbar
              placeholder="Loading"
              onChangeText={(query) =>
                setSearchQuery({
                  ...searchQueries,
                  loadingBarMode: query,
                })
              }
              value={searchQueries.loadingBarMode}
              style={styles.searchbar}
              mode="bar"
              loading
              traileringIcon={'microphone'}
            />
          </List.Section>
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
  },
  searchbar: {
    margin: 4,
    width: Dimensions.get('window').width/1.5
  },
});

export default PaperSearch;