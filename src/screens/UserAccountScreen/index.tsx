import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const UserAccountScreen = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Account Screen</Text>
    </View>
  );
};

export default UserAccountScreen;
