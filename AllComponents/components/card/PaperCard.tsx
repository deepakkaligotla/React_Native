import React from 'react';
import { View } from 'react-native';
import { Card, Button, Text, Avatar, Provider as PaperProvider } from 'react-native-paper';

interface PaperCardProps {
  title: string;
  subtitle: string;
  contentTitle: string;
  contentBody: string;
  coverImageUri: string;
}

const PaperCard: React.FC<PaperCardProps> = ({ title, subtitle, contentTitle, contentBody, coverImageUri }) => {
  const LeftContent = (props: any) => <Avatar.Icon {...props} icon="folder" />;

  return (
    <View style={{padding: 30}}>
      <Card>
      <Card.Title title={title} subtitle={subtitle} left={LeftContent} />
      <Card.Content>
        <Text variant="titleLarge">{contentTitle}</Text>
        <Text variant="bodyMedium">{contentBody}</Text>
      </Card.Content>
      <Card.Cover source={{ uri: coverImageUri }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
    </View>
  );
};

export default PaperCard;
