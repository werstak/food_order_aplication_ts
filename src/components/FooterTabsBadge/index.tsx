import React, { ReactElement, useCallback, useEffect } from 'react';
import { Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getProductAction } from '../../store/actions/product';
import { ICombinedState } from '../../store/reducers';
import { setTotalCounterAction } from '../../store/actions/productCart';
import styles from './styles';
import { useMappedState } from 'redux-react-hook';

// const globalCounter = (state) => {
//   // const total = state.productsCart.counters.totalCounter;
//   const products = state.productsCart.productsCartList;
//   return products.reduce((acc, item) => acc += item.count, 0);
// }

const FooterTabsBadge = (): ReactElement => {

  const navigation = useNavigation<any>();

  const navHome = useCallback(() => {
    navigation.push('Home');
  }, [navigation]);
  const navCart = useCallback(() => {
    navigation.push('Cart');
  }, [navigation]);
  const navCatalog = useCallback(() => {
    navigation.push('Catalog');
  }, [navigation]);

  // const { totalCounter } = useMappedState(state => ({
  //   totalCounter: globalCounter(state),
  // }));
  // console.log("counters", totalCounter);
  const { totalCounter } = useMappedState(state => ({
    totalCounter: state.productsCart.counters.totalCounter,
  }));
  // console.log(counters);

  return (
    <Footer>
      <FooterTab>
        <Button vertical onPress={navHome}>
          <Icon name="home"/>
          <Text>Home</Text>
        </Button>
        <Button active badge vertical onPress={navCart}>
          <Badge><Text>{totalCounter}</Text></Badge>
          <Icon active name="cart"/>
          <Text>Cart</Text>
        </Button>
        <Button vertical onPress={navCatalog}>
          <Icon name="list"/>
          <Text>Catalog</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default FooterTabsBadge;
