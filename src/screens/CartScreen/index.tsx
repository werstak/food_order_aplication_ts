import React, { ReactElement, useCallback, useEffect } from 'react';
import CartItem from '../../components/CartItem';
import {
  Container,
  Content,
  List,
  Text,
  View,
  Button
} from 'native-base';
import FooterTabsBadge from '../../components/FooterTabsBadge';
import { useDispatch, useSelector } from 'react-redux';
import { ICombinedState } from '../../store/reducers';
import { getProductActionCart } from '../../store/actions/productCart';
import { useNavigation } from '@react-navigation/core';
import styles from './styles';
import { useMappedState } from 'redux-react-hook';

const CartScreen = (): ReactElement => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const getProductsCart = useCallback(() => {
    dispatch(getProductActionCart());
  }, [dispatch]);


  const {productsCartList} = useSelector((state: ICombinedState) => state.productsCart);

  useEffect(() => {
    getProductsCart();
  }, [getProductsCart]);

  const { totalPrice } = useMappedState(state => ({
    totalPrice: state.productsCart.totalPrice,
  }));

  return (
    <Container>
      <Content>
        <List>
          {productsCartList.map((item) => {
            return <CartItem
              key={item.id}
              item={item}
              onPress={() => navigation.navigate('Product', {item})}
            />
          })}
        </List>
        <View style={styles.orderWrap}>
          <Button onPress={() => navigation.navigate('Ordering')}
                  style={styles.orderBtn}>
            <Text style={styles.textBtn}>To order</Text>
            <Text style={styles.textBtn}>{totalPrice} $</Text>
          </Button>
        </View>
      </Content>
      <FooterTabsBadge/>
    </Container>
  );
};

export default CartScreen;
