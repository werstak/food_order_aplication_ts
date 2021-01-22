import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';
import TracingMap from '../../components/TracingMap';
import styles from './styles';

const DeliveryTrackingScreen = (): ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.containerMap}>
        <TracingMap />
        <View style={styles.containerBottomWrap}>
          <View style={styles.containerBottom}>
            <View style={styles.containerInformer}>
              <Text>INFORMER</Text>
              {/*<Informer />*/}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeliveryTrackingScreen;
