import { StyleSheet } from 'react-native';

export const commonStyles = (isDarkTheme: boolean) => {
  const color = isDarkTheme ? 'white' : 'black';
  const backgroundColor = isDarkTheme ? '#270954' : 'white';
  const controllerBackground = isDarkTheme ? 'black' : '#e0cffa';
  const controllerColor = isDarkTheme ? 'white' : 'black';
  const cardColor = isDarkTheme ? 'black' : 'black';
  const cardBackground = isDarkTheme ? 'white' : 'transparent';
  const iconColor = isDarkTheme ? 'white' : 'black';

  return StyleSheet.create({
    text: {
      color: color,
      textAlign: 'center'
    },
    button: {
      color: color,
      backgroundColor: backgroundColor,
    },
    view: {
      color: color,
      backgroundColor: backgroundColor,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    bar: {
      color: controllerColor,
      backgroundColor: controllerBackground
    },
    card: {
      backgroundColor: cardBackground,
      color: cardColor,
      padding: 16,
      borderRadius: 8,
      margin: 8,
      alignItems: 'center', 
      justifyContent: 'center'
    },
    icon: {

    }
  });
};
