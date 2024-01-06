import React from 'react';
import { Card, Button, Icon, Text } from 'react-native-elements';

interface ElementsCardProps {
  title: string;
  imageUri: string;
  description: string;
}

const ElementsCard: React.FC<ElementsCardProps> = ({ title, imageUri, description }) => {
  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      <Card.Divider />
      <Card.Image
        style={{ padding: 0 }}
        source={{
          uri: imageUri,
        }}
      />
      <Text style={{ marginBottom: 10 }}>{description}</Text>
      <Button
        icon={
          <Icon
            name="code"
            color="#ffffff"
            iconStyle={{ marginRight: 10 }}
          />
        }
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="VIEW NOW"
      />
    </Card>
  );
};

export default ElementsCard;