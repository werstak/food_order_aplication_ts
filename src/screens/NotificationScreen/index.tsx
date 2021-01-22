import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const NotificationScreen = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notification Screen </Text>
    </View>
  );
};

export default NotificationScreen;
