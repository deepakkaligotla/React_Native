import React, { useState, useRef, FC, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableRipple, RadioButton, List } from 'react-native-paper';

type PaperRadioProps = {};
type State = 'normal' | 'normal-ios' | 'normal-item' | 'custom';

const PaperRadio: FC<PaperRadioProps> = () => {
  const [checked, setChecked] = React.useState<State>('normal');
  const [value, setValue] = React.useState('first');
  const [value2, setValue2] = React.useState('first');
  const [checkedDefault, setCheckedDefault] = React.useState(true);
  const [checkedAndroid, setCheckedAndroid] = React.useState(true);
  const [checkedIOS, setCheckedIOS] = React.useState(true);
  const [checkedLeadingControl, setCheckedLeadingControl] =
    React.useState(true);
  const [checkedDisabled, setCheckedDisabled] = React.useState<boolean>(true);
  const [checkedLabelVariant, setCheckedLabelVariant] = React.useState(true);

  return (
    <View style={[styles.container]}>
      <ScrollView
        horizontal={false}
        contentContainerStyle={styles.contentContainer}>
        <TouchableRipple onPress={() => setChecked('normal')}>
          <View style={styles.row}>
            <Text>Normal - Material Design</Text>
            <View pointerEvents="none">
              <RadioButton.Android
                value="normal"
                status={checked === 'normal' ? 'checked' : 'unchecked'}
              />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => setChecked('normal-ios')}>
          <View style={styles.row}>
            <Text>Normal 2 - IOS</Text>
            <View pointerEvents="none">
              <RadioButton.IOS
                value="normal-ios"
                status={checked === 'normal-ios' ? 'checked' : 'unchecked'}
              />
            </View>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => setChecked('custom')}>
          <View style={styles.row}>
            <Text>Custom</Text>
            <View pointerEvents="none">
              <RadioButton
                value="custom"
                status={checked === 'custom' ? 'checked' : 'unchecked'}
              />
            </View>
          </View>
        </TouchableRipple>
        <RadioButton.Item
          label="Normal 3 - Item"
          value="normal-item"
          status={checked === 'normal-item' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('normal-item')}
        />
        <View style={styles.row}>
          <Text>Checked (Disabled)</Text>
          <RadioButton value="first" status="checked" disabled />
        </View>
        <View style={styles.row}>
          <Text>Unchecked (Disabled)</Text>
          <RadioButton value="second" status="unchecked" disabled />
        </View>
        <RadioButton.Item
          label="Checked - Item (Disabled)"
          value="third"
          status="checked"
          disabled
        />
        <RadioButton.Item
          label="Unchecked - Item (Disabled)"
          value="fourth"
          status="unchecked"
          disabled
        />

        <List.Section title="With RadioButton">
          <RadioButton.Group
            value={value}
            onValueChange={(value: string) => setValue(value)}
          >
            <View style={styles.row}>
              <Text>First</Text>
              <RadioButton value="first" />
            </View>
            <View style={styles.row}>
              <Text>Second</Text>
              <RadioButton.Android value="second" />
            </View>
            <View style={styles.row}>
              <Text>Third</Text>
              <RadioButton.IOS value="third" />
            </View>
          </RadioButton.Group>
        </List.Section>
        <List.Section title="With RadioButton.Item">
          <RadioButton.Group
            value={value2}
            onValueChange={(value: string) => setValue2(value)}
          >
            <RadioButton.Item label="First item" value="first" />
            <RadioButton.Item label="Second item" value="second" />
            <RadioButton.Item
              label="Third item"
              value="third"
              labelStyle={{ color: 'white' }}
            />
          </RadioButton.Group>
        </List.Section>
        <RadioButton.Item
          label="Default (will look like whatever system this is running on)"
          status={checkedDefault ? 'checked' : 'unchecked'}
          onPress={() => setCheckedDefault(!checkedDefault)}
          value="default"
        />
        <RadioButton.Item
          label="Material Design"
          mode="android"
          status={checkedAndroid ? 'checked' : 'unchecked'}
          onPress={() => setCheckedAndroid(!checkedAndroid)}
          value="android"
        />
        <RadioButton.Item
          label="iOS"
          mode="ios"
          status={checkedIOS ? 'checked' : 'unchecked'}
          onPress={() => setCheckedIOS(!checkedIOS)}
          value="iOS"
        />
        <RadioButton.Item
          label="Default with leading control"
          status={checkedLeadingControl ? 'checked' : 'unchecked'}
          onPress={() => setCheckedLeadingControl(!checkedLeadingControl)}
          value="iOS"
          position="leading"
        />
        <RadioButton.Item
          label="Disabled checkbox"
          status={checkedDisabled ? 'checked' : 'unchecked'}
          onPress={() => setCheckedDisabled(!checkedDisabled)}
          value="iOS"
          disabled
        />
        <RadioButton.Item
          label="Default with titleLarge title variant"
          labelVariant="titleLarge"
          status={checkedLabelVariant ? 'checked' : 'unchecked'}
          onPress={() => setCheckedLabelVariant(!checkedLabelVariant)}
          value="default"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center'
  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default PaperRadio;