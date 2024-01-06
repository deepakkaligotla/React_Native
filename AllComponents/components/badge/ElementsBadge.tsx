import React from 'react';
import { View } from 'react-native';
import { Avatar, Badge } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ElementsBadgeProps {}

const ElementsBadge: React.FC<ElementsBadgeProps> = () => {
  return (
    <>
      <View>
        <Avatar
          rounded
          source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
          size="medium"
        />
        <Badge
          status="success"
          containerStyle={{ position: 'absolute', top: 5, left: 40 }}
        />
      </View>
      <View>
        <Ionicons name="notifications-outline" size={50} />
        <Badge
          status="error"
          containerStyle={{ position: 'absolute', top: -4, right: -4 }}
        />
      </View>
    </>
  );
};

export default ElementsBadge;
