import React, { useState, FunctionComponent, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

type LinearProgressProps = {
};

const LinearProgress: FunctionComponent<LinearProgressProps> = ({  }) => {
  const { commonStyles } = useTheme()
  const [linearProgress, setLinearProgress] = useState(0);

  useEffect(() => {
    const simulateProgress = () => {
      let currentProgress = 0;
      const interval = setInterval(() => {
        if (currentProgress <= 1) {
          setLinearProgress(currentProgress);
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

  return (
    <View style={[styles.container]}>
      <Text style={{ textAlign: 'center', fontSize: 18 }}>Linear Progress</Text>
      <View style={[styles.contentContainer]}>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${linearProgress * 100}%` }]} />
          <Text style={styles.progressText}>{`${Math.round(linearProgress * 100)}%`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignContent: 'center',
  },
  contentContainer: {
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  progressBarContainer: {
    width: 200,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    overflow: 'hidden',
    marginTop: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#2196F3',
  },
  progressText: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#fff',
  },
});

export default LinearProgress;