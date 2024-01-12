import React, { useState, useRef, FC, useEffect } from 'react';
import { View, StyleSheet, Switch, TouchableOpacity, Animated, LayoutAnimation, Platform, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

type CustomSwitchProps = {
  initialValue?: boolean;
  onColor?: string;
  offColor?: string;
  onToggle?: (value: boolean) => void;
};

const CustomSwitch: FC<CustomSwitchProps> = ({ initialValue = false, onColor = 'green', offColor = 'red', onToggle }) => {
  const [switchVisible, setSwitchVisible] = useState(initialValue);
  const positionAnim = useRef(new Animated.Value(initialValue ? 1 : 0)).current;

  useEffect(() => {
    if (Platform.OS === 'android') {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
  }, [switchVisible]);

  const handleToggle = () => {
    const newValue = !switchVisible;
    setSwitchVisible(newValue);
    onToggle && onToggle(newValue);

    Animated.timing(positionAnim, {
      toValue: newValue ? 1 : 0,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const innerCircleStyle = {
    transform: [
      {
        translateX: positionAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [-8, 12],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>

        <Text>React Native Switch</Text>
        <Switch
          value={switchVisible}
          onValueChange={handleToggle}
          thumbColor={switchVisible ? onColor : offColor}
          ios_backgroundColor='transparent'
        />

        <Text>Switch created using View</Text>
        <View style={{ margin: 15 }}>
          <TouchableOpacity onPress={handleToggle} activeOpacity={0.8}>
            <View style={[styles.switchContainer]}>
              <Animated.View style={[styles.switchInnerCircle, innerCircleStyle, switchVisible ? { backgroundColor: onColor } : { backgroundColor: offColor }]} />
            </View>
          </TouchableOpacity>
        </View>

        <Text>Electronic switch</Text>
        <View style={{ margin: 15 }}>
          <TouchableOpacity onPress={handleToggle} activeOpacity={0.8}>
            <MaterialCommunityIcons name={switchVisible ? 'electric-switch-closed' : 'electric-switch'} size={36} />
          </TouchableOpacity>
        </View>

        <Text>Thumb switch</Text>
        <View style={{ margin: 15 }}>
          <TouchableOpacity onPress={handleToggle} activeOpacity={0.8}>
            <View style={[styles.switchContainer]}>
              <Animated.View style={[styles.switchInnerCircle, innerCircleStyle, { backgroundColor: 'black' }]}>
                <FontAwesome5 name={switchVisible ? 'thumbs-up' : 'thumbs-down'} size={15} color={switchVisible ? onColor : offColor} solid={true} />
              </Animated.View>
            </View>
          </TouchableOpacity>
        </View>

        <Text>Icon switch</Text>
        <View style={{ margin: 15 }}>
          <TouchableOpacity onPress={handleToggle} activeOpacity={0.8}>
            <View style={[styles.switchContainer]}>
              <Animated.View style={[styles.switchInnerCircle, innerCircleStyle, { backgroundColor: 'black' }]}>
                <Ionicons name={switchVisible ? 'checkmark-sharp' : 'close'} size={20} color={switchVisible ? onColor : offColor} />
              </Animated.View>
            </View>
          </TouchableOpacity>
        </View>

        <Text>Animated switch</Text>
        <View style={{ margin: 15 }}>
          <TouchableOpacity onPress={handleToggle} activeOpacity={0.8} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View style={[styles.switchContainer, { zIndex: 1, backgroundColor: 'transparent', borderColor: 'transparent' }]}>
              <Animated.View style={[styles.switchInnerCircle, innerCircleStyle]}>
                <Entypo name={switchVisible ? 'power-plug' : 'power-plug'} size={20} color={switchVisible ? onColor : offColor} />
              </Animated.View>
            </View>
            <View style={{ left: -22 }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ top: 5, right: 3 }}>
                  <Animatable.View animation={switchVisible ? "swing" : null} iterationCount="infinite">
                    <MaterialCommunityIcons name='lightning-bolt-outline' size={16} style={{ color: switchVisible ? '#FFD700' : 'white' }} />
                  </Animatable.View>
                </View>
                <View>
                  <View style={{ bottom: 3, left: 10 }}>
                    <Animatable.View animation={switchVisible ? "tada" : null} iterationCount="infinite">
                      <MaterialCommunityIcons name='lightning-bolt-outline' size={16} style={{ color: switchVisible ? '#FFD700' : 'white' }} />
                    </Animatable.View>
                  </View>
                  <MaterialCommunityIcons name='power-socket-eu' size={20} style={{ backgroundColor: 'transparent', transform: [{ rotate: '90deg' }] }} />
                  <View style={{ top: 3, left: 0 }}>
                    <Animatable.View animation={switchVisible ? "flash" : null} iterationCount="infinite">
                      <MaterialCommunityIcons name='lightning-bolt-outline' size={16} style={{ color: switchVisible ? '#FFD700' : 'white' }} />
                    </Animatable.View>
                  </View>
                </View>
                <View style={{ top: 24, left: 3 }}>
                  <Animatable.View animation={switchVisible ? "rotate" : null} iterationCount="infinite">
                    <MaterialCommunityIcons name='lightning-bolt-outline' size={16} style={{ color: switchVisible ? '#FFD700' : 'white' }} />
                  </Animatable.View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

      </View>
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
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  switchContainer: {
    width: 28,
    height: 16,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 2,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
  },
  switchInnerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default CustomSwitch;
