import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface SegmentProps {
    BadgeIcon: () => any
    notificationCount: number
}

const Badge: React.FC<SegmentProps> = ({ BadgeIcon, notificationCount}) => {
    return (
        <View style={styles.container}>
            <BadgeIcon/>
            <TouchableOpacity style={styles.badgeContainer}>
                <Text style={styles.badgeText}>{notificationCount}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      position: 'relative',
    },
    badgeContainer: {
      position: 'absolute',
      top: 0,
      right: 0,
      backgroundColor: 'red',
      borderRadius: 10,
      width: 20,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    badgeText: {
      color: 'white',
      fontSize: 12,
      fontWeight: 'bold',
    },
  });

export default Badge;