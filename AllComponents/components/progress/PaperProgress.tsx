import React from 'react';
import { Animated, ScrollView, StyleSheet, View } from 'react-native';
import { Button, ProgressBar, MD2Colors, MD3Colors, Text, ProgressBarProps } from 'react-native-paper';

class ClassProgressBar extends React.Component {
  constructor(props: ProgressBarProps) {
    super(props);
  }

  render() {
    return <ProgressBar {...this.props} />;
  }
}

const AnimatedProgressBar = Animated.createAnimatedComponent(ClassProgressBar);

const PaperProgress = () => {
  const [visible, setVisible] = React.useState<boolean>(true);
  const [progress, setProgress] = React.useState<number>(0.3);
  const { current: progressBarValue } = React.useRef(new Animated.Value(0));

  const runCustomAnimation = () => {
    progressBarValue.setValue(0);
    Animated.timing(progressBarValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={false}
        contentContainerStyle={styles.contentContainer}
      >
        <Button onPress={() => setVisible(!visible)}>Toggle visibility</Button>
      <Button onPress={() => setProgress(Math.random())}>
        Random progress
      </Button>
      <Button onPress={runCustomAnimation}>Toggle animation</Button>

      <View style={styles.row}>
        <Text variant="bodyMedium">Default ProgressBar</Text>
        <ProgressBar progress={progress} visible={visible} />
      </View>

      <View style={styles.row}>
        <Text variant="bodyMedium">Indeterminate ProgressBar</Text>
        <ProgressBar indeterminate visible={visible} />
      </View>

      <View style={styles.row}>
        <Text variant="bodyMedium">ProgressBar with custom color</Text>
        <ProgressBar
          progress={progress}
          visible={visible}
        />
      </View>

      <View style={styles.row}>
        <Text variant="bodyMedium">
          ProgressBar with custom background color
        </Text>
        <ProgressBar
          progress={progress}
          visible={visible}
          color={MD2Colors.red800}
        />
      </View>

      <View style={styles.row}>
        <Text variant="bodyMedium">ProgressBar with custom height</Text>
        <ProgressBar
          progress={progress}
          visible={visible}
          style={styles.customHeight}
        />
      </View>

      <View style={styles.row}>
        <Text variant="bodyMedium">ProgressBar with animated value</Text>
        <AnimatedProgressBar
          visible={visible}
          style={styles.progressBar}
          animatedValue={progressBarValue}
        />
      </View>

      <View style={[styles.row, styles.fullRow]}>
        <Text variant="bodyMedium">
          ProgressBar with custom percentage height
        </Text>
        <ProgressBar
          style={styles.customPercentageHeight}
          indeterminate
          visible={visible}
        />
      </View>
      </ScrollView>
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
  },
  row: {
    marginVertical: 10,
  },
  fullRow: {
    height: '100%',
    width: '100%',
  },
  customHeight: {
    height: 20,
  },
  customPercentageHeight: {
    height: '50%',
  },
  progressBar: {
    height: 15,
  },
});

export default PaperProgress;