import React, { ReactElement, useCallback } from 'react';
import { Image, View } from 'react-native';
import { Button, CardItem, Container, Content, Left, List, ListItem, Text, Thumbnail } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { StackParamList } from 'navigation';
import styles from './styles';
import HistoryPurchaseScreen from '../HistoryPurchaseScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export type HomeScreenProps = {
  navigation: StackNavigationProp<StackParamList, 'Home'>;
  route: RouteProp<StackParamList, 'Home'>;
};

const HomeScreen = ({ navigation }: HomeScreenProps): ReactElement => {
  const navCatalog = useCallback(() => {
    navigation.push('Catalog');
  }, [navigation]);
  const navCart = useCallback(() => {
    navigation.push('Cart');
  }, [navigation]);
  const navNotification = useCallback(() => {
    navigation.push('Notification');
  }, [navigation]);
  const navCall = useCallback(() => {
    navigation.push('Call');
  }, [navigation]);
  const navContacts = useCallback(() => {
    navigation.push('Contacts');
  }, [navigation]);
  const navDelivery = useCallback(() => {
    navigation.push('Delivery');
  }, [navigation]);
  const navHistory = useCallback(() => {
    navigation.push('History');
  }, [navigation]);
  const navAccount = useCallback(() => {
    navigation.push('Account');
  }, [navigation]);

  const handlerClick = () => {
    console.log('клац клац клац');
  };

  return (
    <View style={styles.container}>
      <Container>
        <Content>
          <Image source={{uri: 'https://clipart-best.com/img/pizza/pizza-clip-art-107.png'}} style={styles.image}/>
          <List>
            <ListItem onPress={navCatalog}>
              <MaterialIcons name={'view-list'} style={styles.iconNav} />
              <Text>Catalog</Text>
            </ListItem>
            <ListItem onPress={navCart}>
              <MaterialIcons name={'local-grocery-store'} style={styles.iconNav} />
              <Text>Cart</Text>
            </ListItem>
            <ListItem onPress={navDelivery}>
              <MaterialIcons name={'directions-car'} style={styles.iconNav} />
              <Text>Delivery tracking</Text>
            </ListItem>
            <ListItem onPress={navHistory}>
              <MaterialIcons name={'history'} style={styles.iconNav} />
              <Text>History Purchase</Text>
            </ListItem>
            <ListItem onPress={navAccount}>
              <MaterialIcons name={'account-circle'} style={styles.iconNav} />
              <Text>Account</Text>
            </ListItem>
            <ListItem onPress={navNotification}>
              <MaterialIcons name={'notifications'} style={styles.iconNav} />
              <Text>Notification</Text>
            </ListItem>
            <ListItem onPress={navCall}>
              <MaterialIcons name={'call'} style={styles.iconNav} />
              <Text>Call</Text>
            </ListItem>
            <ListItem onPress={navContacts}>
              <MaterialIcons name={'mail'} style={styles.iconNav} />
              <Text>Contacts</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    </View>
  );
};

export default HomeScreen;
