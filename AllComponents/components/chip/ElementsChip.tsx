import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Chip } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

const ElementsChip = () => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center', fontSize:24}}>Elements - chip</Text>
      <ScrollView
        horizontal={false}
        contentContainerStyle={styles.contentContainer}
      >
        <Chip title="Solid Chip" containerStyle={styles.chip} />
        <Chip title="Disabled Chip" disabled containerStyle={styles.chip} />
        <Chip title="Outlined Chip" type="outline" containerStyle={styles.chip} />
        <Chip
          title="Outlined & Disabled"
          type="outline"
          disabled
          containerStyle={styles.chip}
        />
        <Chip
          title="Left Icon Chip"
          icon={{
            name: 'bluetooth',
            type: 'font-awesome',
            size: 20,
            color: 'white',
          }}
          containerStyle={styles.chip}
        />
        <Chip
          title="Right Icon Chip"
          icon={{
            name: 'close',
            type: 'font-awesome',
            size: 20,
            color: 'white',
          }}
          iconRight
          containerStyle={styles.chip}
        />
        <Chip
          title="Pressable Icon Chip"
          icon={{
            name: 'bluetooth',
            type: 'font-awesome',
            size: 20,
            color: 'white',
          }}
          onPress={() => console.log('Icon chip was pressed!')}
          type="outline"
          containerStyle={styles.chip}
        />
        <Chip
          title="Pressable Icon Chip"
          icon={{
            name: 'close',
            type: 'font-awesome',
            size: 20,
            color: 'white',
          }}
          onPress={() => console.log('Icon chip was pressed!')}
          iconRight
          type="outline"
          containerStyle={styles.chip}
        />
        <Chip
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ['red', 'pink'],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 },
          }}
          containerStyle={styles.chip}
        />
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

export default ElementsChip;