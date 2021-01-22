import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const CallScreen = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Call Screen </Text>
    </View>
  );
};

export default CallScreen;
