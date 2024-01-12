import React, { useState, FC, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import FontAwesome6Pro from 'react-native-vector-icons/FontAwesome6Pro'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Zocial from 'react-native-vector-icons/Zocial'

const getIconComponent = (iconFamily: string) => {
  switch (iconFamily) {
    case 'AntDesign':
      return AntDesign;
    case 'Entypo':
      return Entypo;
    case 'EvilIcons':
      return EvilIcons;
    case 'Feather':
      return Feather;
    case 'FontAwesome':
      return FontAwesome;
    case 'FontAwesome5':
      return FontAwesome5;
    case 'FontAwesome5Pro':
      return FontAwesome5Pro;
    case 'FontAwesome6':
      return FontAwesome6;
    case 'FontAwesome6Pro':
      return FontAwesome6Pro;
    case 'Fontisto':
      return Fontisto;
    case 'Foundation':
      return Foundation;
    case 'Ionicons':
      return Ionicons;
    case 'MaterialCommunityIcons':
      return MaterialCommunityIcons;
    case 'MaterialIcons':
      return MaterialIcons;
    case 'Octicons':
      return Octicons;
    case 'SimpleLineIcons':
      return SimpleLineIcons;
    case 'Zocial':
      return Zocial;
    default:
      console.error(`Unsupported icon family: ${iconFamily}`);
      return null;
  }
};

type RadioButtonProps = {
  label: string;
  value: string;
  selected: boolean;
  initialSelection: boolean;
  onSelect: (value: boolean) => void;
};

export const RadioButton: React.FC<RadioButtonProps> = ({ label, value, selected, initialSelection, onSelect }) => {
  return (
    <TouchableOpacity onPress={() => onSelect(!selected)} style={styles.radioButton}>
      <View style={[styles.radioCircle, { borderColor: selected ? 'green' : initialSelection ? 'red' : 'white' }]}>
        {selected && <View style={styles.selectedRadioCircle} />}
      </View>
      <Text style={[styles.radioLabel, { color: 'white' }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

type RadioGroupProps = {
  options: { label: string; value: string }[];
  selectedValue: string;
  onValueChange: (value: string) => void;
};

export const RadioGroup: FC<RadioGroupProps> = ({ options, selectedValue, onValueChange }) => {
  const [initialSelection, setInitialSelection] = useState(true);

  useEffect(() => {
    if (selectedValue && initialSelection) {
      setInitialSelection(false);
    }
  }, [selectedValue, initialSelection]);

  return (
    <View style={styles.contentContainer}>
      {options.map((option) => (
        <RadioButton
          key={option.value}
          label={option.label}
          value={option.value}
          selected={selectedValue === option.value}
          initialSelection={initialSelection}
          onSelect={() => onValueChange(option.value)}
        />
      ))}
    </View>
  );
};

type IconRadioButtonProps = {
  iconFamily: string;
  iconName: string;
  value: string;
  selected: boolean;
  onSelect: (value: boolean) => void;
};

export const IconRadioButton: FC<IconRadioButtonProps> = ({ iconFamily, iconName, value, selected, onSelect }) => {
  const IconComponent = getIconComponent(iconFamily);

  if (!IconComponent) {
    console.error(`Unsupported icon family: ${iconFamily}`);
    return null;
  }

  return (
    <TouchableOpacity onPress={() => onSelect(!selected)} style={styles.radioButton}>
      <IconComponent name={iconName} size={32} color={selected ? 'green' : 'white'} />
    </TouchableOpacity>
  );
};

type IconRadioProps = {
  icons: { iconFamily: string, iconName: string; value: string }[];
  selectedValue: string;
  onValueChange: (value: string) => void;
};

export const IconRadio: FC<IconRadioProps> = ({ icons, selectedValue, onValueChange }) => {
  return (
    <View style={styles.contentContainer}>
      {icons.map((item) => (
        <IconRadioButton
          key={item.value}
          iconFamily={item.iconFamily}
          iconName={item.iconName}
          value={item.value}
          selected={selectedValue === item.value}
          onSelect={() => onValueChange(item.value)}
        />
      ))}
    </View>
  );
}

type RadioCardButtonProps = {
  cardTitle: string;
  cardContent: string;
  value: string;
  selected: boolean;
  initialSelection: boolean;
  onSelect: (value: boolean) => void;
};

export const RadioCardButton: FC<RadioCardButtonProps> = ({ cardTitle, cardContent, value, selected, initialSelection, onSelect }) => {

  return (
    <TouchableOpacity onPress={() => onSelect(selected)} style={[styles.cardContainer, { borderColor: selected ? 'green' : initialSelection ? 'red' : 'white' }]}>
      <View style={[styles.radioCircle, { borderColor: selected ? 'green' : initialSelection ? 'red' : 'white' } ]}>
        {selected && <View style={styles.selectedRadioCircle} />}
      </View>
      <Text style={styles.cardLabel}>{cardTitle}</Text>
    </TouchableOpacity>
  );
};

type CardRadioProps = {
  cards: { title: string, content: string, value: string }[];
  selectedCard: string;
  setSelectedCard: (value: string) => void;
};

export const RadioCard: React.FC<CardRadioProps> = ({ cards, selectedCard, setSelectedCard }) => {
  const [initialSelection, setInitialSelection] = useState(true);

  useEffect(() => {
    if (selectedCard && initialSelection) {
      setInitialSelection(false);
    }
  }, [selectedCard, initialSelection]);

  return (
    <View style={styles.contentContainer}>
      {cards.map((item) => (
        <RadioCardButton
          key={item.value}
          cardTitle={item.title}
          cardContent={item.content}
          value={item.value}
          selected={selectedCard === item.value}
          initialSelection={initialSelection}
          onSelect={() => setSelectedCard(item.value)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  radioCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedRadioCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'green',
    elevation: 20
  },
  radioLabel: {
    fontSize: 16,
    color: 'white',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderRadius: 8,
    margin: 10,
  },
  cardLabel: {
    fontSize: 16,
    color: 'white',
  },
});