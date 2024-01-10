import React, { useState, FunctionComponent } from 'react';
import { Button, Dialog, CheckBox, ListItem, Avatar } from 'react-native-elements';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

type DialogComponentProps = {};

const Dialogs: FunctionComponent<DialogComponentProps> = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);
  const [checked, setChecked] = useState(1);
  const { commonStyles } = useTheme()

  const toggleDialog1 = () => {
    setVisible1(!visible1);
  };
  const toggleDialog2 = () => {
    setVisible2(!visible2);
  };
  const toggleDialog3 = () => {
    setVisible3(!visible3);
  };
  const toggleDialog4 = () => {
    setVisible4(!visible4);
  };
  const toggleDialog5 = () => {
    setVisible5(!visible5);
  };
  const toggleDialog6 = () => {
    setVisible6(!visible6);
  };

  const userlist = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://reactnative.dev/img/logo-og.png',
      subtitle: 'amy.farha@gmail.com',
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://reactnative.dev/img/logo-og.png',
      subtitle: 'cjackson@gmail.com',
    },
    {
      name: 'Amanda Martin',
      avatar_url: 'https://reactnative.dev/img/logo-og.png',
      subtitle: 'amandam@gmail.com',
    },
  ];

  return (
    <View>
      <Text style={[{ textAlign: 'center', fontSize: 24 }, commonStyles.text]}>Elements Dialog</Text>
      <View style={[styles.buttonContainer, { flexDirection: 'row', maxWidth: useWindowDimensions().width, margin: 10, flexWrap:'wrap' }]}>
        <Button
          title="Open Simple Dialog"
          onPress={toggleDialog1}
          buttonStyle={styles.button}
        />
        <Button
          title="Open Mutli Action Dialog"
          onPress={toggleDialog2}
          buttonStyle={styles.button}
        />
        <Button
          title="Open Loading Dialog"
          onPress={toggleDialog3}
          buttonStyle={styles.button}
        />
        <Button
          title="Open Buttonless Dialog"
          onPress={toggleDialog4}
          buttonStyle={styles.button}
        />
        <Button
          title="Open Custom Dialog 1"
          onPress={toggleDialog5}
          buttonStyle={styles.button}
        />
        <Button
          title="Open Custom Dialog 2"
          onPress={toggleDialog6}
          buttonStyle={styles.button}
        />
      </View>
      <Dialog overlayStyle={{ backgroundColor: 'black' }} isVisible={visible1} onBackdropPress={toggleDialog1}>
        <Dialog.Title title="Dialog Title" />
        <Text style={[commonStyles.text]}>Dialog body text. Add relevant information here.</Text>
      </Dialog>
      <Dialog overlayStyle={{ backgroundColor: 'black' }} isVisible={visible2} onBackdropPress={toggleDialog2}>
        <Dialog.Title titleStyle={[commonStyles.text]} title="Dialog Title" />
        <Text style={[commonStyles.text]}>Dialog body text. Add relevant information here.</Text>
        <Dialog.Actions>
          <Dialog.Button
            title="ACTION 1"
            onPress={() => console.log('Primary Action Clicked!')}
          />
          <Dialog.Button
            title="ACTION 2"
            onPress={() => console.log('Secondary Action Clicked!')}
          />
        </Dialog.Actions>
      </Dialog>
      <Dialog overlayStyle={{ backgroundColor: 'black' }} isVisible={visible3} onBackdropPress={toggleDialog3}>
        <Dialog.Loading />
      </Dialog>
      <Dialog overlayStyle={{ backgroundColor: 'black' }} isVisible={visible4} onBackdropPress={toggleDialog4}>
        <Dialog.Title title="Dialog Title" />
        <Text style={[commonStyles.text]}>Dialog body text. Add relevant information here.</Text>
      </Dialog>
      <Dialog overlayStyle={{ backgroundColor: 'black' }} isVisible={visible5} onBackdropPress={toggleDialog5}>
        <Dialog.Title title="Select Preference" />
        {['Option 1', 'Option 2', 'Option 3'].map((l, i) => (
          <CheckBox
            key={i}
            title={l}
            containerStyle={{ backgroundColor: 'black', borderWidth: 0 }}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked === i + 1}
            onPress={() => setChecked(i + 1)}
          />
        ))}
        <Dialog.Actions>
          <Dialog.Button
            title="CONFIRM"
            onPress={() => {
              console.log(`Option ${checked} was selected!`);
              toggleDialog5();
            }}
          />
          <Dialog.Button title="CANCEL" onPress={toggleDialog5} />
        </Dialog.Actions>
      </Dialog>
      <Dialog overlayStyle={{ backgroundColor: 'black' }} isVisible={visible6} onBackdropPress={toggleDialog6}>
        <Dialog.Title title="Choose Account" />
        {userlist.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={{
              backgroundColor: 'gray',
              marginHorizontal: -10,
              borderRadius: 8,
            }}
            onPress={toggleDialog6}
          >
            <Avatar rounded source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title style={[{ fontWeight: '700' }, commonStyles.text]}>
                {l.name}
              </ListItem.Title>
              <ListItem.Subtitle style={[commonStyles.text]}>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
      </Dialog>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    margin: 5,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dialogs;