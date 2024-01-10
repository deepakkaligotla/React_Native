import React, { useState, FC } from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, GestureResponderEvent } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { Appbar, Button, List, Menu, TouchableRipple } from 'react-native-paper';

type PaperMenuProps = {};

const PaperMenu: FC<PaperMenuProps> = () => {
    const [visible, setVisible] = React.useState<MenuVisibility>({});
    const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';
    type MenuVisibility = {
        [key: string]: boolean | undefined;
    };
    const [contextualMenuCoord, setContextualMenuCoor] =
        React.useState<ContextualMenuCoord>({ x: 0, y: 0 });
    type ContextualMenuCoord = { x: number; y: number };

    const _toggleMenu = (name: string) => () =>
        setVisible({ ...visible, [name]: !visible[name] });

    const _getVisible: any = (name: string) => !!visible[name];
    const _handleLongPress = (event: GestureResponderEvent) => {
        const { nativeEvent } = event;
        setContextualMenuCoor({
            x: nativeEvent.pageX,
            y: nativeEvent.pageY,
        });
        setVisible({ menu3: true });
    };

    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center', fontSize: 24 }}>Paper - Menu</Text>
            <ScrollView
                horizontal={false}
                contentContainerStyle={styles.contentContainer}>
                <Menu
                    visible={_getVisible('menu1')}
                    onDismiss={_toggleMenu('menu1')}
                    anchor={
                        <Appbar.Action
                            icon={MORE_ICON}
                            onPress={_toggleMenu('menu1')}
                        />
                    }>
                    <Menu.Item onPress={() => { }} title="Undo" />
                    <Menu.Item onPress={() => { }} title="Redo" />
                    <Menu.Item onPress={() => { }} title="Cut" disabled />
                    <Menu.Item onPress={() => { }} title="Copy" disabled />
                    <Menu.Item onPress={() => { }} title="Paste" />
                </Menu>
                <Menu
                    visible={_getVisible('menu2')}
                    onDismiss={_toggleMenu('menu2')}
                    anchor={
                        <Button mode="outlined" onPress={_toggleMenu('menu2')}>
                            Menu with icons
                        </Button>
                    }>
                    <Menu.Item leadingIcon="undo" onPress={() => { }} title="Undo" />
                    <Menu.Item leadingIcon="redo" onPress={() => { }} title="Redo" />
                    <Menu.Item leadingIcon="content-cut" onPress={() => { }} title="Cut" disabled />
                    <Menu.Item leadingIcon="content-copy" onPress={() => { }} title="Copy" disabled />
                    <Menu.Item leadingIcon="content-paste" onPress={() => { }} title="Paste" />
                </Menu>
                <Menu
                    visible={_getVisible('menu3')}
                    onDismiss={_toggleMenu('menu3')}
                    anchor={contextualMenuCoord}>
                    <Menu.Item onPress={() => { }} title="Item 1" />
                    <Menu.Item onPress={() => { }} title="Item 2" />
                    <Menu.Item onPress={() => { }} title="Item 3" disabled />
                </Menu>
                <List.Section>
                    <TouchableRipple onPress={() => { }} onLongPress={_handleLongPress}>
                        <List.Item
                            title="List item"
                            description="Long press me to open contextual menu"
                        />
                    </TouchableRipple>
                </List.Section>
                <Menu
                    visible={_getVisible('menu4')}
                    onDismiss={_toggleMenu('menu4')}
                    anchor={
                        <Button mode="outlined" onPress={_toggleMenu('menu4')}>
                            Menu at bottom
                        </Button>
                    }>
                    <Menu.Item onPress={() => { }} title="Bottom Item 1" />
                    <Menu.Item onPress={() => { }} title="Bottom Item 2" />
                    <Menu.Item onPress={() => { }} title="Bottom Item 3" />
                </Menu>
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
    }
});

export default PaperMenu;