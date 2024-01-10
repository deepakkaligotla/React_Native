import React, { useState, FunctionComponent } from 'react';
import {  } from 'react-native-elements';
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

type ElementsMenuProps = {};

const ElementsMenu: FunctionComponent<ElementsMenuProps> = () => {
 
    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center', fontSize: 24 }}>Elements - Menu</Text>
            <ScrollView
                horizontal={false}
                contentContainerStyle={styles.contentContainer}>

            </ScrollView>
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

export default ElementsMenu;