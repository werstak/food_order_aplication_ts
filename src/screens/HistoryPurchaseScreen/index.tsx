import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Container, Content } from 'native-base';
import FooterTabsBadge from '../../components/FooterTabsBadge';

const HistoryPurchaseScreen = (): ReactElement => {
  return (
    <Container>
      <Content>
        <View style={styles.container}>
          <Text style={styles.title}>HistoryPurchaseScreen</Text>
        </View>
      </Content>
      <FooterTabsBadge/>
    </Container>

  );
};

export default HistoryPurchaseScreen;
