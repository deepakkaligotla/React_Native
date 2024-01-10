import React, { useState } from 'react';
import { useTheme } from '../theme/ThemeContext';
import { Alert, Modal, Pressable, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

interface DialogProps {
  
}

const Dialog: React.FC<DialogProps> = ({  }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const {isDarkTheme, commonStyles} = useTheme()

    return (
      <View style={styles.centeredView}>
        <Text style={[{ textAlign: 'center', fontSize: 24 }, commonStyles.text]}>Dialog</Text>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>

          <View style={styles.centeredView}>
            <View style={[{backgroundColor: isDarkTheme ? 'black' : 'white'}, styles.modalView]}>
                <MaterialCommunityIcons name='bell-alert-outline' size={24}/>
                <Text style={[{fontWeight:'bold'}, commonStyles.text]}>Alert!</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={[commonStyles.text]}>OK</Text>
                </Pressable>
            </View>
          </View>

        </Modal>

        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={[commonStyles.text]}>Show Modal</Text>
        </Pressable>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      borderRadius: 20,
      alignItems: 'center',
      justifyContent:'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: Dimensions.get('window').width-150,
      height: 150
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
  });
  

export default Dialog;