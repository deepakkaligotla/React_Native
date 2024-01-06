import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

interface ElevatedCardProps {
  title: string;
  content: string;
}

const ElevatedCard: React.FC<ElevatedCardProps> = ({ title, content }) => {
  
  const { commonStyles } = useTheme();

  return (
    <View style={[commonStyles.card, {elevation: 5}]}>
      <Text style={{color: commonStyles.card.color}}>{title}</Text>
      <Text style={{color: commonStyles.card.color}}>{content}</Text>
    </View>
  );
};

export default ElevatedCard;
