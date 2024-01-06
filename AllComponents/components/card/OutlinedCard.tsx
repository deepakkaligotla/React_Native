import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';

interface OutlinedCardProps {
  title: string;
  content: string;
}

const OutlinedCard: React.FC<OutlinedCardProps> = ({ title, content }) => {

  const { isDarkTheme, commonStyles } = useTheme();

  return (
    <View style={[commonStyles.card, {borderWidth: 1, borderColor: isDarkTheme ? 'white' : 'black'}]}>
      <Text style={{color: commonStyles.card.color}}>{title}</Text>
      <Text style={{color: commonStyles.card.color}}>{content}</Text>
    </View>
  );
};

export default OutlinedCard;
