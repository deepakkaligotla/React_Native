import React from 'react';
import { useTheme } from '../theme/ThemeContext';
import { View, useWindowDimensions } from 'react-native';
import { Avatar, Icon, ListItem } from 'react-native-elements';

interface ElementsListAccordionProps {
    items: Array<any>;
}

const ElementsListAccordion: React.FC<ElementsListAccordionProps> = ({ items }) => {
    const [expanded, setExpanded] = React.useState(false);
    const { commonStyles } = useTheme();
    const log = (name: String) => console.log(name+' pressed');

    return (
        <View style={{width:useWindowDimensions().width/2}}>
            <ListItem.Accordion
                content={
                    <>
                        <Icon name="place" size={30} />
                        <ListItem.Content>
                            <ListItem.Title>List Accordion</ListItem.Title>
                        </ListItem.Content>
                    </>
                }
                isExpanded={expanded}
                onPress={() => {
                    setExpanded(!expanded);
                }}
            >
                {items.map((item, i) => (
                    <ListItem key={i} onPress={() => log(item.name)} bottomDivider>
                        <Avatar title={item.name[0]} source={{ uri: item.avatar_url }} />
                        <ListItem.Content>
                            <ListItem.Title>{item.name}</ListItem.Title>
                            <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                ))}
            </ListItem.Accordion>
        </View>
    );
};

export default ElementsListAccordion;