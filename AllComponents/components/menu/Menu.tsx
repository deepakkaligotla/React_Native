import React, { useState, useRef, FC, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Modal, Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'

type MenuProps = {};

const Menu: FC<MenuProps> = () => {
  const [menu1Visible, setMenu1Visible] = useState(false);
  const [menu2Visible, setMenu2Visible] = useState(false);
  const [menu3Visible, setMenu3Visible] = useState(false);
  const [menu3TooltipVisible, setMenu3TooltipVisible] = useState(false);
  const [menu4Visible, setMenu4Visible] = useState(false);

  const [menu1ButtonPosition, setMenu1ButtonPosition] = useState({ x: 0, y: 0, width: 0, height: 0, pageX: 0, pageY: 0 });
  const [menu2ButtonPosition, setMenu2ButtonPosition] = useState({ x: 0, y: 0, width: 0, height: 0, pageX: 0, pageY: 0 });
  const [menu3ButtonPosition, setMenu3ButtonPosition] = useState({ x: 0, y: 0, width: 0, height: 0, pageX: 0, pageY: 0 });
  const [menu3TooltipPosition, setMenu3TooltipPosition] = useState({ x: 0, y: 0, width: 0, height: 0, pageX: 0, pageY: 0 });
  const [menu4ButtonPosition, setMenu4ButtonPosition] = useState({ x: 0, y: 0, width: 0, height: 0, pageX: 0, pageY: 0 });
  const [menu4Position, setMenu4Position] = useState({ x: 0, y: 0, width: 0, height: 0, pageX: 0, pageY: 0 });

  const buttonRefs = {
    menu1Button: useRef<View>(null),
    menu2Button: useRef<View>(null),
    menu3Button: useRef<View>(null),
    menu4Button: useRef<View>(null)
  }

  const tooltipRefs = {
    menu3Button: useRef<View>(null)
  }

  const menuRefs = {
    menu4Button: useRef<View>(null)
  }

  const handleMenuItemPress = (item: string) => {
    Alert.alert(`Selected: ${item}`);
  };

  const toggleTooltip = (
    setTooltipVisible: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    setTooltipVisible(!menu3TooltipVisible);
    if (menu3TooltipVisible) {
      setTimeout(() => {
        setTooltipVisible(false);
      }, 3000);
    }
  };

  useEffect(() => {
    let timeoutId: any;
    if (menu3TooltipVisible) {
      timeoutId = setTimeout(() => {
        setMenu3TooltipVisible(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [menu3TooltipVisible]);

  const onMenu1ButtonLayout = () => {
    if (buttonRefs.menu1Button.current) {
      buttonRefs.menu1Button.current.measure((x, y, width, height, pageX, pageY) => {
        setMenu1ButtonPosition({ x, y, width, height, pageX, pageY });
      });
    }
  };

  const onMenu2ButtonLayout = () => {
    if (buttonRefs.menu2Button.current) {
      buttonRefs.menu2Button.current.measure((x, y, width, height, pageX, pageY) => {
        setMenu2ButtonPosition({ x, y, width, height, pageX, pageY });
      });
    }
  };

  const onMenu3ButtonLayout = () => {
    if (buttonRefs.menu3Button.current) {
      buttonRefs.menu3Button.current.measure((x, y, width, height, pageX, pageY) => {
        setMenu3ButtonPosition({ x, y, width, height, pageX, pageY });
      });
    }
    if(tooltipRefs.menu3Button.current) {
      tooltipRefs.menu3Button.current.measure((x, y, width, height, pageX, pageY) => {
        setMenu3TooltipPosition({ x, y, width, height, pageX, pageY });
      });
    }
  };

  const onMenu4ButtonLayout = () => {
    if (buttonRefs.menu4Button.current) {
      buttonRefs.menu4Button.current.measure((x, y, width, height, pageX, pageY) => {
        setMenu4ButtonPosition({ x, y, width, height, pageX, pageY });
      });
    }
    if (menuRefs.menu4Button.current) {
      menuRefs.menu4Button.current.measure((x, y, width, height, pageX, pageY) => {
        setMenu4Position({ x, y, width, height, pageX, pageY });
      });
    }
  };

  return (
    <View style={[styles.container]}>
      <Text style={{ textAlign: 'center', fontSize: 24 }}>Menu</Text>
      <View style={[styles.contentContainer]}>

        <View style={{ width: 'auto', height: 'auto' }}>
          <View ref={buttonRefs.menu1Button} onLayout={onMenu1ButtonLayout}>
            <TouchableOpacity onPress={() => setMenu1Visible(!menu1Visible)}>
              <MaterialCommunityIcons name='dots-vertical' size={48} />
            </TouchableOpacity>
          </View>
          <Modal animationType="fade" transparent={true} visible={menu1Visible} onRequestClose={() => setMenu1Visible(!menu1Visible)}>
            <View style={[{ backgroundColor: 'black' }, styles.modalView, { position: 'absolute', top:menu1ButtonPosition.pageY+menu1ButtonPosition.height, left:menu1ButtonPosition.pageX }]}>
              <Pressable onPress={() => handleMenuItemPress('Undo')}><Text>Undo</Text></Pressable>
              <Pressable onPress={() => handleMenuItemPress('Redo')}><Text>Redo</Text></Pressable>
              <Pressable onPress={() => handleMenuItemPress('Cut')} disabled><Text>Cut</Text></Pressable>
              <Pressable onPress={() => handleMenuItemPress('Copy')} disabled><Text>Copy</Text></Pressable>
              <Pressable onPress={() => handleMenuItemPress('Paste')}><Text>Paste</Text></Pressable>
            </View>
          </Modal>
        </View>

        <View>
          <View ref={buttonRefs.menu2Button} onLayout={onMenu2ButtonLayout}>
            <TouchableOpacity style={styles.outlinedButton} onPress={() => setMenu2Visible(!menu2Visible)}>
              <Text>Icons menu</Text>
            </TouchableOpacity>
          </View>
          <Modal animationType="fade" transparent={true} visible={menu2Visible} onRequestClose={() => setMenu2Visible(!menu2Visible)}>
            <View style={[{ backgroundColor: 'black' }, styles.modalView, { position: 'absolute', top:menu2ButtonPosition.pageY+menu2ButtonPosition.height, left:menu2ButtonPosition.pageX }]}>
              <Pressable onPress={() => handleMenuItemPress('Undo')}><View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}><Fontisto name='undo'/><Text style={{padding:5}}>Undo</Text></View></Pressable>
              <Pressable onPress={() => handleMenuItemPress('Redo')}><View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}><Fontisto name='redo'/><Text style={{padding:5}}>Redo</Text></View></Pressable>
              <Pressable onPress={() => handleMenuItemPress('Cut')} disabled><View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}><FontAwesome name='cut'/><Text style={{padding:5}}>Cut</Text></View></Pressable>
              <Pressable onPress={() => handleMenuItemPress('Copy')} disabled><View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}><Ionicons name='copy-outline'/><Text style={{padding:5}}>Copy</Text></View></Pressable>
              <Pressable onPress={() => handleMenuItemPress('Paste')}><View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}><MaterialCommunityIcons name='content-paste'/><Text style={{padding:5}}>Paste</Text></View></Pressable>
            </View>
          </Modal>
        </View>

        <View>
          <View ref={buttonRefs.menu3Button} onLayout={onMenu3ButtonLayout}>
            <TouchableOpacity style={styles.outlinedButton}
              onPress={() => toggleTooltip(setMenu3TooltipVisible)}
              onLongPress={() => setMenu3Visible(!menu3Visible)}>
              <Text>Long Press Menu</Text>
            </TouchableOpacity>
          </View>
          <Modal animationType="fade" transparent={true} visible={menu3TooltipVisible} onRequestClose={() => setMenu3TooltipVisible(!menu3TooltipVisible)}>
            <View ref={tooltipRefs.menu3Button} onLayout={onMenu3ButtonLayout}  style={[{ backgroundColor: 'black' }, styles.modalView, { position: 'absolute', top:menu3ButtonPosition.pageY-menu3ButtonPosition.height/1.5, left:menu3ButtonPosition.pageX }]}>
              <Text>Do Long Press</Text>
            </View>
          </Modal>

          <Modal animationType="fade" transparent={true} visible={menu3Visible} onRequestClose={() => setMenu3Visible(!menu3Visible)}>
            <View style={[{ backgroundColor: 'black' }, styles.modalView, { position: 'absolute', top:menu3ButtonPosition.pageY+menu3ButtonPosition.height, left:menu3ButtonPosition.pageX }]}>
              <Pressable onPress={() => handleMenuItemPress('Item 1')}><Text>Item 1</Text></Pressable>
              <Pressable onPress={() => handleMenuItemPress('Item 2')}><Text>Item 2</Text></Pressable>
              <Pressable onPress={() => handleMenuItemPress('Item 3')} disabled><Text>Item 3</Text></Pressable>
            </View>
          </Modal>
        </View>

        <View>
          <View ref={buttonRefs.menu4Button} onLayout={onMenu4ButtonLayout}>
            <TouchableOpacity style={styles.outlinedButton} onPress={() => setMenu4Visible(!menu4Visible)}>
              <Text>Show Menu 4</Text>
            </TouchableOpacity>
          </View>

          <Modal animationType="fade" transparent={true} visible={menu4Visible} onRequestClose={() => setMenu4Visible(!menu4Visible)}>
            <View ref={menuRefs.menu4Button} onLayout={onMenu4ButtonLayout} style={[{ backgroundColor: 'black' }, styles.modalView, { position: 'absolute', top:menu4ButtonPosition.pageY-menu4Position.height, left:menu4ButtonPosition.pageX }]}>
              <Pressable onPress={() => handleMenuItemPress('Bottom Item 1')}><Text>Bottom Item 1</Text></Pressable>
              <Pressable onPress={() => handleMenuItemPress('Bottom Item 2')}><Text>Bottom Item 2</Text></Pressable>
              <Pressable onPress={() => handleMenuItemPress('Bottom Item 3')}><Text>Bottom Item 3</Text></Pressable>
            </View>
          </Modal>
        </View>
      </View>
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
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  outlinedButton: {
    borderWidth: 0.5,
    borderColor: 'white',
    padding: 10,
    margin: 5,
    borderRadius: 20,
  },
  modalView: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
  },
});

export default Menu;