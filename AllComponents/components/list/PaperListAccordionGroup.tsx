import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { List, Avatar, Provider as PaperProvider } from 'react-native-paper';
import { useTheme } from '../theme/ThemeContext';

interface PaperListAccordionGroupProps {
    accordionList: Array<any>;
}

const PaperListAccordionGroup: React.FC<PaperListAccordionGroupProps> = ({ accordionList }) => {

    const { commonStyles } = useTheme();

    return (
        <View>
            <List.AccordionGroup>
                {accordionList.map((accordion: any, index: number) => (
                    <List.Accordion title={accordion.accordion} id={index} key={index} style={{width:useWindowDimensions().width/2}}>
                        {accordion.items.map((item: String, itemIndex: number) => (
                            <List.Item 
                            left={props => <List.Icon {...props} icon="folder" color={commonStyles.icon.color} />}
                            title={item} 
                            key={itemIndex} 
                            style={commonStyles.text} />
                        ))}
                    </List.Accordion>
                ))}
            </List.AccordionGroup>
        </View>
    );
};

export default PaperListAccordionGroup;