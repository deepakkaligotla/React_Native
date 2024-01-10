import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Avatar, Chip } from 'react-native-paper';

interface PaperChipProps {
}

const PaperChip: React.FC<PaperChipProps> = ({ }) => {
    const [paperChip, setPaperChip] = useState(false)
    const [snackbarProperties, setSnackbarProperties] = React.useState({
        visible: false,
    });

    return (
        <View style={{ flex: 1, flexDirection: 'column', alignContent: 'center', }}>
            <Text style={{ textAlign: 'center', fontSize: 24 }}>Paper Chip</Text>
            <ScrollView
                horizontal={false}
                contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', }}>
                <Chip style={styles.chip}>Solid Chip</Chip>
                <Chip style={styles.chip} disabled>
                    Disabled Chip
                </Chip>
                <Chip style={styles.chip} mode="outlined">
                    Outlined Chip
                </Chip>
                <Chip style={styles.chip} mode="outlined" disabled>
                    Outlined & Disabled
                </Chip>
                <Chip style={styles.chip} icon="wifi">
                    Left Icon Chip
                </Chip>
                <Chip style={styles.chip} avatar={<Avatar.Icon size={20} icon="camera" />}
                    onClose={() =>
                        setSnackbarProperties({
                            visible: true,
                        })
                    }>
                    Right Icon Chip
                </Chip>
                <Chip
                    style={styles.chip}
                    icon="wifi"
                    onPress={() => console.log('Icon chip was pressed!')}
                    mode="outlined"
                >
                    Pressable Icon Chip
                </Chip>
                <Chip
                    style={styles.chip}
                    icon="close"
                    onPress={() => console.log('Icon chip was pressed!')}
                    mode="outlined"
                >
                    Pressable Icon Chip
                </Chip>
                <Chip
                    style={styles.chip}
                    mode="outlined"
                    avatar={<LinearGradient colors={['red', 'pink']} />}
                >
                    LinearGradient Chip
                </Chip>
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
    chip: {
        marginVertical: 2,
        marginHorizontal: 2,
    },
});


export default PaperChip;

