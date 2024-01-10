import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, useWindowDimensions, Image, ViewStyle } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { Button } from 'react-native-paper';

interface VerticalPagerItemProps {
  title: string;
  page: number;
  onPress?: () => void;
  style?: ViewStyle;
}

const Carousel: React.FC = () => {
  const [horizontalPageIndex, setHorizontalPageIndex] = useState(0);
  const { isDarkTheme, commonStyles } = useTheme();

  const VerticalPagerItem: React.FC<VerticalPagerItemProps> = ({ title, page, onPress, style }) => (
    <TouchableOpacity onPress={onPress}>
      <View style={{ width: useWindowDimensions().width / 1.04, borderWidth: 1, borderColor: isDarkTheme ? 'white' : 'black', margin: 5, flexDirection: 'row' }}>
        <View style={[commonStyles.card, { width: 150, borderWidth: 1, borderColor: isDarkTheme ? 'white' : 'black' }, style]}>
          <View style={{ padding: 8, flex: 1, alignItems: 'center' }}>
            <Text style={{ color: commonStyles.card.color }}>{`${title} ${page + 1}`}</Text>
          </View>
          <Image
            source={{ uri: 'https://reactnative.dev/img/logo-og.png' }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        </View>
        <View style={{ flexDirection: 'column' }}>
          <Text style={[commonStyles.text]}>{`Price`}</Text>
          <Text style={[commonStyles.text]}>{`Description`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const VerticalPagerIndicator: React.FC<{ pageCount: number; currentPage: number }> = ({ pageCount, currentPage }) => (
    <View style={{ flexDirection: 'column' }}>
      {[...Array(pageCount)].map((_, index) => (
        <TouchableOpacity key={index} style={{ width: 10, height: 10, borderRadius: 5, marginHorizontal: 5, backgroundColor: index === currentPage ? 'blue' : 'red' }} />
      ))}
    </View>
  );

  const tabData = [
    { title: "Movies", items: Array.from({ length: 10 }) },
    { title: "Shows", items: Array.from({ length: 5 }) },
    { title: "Books", items: Array.from({ length: 8 }) },
    { title: "Kids", items: Array.from({ length: 4 }) },
    { title: "Podcasts", items: Array.from({ length: 4 }) },
    { title: "Clothes", items: Array.from({ length: 9 }) },
    { title: "Groceries", items: Array.from({ length: 10 }) }
  ];

  const handleHorizontalPageChange = (index: number) => {
    setHorizontalPageIndex(index);
  };

  const handleVerticalItemPress = (tab: string, index: number) => {
    console.log(`${tab} - ${index}`);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView horizontal contentContainerStyle={{ flexDirection: 'row' }}>
        {tabData.map(({ title }, index) => (
          <TouchableOpacity key={index} onPress={() => handleHorizontalPageChange(index)} style={{ height: 80, paddingVertical: 16, paddingHorizontal: 8, borderBottomWidth: 2, borderBottomColor: index === horizontalPageIndex ? 'green' : 'transparent', backgroundColor: isDarkTheme ? 'gray' : 'white' }}>
            <Button><Text style={[commonStyles.text]}>{title}</Text></Button>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        pagingEnabled
        data={tabData[horizontalPageIndex].items}
        keyExtractor={(item, index) => `${tabData[horizontalPageIndex].title}_${index}`}
        renderItem={({ index }) => (
          <VerticalPagerItem
            title={tabData[horizontalPageIndex].title}
            page={index}
            onPress={() => handleVerticalItemPress(tabData[horizontalPageIndex].title, index)}
            style={{ alignSelf: 'flex-start' }} // Set alignSelf to 'flex-start'
          />
        )}
        contentContainerStyle={{ alignItems: 'flex-start' }} // Add this line to align items to the start
      >
        <VerticalPagerIndicator pageCount={tabData[horizontalPageIndex].items.length} currentPage={0} />
      </FlatList>
    </View>
  );
};

export default Carousel;