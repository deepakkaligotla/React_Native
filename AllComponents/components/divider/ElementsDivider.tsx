import React, { FC } from 'react';
import { Divider } from 'react-native-elements';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

type ElementsDividerProps = {};

const ElementsDivider: FC<ElementsDividerProps> = () => {
    const{commonStyles} = useTheme()

    return (
        <View style={styles.container}>
            <Text style={[{ textAlign: 'center', fontSize: 24 }, commonStyles.text]}>Elements - Divider</Text>
            <ScrollView>
                <Text style={styles.subHeader}>Horizontal Dividers</Text>
                <View style={styles.horizontal}>
                    <Text style={styles.horizontalText}>Horizontal Divider</Text>
                    <Divider />
                    <Text style={styles.horizontalText}>
                        Horizontal Divider with width and color
                    </Text>
                    <Divider width={5} color={'black'} />
                </View>
                <Text style={styles.subHeader}>Horizontal Divider with Inset</Text>
                <View style={styles.horizontal}>
                    <Text style={styles.horizontalText}>
                        Horizontal Divider with left inset
                    </Text>
                    <Divider inset={true} />
                    <Text style={styles.horizontalText}>
                        Horizontal Divider with right inset
                    </Text>
                    <Divider inset={true} insetType="right" />
                    <Text style={styles.horizontalText}>
                        Horizontal Divider with middle inset
                    </Text>
                    <Divider inset={true} insetType="middle" />
                    <Text style={styles.horizontalText}>Welcome to RNE App</Text>
                </View>
                <Text style={styles.subHeader}>Vertical Dividers</Text>
                <View style={styles.vertical}>
                    <Text>Left text</Text>
                    <Divider orientation="vertical" />
                    <Text>Right text</Text>
                </View>
                <View style={styles.vertical}>
                    <Text>Left text</Text>
                    <Divider orientation="vertical" width={5} />
                    <Text>Right text</Text>
                </View>
                <Text style={styles.subHeader}>Dividers with SubHeader</Text>
                <View style={styles.horizontal}>
                    <Text style={styles.horizontalText}>Left text</Text>
                    <Divider
                        subHeader="Divider"
                        inset={true}
                        subHeaderStyle={{ color: 'black' }}
                    />
                    <Text style={styles.horizontalText}>Right text</Text>
                </View>
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
    subHeader: {
        backgroundColor: "#2089dc",
        color: "white",
        textAlign: "center",
        paddingVertical: 5,
        marginBottom: 10
    },
    horizontal: {
        marginBottom: 10,
    },
    horizontalText: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10,
    },
    vertical: {
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});

export default ElementsDivider;