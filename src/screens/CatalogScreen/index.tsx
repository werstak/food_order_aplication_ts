import React, { ReactElement, useCallback } from 'react';
import FooterTabsBadge from '../../components/FooterTabsBadge';
import { Container, Content, ListItem, Text, Icon, Left, Body, Right } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { StackParamList } from 'navigation';
import styles from './styles';
import SearchBar from '../../components/SearchBar';

export type CatalogScreenProps = {
  navigation: StackNavigationProp<StackParamList, 'Catalog'>;
  route: RouteProp<StackParamList, 'Catalog'>;
};

const CatalogScreen = ({navigation}: CatalogScreenProps): ReactElement => {
  const navCategory = useCallback(() => {
    navigation.push('CategoryList');
  }, [navigation]);

  return (
    <Container>
      <SearchBar />
      <Content>
        <ListItem icon onPress={navCategory}>
          <Left>
            <MaterialIcons name={'local-dining'} style={styles.iconCatalog}/>
          </Left>
          <Body>
            <Text>Grocery</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward"/>
          </Right>
        </ListItem>
        <ListItem icon onPress={navCategory}>
          <Left>
            <MaterialIcons name={'local-pizza'} style={styles.iconCatalog}/>
          </Left>
          <Body>
            <Text>Gastronomy</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward"/>
          </Right>
        </ListItem>
        <ListItem icon onPress={navCategory}>
          <Left>
            <MaterialCommunityIcons name="food" style={styles.iconCatalog}/>
          </Left>
          <Body>
            <Text>Baby food</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward"/>
          </Right>
        </ListItem>
        <ListItem icon onPress={navCategory}>
          <Left>
            <MaterialCommunityIcons name="food-fork-drink" style={styles.iconCatalog}/>
          </Left>
          <Body>
            <Text>Diet food</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward"/>
          </Right>
        </ListItem>
        <ListItem icon onPress={navCategory}>
          <Left>
            <MaterialCommunityIcons name="food-variant" style={styles.iconCatalog}/>
          </Left>
          <Body>
            <Text>Frozen products</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward"/>
          </Right>
        </ListItem>
        <ListItem icon onPress={navCategory}>
          <Left>
            <MaterialCommunityIcons name="food-apple" style={styles.iconCatalog}/>
          </Left>
          <Body>
            <Text>Confectionery</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward"/>
          </Right>
        </ListItem>
        <ListItem icon onPress={navCategory}>
          <Left>
            <MaterialCommunityIcons name="hamburger" style={styles.iconCatalog}/>
          </Left>
          <Body>
            <Text>Cookery</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward"/>
          </Right>
        </ListItem>
        <ListItem icon onPress={navCategory}>
          <Left>
            <MaterialCommunityIcons name="hamburger" style={styles.iconCatalog}/>
          </Left>
          <Body>
            <Text>Milk products</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward"/>
          </Right>
        </ListItem>
        <ListItem icon onPress={navCategory}>
          <Left>
            <MaterialIcons name={'local-dining'} style={styles.iconCatalog}/>
          </Left>
          <Body>
            <Text>Meat Poultry Egg</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward"/>
          </Right>
        </ListItem>
        <ListItem icon onPress={navCategory}>
          <Left>
            <MaterialIcons name={'local-pizza'} style={styles.iconCatalog}/>
          </Left>
          <Body>
            <Text>Soft Drinks</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward"/>
          </Right>
        </ListItem>
        <ListItem icon onPress={navCategory}>
          <Left>
            <MaterialCommunityIcons name="food" style={styles.iconCatalog}/>
          </Left>
          <Body>
            <Text>Fish Seafood</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward"/>
          </Right>
        </ListItem>
        <ListItem icon onPress={navCategory}>
          <Left>
            <MaterialCommunityIcons name="food-fork-drink" style={styles.iconCatalog}/>
          </Left>
          <Body>
            <Text>Sports nutrition</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward"/>
          </Right>
        </ListItem>
        <ListItem icon onPress={navCategory}>
          <Left>
            <MaterialCommunityIcons name="food-variant" style={styles.iconCatalog}/>
          </Left>
          <Body>
            <Text>Fruits Vegetables Mushrooms</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward"/>
          </Right>
        </ListItem>
        <ListItem icon onPress={navCategory}>
          <Left>
            <MaterialCommunityIcons name="food-apple" style={styles.iconCatalog}/>
          </Left>
          <Body>
            <Text>Bakery products</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward"/>
          </Right>
        </ListItem>
        <ListItem icon onPress={navCategory}>
          <Left>
            <MaterialCommunityIcons name="hamburger" style={styles.iconCatalog}/>
          </Left>
          <Body>
            <Text>Tea Coffee Cocoa</Text>
          </Body>
          <Right>
            <Icon active name="arrow-forward"/>
          </Right>
        </ListItem>
      </Content>
      <FooterTabsBadge/>
    </Container>
  );
};

export default CatalogScreen;
