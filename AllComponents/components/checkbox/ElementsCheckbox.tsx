import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

interface ElementsCheckboxProps {
}

const ElementsCheckbox: React.FC<ElementsCheckboxProps> = ({ }) => {
    const [elementsCheckbox, setElementsCheckbox] = useState(false)

    return (
        <CheckBox
            title='Elements Checkbox'
            checked={elementsCheckbox}
            checkedColor='green'
            uncheckedColor='red'
            iconType='entypo'
            checkedIcon='emoji-flirt'
            uncheckedIcon='emoji-sad'
            size={40}
            onPress={() => setElementsCheckbox(!elementsCheckbox)} />
    );
};

export default ElementsCheckbox;

