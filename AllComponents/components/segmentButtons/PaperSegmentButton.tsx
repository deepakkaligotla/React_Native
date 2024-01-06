import React from 'react';
import { View } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';

interface PaperSegmentButtonProps {
    value: string;
    setValue: (value: string) => void;
    buttons: { value: string; label: string }[];
}

const PaperSegmentButton: React.FC<PaperSegmentButtonProps> = ({ value, setValue, buttons }) => {
    return (
        <View>
            <SegmentedButtons
                value={value}
                onValueChange={(selectedValue) => setValue(selectedValue as string)}
                buttons={buttons}
            />
        </View>
    );
};

export default PaperSegmentButton;