import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearProgress, Button } from 'react-native-elements';

const ElementsProgress = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let subs = true;
    if (progress < 1 && progress !== 0) {
      setTimeout(() => {
        if (subs) {
          setProgress(progress + 0.1);
        }
      }, 100);
    }
    return () => {
      subs = false;
    };
  }, [progress]);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View>
          <View
            style={{
              margin: 10,
            }}
          >
            <Text>Indeterminate Variant </Text>
            <LinearProgress style={{ marginVertical: 10 }} />
            <Text>Indeterminate Variant with color</Text>
            <LinearProgress style={{ marginVertical: 10 }} color="red" />
            <Text>Determinate Variant</Text>
            <LinearProgress
              style={{ marginVertical: 10 }}
              value={progress}
              variant="determinate"
            />

            <Button
              disabled={progress > 0}
              onPress={() => {
                setProgress(0.00001);
              }}
              title={'Start Progress'}
              containerStyle={{ margin: 10 }}
            />
            <Button
              disabled={progress === 0}
              onPress={() => {
                setProgress(0);
              }}
              title={'Restart'}
              containerStyle={{ margin: 10 }}
            />
          </View>
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
});

export default ElementsProgress;