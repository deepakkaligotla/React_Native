import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Checkbox } from 'react-native-paper';

interface PaperCheckboxProps {
}

const PaperCheckbox: React.FC<PaperCheckboxProps> = ({ }) => {

    const [paperChecked, isPaperChecked] = useState(false);

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox.Item
                label='Paper Simple Checkbox'
                status={paperChecked ? 'checked' : 'unchecked'}
                color={paperChecked ? 'green' : 'red'}
                uncheckedColor={paperChecked ? 'green' : 'red'}
                onPress={() => {
                    isPaperChecked(!paperChecked);
                }}
            />
        </View>
    );
};

export default PaperCheckbox;

