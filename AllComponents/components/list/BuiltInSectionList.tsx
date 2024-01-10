import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import { SectionList, Text } from 'react-native';
import { View } from 'react-native';

interface BuiltInSectionListProps {
    items: Array<any>;
}

const BuiltInSectionList: React.FC<BuiltInSectionListProps> = ({ items }) => {
    const { commonStyles } = useTheme();

    function onPress(item: { title: string; key: string; }): void {
        console.log(item.title);
    }

    return (
        <SectionList
            sections={items}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
                <View>
                    <Text style={commonStyles.text}>{item}</Text>
                </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={[commonStyles.text, { fontSize: 32 }]}>{title}</Text>
            )}
        />
    );
};

export default BuiltInSectionList;