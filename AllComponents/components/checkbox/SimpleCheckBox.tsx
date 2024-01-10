import React, { useState } from 'react';
import { useTheme } from '../theme/ThemeContext';
import { Text, TouchableWithoutFeedback } from 'react-native';
import { View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';

interface SimpleCheckBoxProps {
  
}

const SimpleCheckBox: React.FC<SimpleCheckBoxProps> = ({  }) => {
    const { commonStyles } = useTheme();
    const [simpleCheckBox, setSimpleCheckBox] = useState(false);

    const toggleCheckbox = () => {
      setSimpleCheckBox(!simpleCheckBox);
    };

    return (
        <TouchableWithoutFeedback onPress={toggleCheckbox}>
          <View style={{flexDirection:'row'}}>
          <Text style={{marginRight:8}}>Simple Checkbox</Text>
            {simpleCheckBox ? (
              <View><MaterialCommunityIcons name='checkbox-marked' size={24} color='green'/></View>
            ) : (
              <View><MaterialCommunityIcons name='checkbox-blank-outline' size={24} color='red'/></View>
            )}
          </View>
        </TouchableWithoutFeedback>
    );
};

export default SimpleCheckBox;