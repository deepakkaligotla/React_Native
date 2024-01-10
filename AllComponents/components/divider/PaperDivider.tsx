import React, { FC } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { Divider, List } from 'react-native-paper';

type PaperDividerProps = {};

const PaperDivider: FC<PaperDividerProps> = () => {
    const{commonStyles} = useTheme()
    const items = ['Apple', 'Banana', 'Coconut', 'Lemon', 'Mango', 'Peach'];
    
    return (
        <View style={styles.container}>
            <Text style={[{ textAlign: 'center', fontSize: 24 }, commonStyles.text]}>Paper - Divider</Text>
            <FlatList
                    style={{ backgroundColor: 'black' }}
                    renderItem={({ item }) => <List.Item title={item} />}
                    keyExtractor={(item) => item}
                    ItemSeparatorComponent={Divider}
                    data={items}
                    alwaysBounceVertical={false}
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
});

export default PaperDivider;