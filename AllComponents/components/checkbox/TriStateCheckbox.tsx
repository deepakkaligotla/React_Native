import React, { useState } from 'react';
import { useTheme } from '../theme/ThemeContext';
import { useWindowDimensions, FlatList, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';

interface TriStateCheckBoxProps {
    
}

const TriStateCheckBox: React.FC<TriStateCheckBoxProps> = ({  }) => {
    const { commonStyles } = useTheme();
    const [triStateCheckboxState, setTriStateCheckboxState] = useState<'checked' | 'unchecked' | 'indeterminate'>('unchecked');
    const [subCheckboxStates, setSubCheckboxStates] = useState<Array<'checked' | 'unchecked'>>(['unchecked', 'unchecked']);

    const toggleMainCheckbox = () => {
        setTriStateCheckboxState((prevMainCheckboxState) => {
            switch (prevMainCheckboxState) {
                case 'checked':
                    setSubCheckboxStates(['unchecked', 'unchecked']);
                    return 'unchecked';
                case 'unchecked':
                    setSubCheckboxStates(['checked', 'checked']);
                    return 'checked';
                case 'indeterminate':
                    setSubCheckboxStates(['checked', 'checked']);
                    return 'checked';
            }
        });
    };

    const toggleSubCheckbox = (index: number) => {
        setSubCheckboxStates((prevSubCheckboxStates) => {
            const newSubCheckboxStates = [...prevSubCheckboxStates];
            newSubCheckboxStates[index] = newSubCheckboxStates[index] === 'checked' ? 'unchecked' : 'checked';

            const allChecked = newSubCheckboxStates.every((state) => state === 'checked');
            const allUnchecked = newSubCheckboxStates.every((state) => state === 'unchecked');

            if (allChecked) {
                setTriStateCheckboxState('checked');
            } else if (allUnchecked) {
                setTriStateCheckboxState('unchecked');
            } else {
                setTriStateCheckboxState('indeterminate');
            }

            return newSubCheckboxStates;
        });
    };

    const renderCheckboxItem = (label: string, state: 'checked' | 'unchecked' | 'indeterminate', onPress: () => void, isMainCheckbox?: boolean) => {
        const iconSize = isMainCheckbox ? 24 : 20;
        return (
            <TouchableOpacity onPress={onPress}>
                <View style={{flexDirection:'row'}}>
                <Text style={{marginRight:8}}>{label}</Text>
                {renderCheckboxIcon(state, iconSize)}
                </View>
            </TouchableOpacity>
        );
    };

    const renderCheckboxIcon = (state: 'checked' | 'unchecked' | 'indeterminate', size: number) => {
        switch (state) {
            case 'checked':
                return <MaterialCommunityIcons name='checkbox-marked' size={size} color='green' />;
            case 'unchecked':
                return <MaterialCommunityIcons name='checkbox-blank-outline' size={size} color='red' />;
            case 'indeterminate':
                return <MaterialCommunityIcons name='minus-box' size={size} color='yellow' />;
        }
    };

    return (
        <View>
            {renderCheckboxItem('Tri State Checkbox', triStateCheckboxState, toggleMainCheckbox, true)}
            <View style={{marginLeft: 16}}>
                {renderCheckboxItem('Sub Checkbox 1', subCheckboxStates[0], () => toggleSubCheckbox(0))}
                {renderCheckboxItem('Sub Checkbox 2', subCheckboxStates[1], () => toggleSubCheckbox(1))}
            </View>
        </View>
    );
};

export default TriStateCheckBox;