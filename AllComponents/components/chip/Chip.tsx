import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

interface CustomChipProps {
  title: string;
  icon?: string;
  onPress: () => void;
}

const CustomChip: React.FC<CustomChipProps> = ({ title, icon, onPress }) => {
    const isRightIconChip = title === 'Right Icon Chip';
  
    return (
      <TouchableOpacity style={styles.chip} onPress={onPress}>
        {isRightIconChip ? null : icon && <Image source={{ uri: icon }} style={styles.icon} />}
        <Text>{title}</Text>
        {isRightIconChip && icon && <Image source={{ uri: icon }} style={styles.icon} />}
      </TouchableOpacity>
    );
  };

const Chip = () => {
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const handleChipPress = () => {
    setSnackbarVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center', fontSize: 24 }}>Custom Chip</Text>
      <ScrollView
        horizontal={false}
        contentContainerStyle={styles.contentContainer}
      >
        <CustomChip title="Solid Chip" onPress={() => console.log('Solid Chip pressed')} />
        <CustomChip title="Disabled Chip" onPress={() => console.log('Disabled Chip pressed')} />
        <CustomChip title="Outlined Chip" onPress={() => console.log('Outlined Chip pressed')} />
        <CustomChip title="Outlined & Disabled" onPress={() => console.log('Outlined & Disabled Chip pressed')} />
        <CustomChip title="Left Icon Chip" icon="https://reactnative.dev/img/logo-og.png" onPress={() => console.log('Left Icon Chip pressed')} />
        <CustomChip title="Right Icon Chip" icon="https://reactnative.dev/img/logo-og.png" onPress={() => console.log('Right Icon Chip pressed')} />
        <CustomChip title="Pressable Icon Chip" icon="https://reactnative.dev/img/logo-og.png" onPress={() => console.log('Pressable Icon Chip pressed')} />
        <CustomChip title="Pressable Icon Chip" icon="https://reactnative.dev/img/logo-og.png" onPress={() => console.log('Pressable Icon Chip pressed')} />
        <CustomChip title="LinearGradient Chip" icon="https://reactnative.dev/img/logo-og.png" onPress={() => console.log('LinearGradient Chip pressed')} />
      </ScrollView>

      {snackbarVisible && (
        <View style={styles.snackbar}>
          <Text>Snackbar is visible!</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  chip: {
    marginVertical: 2,
    marginHorizontal: 2,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  snackbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#333',
    paddingVertical: 16,
    alignItems: 'center',
  },
});

export default Chip;