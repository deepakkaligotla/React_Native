import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { commonStyles } from '../theme/commonStyles';

interface SimpleCardProps {
  title: string;
  content: string;
}

const SimpleCard: React.FC<SimpleCardProps> = ({ title, content }) => {
  const { commonStyles } = useTheme();

  return (
    <View style={commonStyles.card}>
      <Text style={{color: commonStyles.card.color}}>{title}</Text>
      <Text style={{color: commonStyles.card.color}}>{content}</Text>
    </View>
  );
};

export default SimpleCard;