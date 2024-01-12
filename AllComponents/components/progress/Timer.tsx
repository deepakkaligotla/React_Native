import React, { FC, useEffect, useState } from 'react';
import { View, StyleSheet, Animated, Text } from 'react-native';

interface TimerProps {
  radius: number
}

const Timer: FC<TimerProps> = ({ radius }) => {
  const [timerProgress, setTimerProgress] = useState(0);

  const [topRightBorderColor, setTopRightBorderColor] = useState('black');
  const [bottomRightBorderColor, setBottomRightBorderColor] = useState('black');
  const [bottomLeftBorderColor, setBottomLeftBorderColor] = useState('black');
  const [topLeftBorderColor, setTopLeftBorderColor] = useState('black');
  const [topleftBorderColor2, setTopleftBorderColor2] = useState('black');
  const [topRightBorderColor2, setTopRightBorderColor2] = useState('black');

  useEffect(() => {
    const simulateProgress = () => {
      let currentProgress = 0;
      const interval = setInterval(() => {
        if (currentProgress <= 1) {
          setTimerProgress(currentProgress);
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
    if (Math.round(timerProgress * 100) >= 0 && Math.round(timerProgress * 100) < 25) {
      setTopLeftBorderColor('white')
      setTopleftBorderColor2('black')
      setTopRightBorderColor2('transparent')
    }
    if (Math.round(timerProgress * 100) >= 25 && Math.round(timerProgress * 100) < 50) {
      setBottomLeftBorderColor('white')
      setTopleftBorderColor2('black')
      setTopRightBorderColor2('transparent')
    }
    if (Math.round(timerProgress * 100) >= 50 && Math.round(timerProgress * 100) < 75) {
      setBottomRightBorderColor('white')
      setTopleftBorderColor2('black')
      setTopRightBorderColor2('transparent')
    }
    if (Math.round(timerProgress * 100) >= 75 && Math.round(timerProgress * 100) <= 100) {
      setTopRightBorderColor('black')
      setTopleftBorderColor2('transparent')
      setTopRightBorderColor2('white')
    }
    return () => {
  
    };
  }, [timerProgress]);

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', margin: 20 }}>
      <View style={{}}>
        <View style={{ width: radius, height: radius, borderRadius: radius/2 }} />
        <View style={{ top: 0, left: 0, width: radius/2, height: radius/2, backgroundColor: 'transparent', borderColor: topLeftBorderColor, borderWidth: 5, borderTopLeftRadius: radius/2, position: 'absolute' }} />
        <View style={{ bottom: 0, left: 0, width: radius/2, height: radius/2, backgroundColor: 'transparent', borderColor: bottomLeftBorderColor, borderWidth: 5, borderBottomLeftRadius: radius/2, position: 'absolute' }} />
        <View style={{ bottom: 0, right: 0, width: radius/2, height: radius/2, backgroundColor: 'transparent', borderColor: bottomRightBorderColor, borderWidth: 5, borderBottomRightRadius: radius/2, position: 'absolute' }} />
        <View style={{ top: 0, right: 0, width: radius/2, height: radius/2, backgroundColor: 'transparent', borderColor: topRightBorderColor, borderWidth: 5, borderTopRightRadius: radius/2, position: 'absolute' }} />
      </View>
      <View style={{ position: 'absolute', transform: [{ rotate: `${360 - Math.round(timerProgress * 100) * 3.6}deg` }] }}>
        <View style={{ width: radius, height: radius, borderRadius: radius/2 }} />
        <View style={{ top: 0, left: 0, width: radius/2, height: radius/2, backgroundColor: 'transparent', borderColor: topleftBorderColor2, borderWidth: 10, borderTopLeftRadius: radius/2, position: 'absolute' }} />
      </View>
      <View style={{ position: 'absolute', transform: [{ rotate: `${360 - Math.round(timerProgress * 100) * 3.6}deg` }] }}>
        <View style={{ width: radius, height: radius, borderRadius: radius/2 }} />
        <View style={{ top: 0, right: 0, width: radius/2, height: radius/2, backgroundColor: 'transparent', borderColor: topRightBorderColor2, borderWidth: 10, borderTopRightRadius: radius/2, position: 'absolute' }} />
      </View>
      <View style={{ position: 'absolute' }}>
        <View style={{ top: 0, right: 0, width: radius-10, height: radius-10, backgroundColor: 'black', borderRadius: radius/2 }} />
      </View>
      <View style={{ position: 'absolute' }}><Text style={{fontSize:24}}>{Math.floor((1-timerProgress)/0.6)}:{(Math.round((100-timerProgress*100)%60))}</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default Timer;