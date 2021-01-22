import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Container, Content } from 'native-base';
import FooterTabsBadge from '../../components/FooterTabsBadge';

const ContactsScreen = (): ReactElement => {
  return (
    <Container>
      <Content>
        <View style={styles.container}>
          <Text style={styles.title}>Contacts Screen </Text>
        </View>
      </Content>
      <FooterTabsBadge/>
    </Container>

  );
};

export default ContactsScreen;
