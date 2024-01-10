import React, { useState } from 'react';
import { NativeModules, Button, Text } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { commonStyles } from '../theme/commonStyles';

const DatePicker = () => {
    const { DatePicker } = NativeModules;
    const [selectedDate, setSelectedDate] = useState('');
    const {commonStyles} = useTheme();

    const onPress = () => {
        DatePicker.openDatePicker()
        .then((selectedDate: string) => {
            console.log('Selected Date from Native Devices:', selectedDate);
            setSelectedDate(selectedDate);
        })
        .catch((error: any) => {
            console.error('Error from Native Devices:', error);
        });
    };

    return (
        <>
            <Text style={[{fontSize:24},commonStyles.text]}>{selectedDate}</Text>
            <Button
                title="Select Date"
                color="#841584"
                onPress={onPress}
            />
        </>
    );
};

export default DatePicker;