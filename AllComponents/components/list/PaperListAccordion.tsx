import React from 'react';
import { List } from 'react-native-paper';
import { useTheme } from '../theme/ThemeContext';
import { useWindowDimensions } from 'react-native';
import { View } from 'react-native';

interface PaperListAccordionProps {
    items: Array<String>;
}

const PaperListAccordion: React.FC<PaperListAccordionProps> = ({ items }) => {
    const [expanded, setExpanded] = React.useState(false);
    const { commonStyles } = useTheme();
    const handlePress = () => setExpanded(!expanded);

    return (
        <View>
            <List.Section title="Folders">
                <List.Accordion
                    title="Parent Folder"
                    left={props => <List.Icon {...props} icon="folder" color={commonStyles.icon.color} />}
                    expanded={expanded}
                    onPress={handlePress}
                    style={{ width: useWindowDimensions().width / 1.8 }}>
                    {items.map((item: any, index: number) => (
                        <List.Item
                            key={index}
                            title={item}
                            left={() => <List.Icon icon="folder" style={commonStyles.text} />}
                        />
                    ))}
                </List.Accordion>
            </List.Section>
        </View>
    );
};

export default PaperListAccordion;