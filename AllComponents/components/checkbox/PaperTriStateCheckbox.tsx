import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Checkbox } from 'react-native-paper';

interface PaperTriStateCheckboxProps {
}

const PaperTriStateCheckbox: React.FC<PaperTriStateCheckboxProps> = ({  }) => {
    const [paperTriStateChecked, isPaperTriStateChecked] = useState<'checked' | 'unchecked' | 'indeterminate'>('unchecked');
    const [subCheckboxes, setSubCheckboxes] = useState([false, false, false]);
  
    const handleSubCheckboxPress = (index: number) => {
        const updatedSubCheckboxes = [...subCheckboxes];
        updatedSubCheckboxes[index] = !updatedSubCheckboxes[index];
    
        const allChecked = updatedSubCheckboxes.every((checkbox) => checkbox);
        const allUnchecked = updatedSubCheckboxes.every((checkbox) => !checkbox);
        const indeterminate = updatedSubCheckboxes.some((checkbox) => checkbox) && !allChecked;
    
        if (allChecked) {
          isPaperTriStateChecked('checked');
        } else if (allUnchecked) {
          isPaperTriStateChecked('unchecked');
        } else {
          isPaperTriStateChecked('indeterminate');
        }
    
        setSubCheckboxes(updatedSubCheckboxes);
      };

  return (
    <View style={{ flexDirection: 'column'}}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox.Item
              label='Paper Tristate Checkbox'
              status={paperTriStateChecked}
              color={
                paperTriStateChecked === 'checked'? 'green' :
                paperTriStateChecked === 'unchecked' ? 'red' :
                paperTriStateChecked === 'indeterminate' ? 'yellow' : 'transparent'
              }
              uncheckedColor={
                paperTriStateChecked === 'checked'? 'green' :
                paperTriStateChecked === 'unchecked' ? 'red' :
                paperTriStateChecked === 'indeterminate' ? 'yellow' : 'transparent'
              }
              onPress={() => {
                isPaperTriStateChecked((prevStatus) => {
                  if (prevStatus === 'checked') {
                    setSubCheckboxes([false, false, false]);
                    return 'unchecked';
                  }
                  if (prevStatus === 'unchecked' || prevStatus === 'indeterminate') {
                    setSubCheckboxes([true, true, true]);
                    return 'checked';
                  }
                  return 'checked';
                });
              }}
            />
          </View>

          {subCheckboxes.map((subCheckbox, index) => (
            <View key={index} style={{ marginLeft: 16, flexDirection: 'row', alignItems: 'center' }}>
              <Checkbox.Item
                label={'Paper subcheckbox ' + index}
                status={subCheckbox ? 'checked' : 'unchecked'}
                color={subCheckbox ? 'green' : 'red'}
                uncheckedColor={subCheckbox ? 'green' : 'red'}
                onPress={() => handleSubCheckboxPress(index)}
              />
            </View>
          ))}
        </View>
  );
};

export default PaperTriStateCheckbox;
