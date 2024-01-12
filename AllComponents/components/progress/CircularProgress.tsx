import React, { FC, useEffect, useState } from 'react';
import { View, StyleSheet, Animated, Text } from 'react-native';

interface CircularProgressProps {
  radius: number
}

const CircularProgress: FC<CircularProgressProps> = ({ radius }) => {
  const [circularProgress, setCircularProgress] = useState(0);

  const [topRightBorderColor, setTopRightBorderColor] = useState('black');
  const [bottomRightBorderColor, setBottomRightBorderColor] = useState('black');
  const [bottomLeftBorderColor, setBottomLeftBorderColor] = useState('black');
  const [topLeftBorderColor, setTopLeftBorderColor] = useState('black');
  const [topRightBorderColor2, setTopRightBorderColor2] = useState('black');
  const [topLeftBorderColor2, setTopLeftBorderColor2] = useState('black');

  useEffect(() => {
    const simulateProgress = () => {
      let currentProgress = 0;
      const interval = setInterval(() => {
        if (currentProgress <= 1) {
          setCircularProgress(currentProgress);
          currentProgress += 0.003;
        } else {
          clearInterval(interval);
        }
      }, 50);
    };

    simulateProgress();
    return () => {
  
    };
  }, []);

  useEffect(() => {
    if (Math.round(circularProgress * 100) >= 0 && Math.round(circularProgress * 100) < 25) {
      setTopRightBorderColor('white')
      setTopRightBorderColor2('black')
      setTopLeftBorderColor2('transparent')
    }
    if (Math.round(circularProgress * 100) >= 25 && Math.round(circularProgress * 100) < 50) {
      setBottomRightBorderColor('white')
      setTopRightBorderColor2('black')
      setTopLeftBorderColor2('transparent')
    }
    if (Math.round(circularProgress * 100) >= 50 && Math.round(circularProgress * 100) < 75) {
      setBottomLeftBorderColor('white')
      setTopRightBorderColor2('black')
      setTopLeftBorderColor2('transparent')
    }
    if (Math.round(circularProgress * 100) >= 75 && Math.round(circularProgress * 100) <= 100) {
      setTopLeftBorderColor('black')
      setTopRightBorderColor2('transparent')
      setTopLeftBorderColor2('white')
    }
    return () => {
  
    };
  }, [circularProgress]);

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', margin: 20 }}>
      <View style={{}}>
        <View style={{ width: radius, height: radius, borderRadius: radius/2 }} />
        <View style={{ top: 0, right: 0, width: radius/2, height: radius/2, backgroundColor: 'transparent', borderColor: topRightBorderColor, borderWidth: 5, borderTopRightRadius: radius/2, position: 'absolute' }} />
        <View style={{ bottom: 0, right: 0, width: radius/2, height: radius/2, backgroundColor: 'transparent', borderColor: bottomRightBorderColor, borderWidth: 5, borderBottomRightRadius: radius/2, position: 'absolute' }} />
        <View style={{ bottom: 0, left: 0, width: radius/2, height: radius/2, backgroundColor: 'transparent', borderColor: bottomLeftBorderColor, borderWidth: 5, borderBottomLeftRadius: radius/2, position: 'absolute' }} />
        <View style={{ top: 0, left: 0, width: radius/2, height: radius/2, backgroundColor: 'transparent', borderColor: topLeftBorderColor, borderWidth: 5, borderTopLeftRadius: radius/2, position: 'absolute' }} />
      </View>
      <View style={{ position: 'absolute', transform: [{ rotate: `${Math.round(circularProgress*100)*3.6}deg` }] }}>
        <View style={{ width: radius, height: radius, borderRadius: radius/2 }} />
        <View style={{ top: 0, right: 0, width: radius/2, height: radius/2, backgroundColor: 'transparent', borderColor: topRightBorderColor2, borderWidth: 10, borderTopRightRadius: radius/2, position: 'absolute' }} />
      </View>
      <View style={{ position: 'absolute', transform: [{ rotate: `${Math.round(circularProgress*100)*3.6}deg` }] }}>
        <View style={{ width: radius, height: radius, borderRadius: radius/2 }} />
        <View style={{ top: 0, left: 0, width: radius/2, height: radius/2, backgroundColor: 'transparent', borderColor: topLeftBorderColor2, borderWidth: 10, borderTopLeftRadius: radius/2, position: 'absolute' }} />
      </View>
      <View style={{ position: 'absolute' }}>
        <View style={{ top: 0, right: 0, width: radius-10, height: radius-10, backgroundColor: 'black', borderRadius: radius/2 }} />
      </View>
      <View style={{ position: 'absolute' }}><Text style={{fontSize:24}}>{Math.round(circularProgress*100)}%</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default CircularProgress;