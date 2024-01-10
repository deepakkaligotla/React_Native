import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import { useWindowDimensions, FlatList, Text, TouchableHighlight } from 'react-native';
import { View } from 'react-native';

interface BuiltInFlatListProps {
    items: Array<any>;
}

const BuiltInFlatList: React.FC<BuiltInFlatListProps> = ({ items }) => {
    const { commonStyles } = useTheme();

    function onPress(item: { title: string; key: string; }): void {
        console.log(item.title);
    }

    return (
        <FlatList
            data={items}
            renderItem={({ item, index, separators }) => (
                <TouchableHighlight
                    key={index}
                    onPress={() => onPress(item)}>
                    <View>
                        <Text style={commonStyles.text}>{item.title}</Text>
                    </View>
                </TouchableHighlight>
            )}
        />
    );
};

export default BuiltInFlatList;