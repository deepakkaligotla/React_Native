import React, { useState } from 'react';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Dialog, Portal, Text } from 'react-native-paper';
import { useTheme } from '../theme/ThemeContext';
import { useWindowDimensions } from 'react-native';


const PaperDialog = () => {
    const [simpleDialog, setSimpleDialog] = useState(false);
    const [actionsDialog, setActionsDialog] = useState(false);
    const [iconDialog, setIconDialog] = useState(false);
    const [scrollableDialog, setScrollableDialog] = useState(false);
    const [titleDialog, setTitleDialog] = useState(false);
    const { commonStyles } = useTheme()

    return (
        <View>
            <Text style={[{ textAlign: 'center', fontSize: 24 }, commonStyles.text]}>Paper Dialog</Text>
            <View style={[{ flexDirection: 'row', maxWidth: useWindowDimensions().width, margin: 10, flexWrap: 'wrap' }]}>
                <View>
                    <Button onPress={() => { setSimpleDialog(!simpleDialog) }}>Show Dialog</Button>
                    <Portal>
                        <Dialog visible={simpleDialog} onDismiss={() => { setSimpleDialog(!simpleDialog) }}>
                            <Dialog.Title>Alert</Dialog.Title>
                            <Dialog.Content>
                                <Text variant="bodyMedium">This is simple dialog</Text>
                            </Dialog.Content>
                            <Dialog.Actions>
                                <Button onPress={() => { setSimpleDialog(!simpleDialog) }}>Done</Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>

                    <Button onPress={() => { setActionsDialog(!actionsDialog) }}>Actions Dialog</Button>
                    <Portal>
                        <Dialog visible={actionsDialog} onDismiss={() => { setActionsDialog(!actionsDialog) }}>
                            <Dialog.Actions>
                                <Button onPress={() => console.log('Cancel')}>Cancel</Button>
                                <Button onPress={() => console.log('Ok')}>Ok</Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>

                    <Button onPress={() => { setIconDialog(!iconDialog) }}>Icon Dialog</Button>
                    <Portal>
                        <Dialog visible={iconDialog} onDismiss={() => { setIconDialog(!iconDialog) }}>
                            <Dialog.Icon icon="alert" />
                            <Dialog.Title>This is a title</Dialog.Title>
                            <Dialog.Content>
                                <Text variant="bodyMedium">This is simple dialog</Text>
                            </Dialog.Content>
                        </Dialog>
                    </Portal>

                    <Button onPress={() => { setScrollableDialog(!scrollableDialog) }}>Scrollable Dialog</Button>
                    <Portal>
                        <Dialog visible={scrollableDialog} onDismiss={() => { setScrollableDialog(!scrollableDialog) }}>
                            <Dialog.ScrollArea>
                                <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
                                    <Text>This is a scrollable area This is a scrollable area This is a scrollable area This is a scrollable area This is a scrollable area This is a scrollable area This is a scrollable area This is a scrollable area This is a scrollable area This is a scrollable area</Text>
                                </ScrollView>
                            </Dialog.ScrollArea>
                        </Dialog>
                    </Portal>

                    <Button onPress={() => { setTitleDialog(!titleDialog) }}>Title Dialog</Button>
                    <Portal>
                        <Dialog visible={titleDialog} onDismiss={() => { setTitleDialog(!titleDialog) }}>
                            <Dialog.Title>This is a title</Dialog.Title>
                            <Dialog.Content>
                                <Text variant="bodyMedium">This is simple dialog</Text>
                            </Dialog.Content>
                        </Dialog>
                    </Portal>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default PaperDialog;