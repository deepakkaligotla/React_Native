import React from 'react';
import { View, Image } from 'react-native';
import { Badge } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface PaperBadgeProps { }

const PaperBadge: React.FC<PaperBadgeProps> = () => {
    return (
        <>
            <View style={{ alignItems: 'center', marginTop: 50 }}>
                <View>
                    <Ionicons name="notifications-outline" size={50} />
                    <Badge style={{ position: 'absolute', top: 0, right: 0 }} size={20}>
                        3
                    </Badge>
                </View>
                <View style={{ marginTop: 20 }}>
                    <Image
                        source={{ uri: 'https://reactnative.dev/img/logo-og.png' }}
                        style={{ width: 100, height: 100, borderRadius: 50 }}
                    />
                    <Badge style={{ position: 'absolute', top: 0, right: 0 }} size={20}>
                        42
                    </Badge>
                </View>
            </View>
        </>
    );
};

export default PaperBadge;
