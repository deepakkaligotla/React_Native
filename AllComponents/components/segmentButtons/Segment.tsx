import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface SegmentProps {
  label: string;
  onPress: () => void;
  isSelected: boolean;
  color: string;
  size: number;
  index: number;
  totalSegments: number;
  selectedColor: string;
  textColor: string;
}

const Segment: React.FC<SegmentProps> = ({ label, onPress, isSelected, color, size, index, totalSegments, selectedColor, textColor }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.segmentContent,
          {
            backgroundColor: isSelected ? color : selectedColor,
            height: size,
            width: 'auto',
            padding: size / 5,
            borderTopLeftRadius: index === 0 ? size / 1 : 0,
            borderBottomLeftRadius: index === 0 ? size / 1 : 0,
            borderTopRightRadius: index === totalSegments - 1 ? size / 1 : 0,
            borderBottomRightRadius: index === totalSegments - 1 ? size / 1 : 0,
          },
        ]}
      >
        <Text style={{ color: textColor, textAlign: 'center' }}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  segmentContent: {
    justifyContent: 'center',
    alignContent: 'center',
    minWidth: 100,
  },
});

export default Segment;