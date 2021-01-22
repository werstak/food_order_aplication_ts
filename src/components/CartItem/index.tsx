import React, { Component, ReactElement, useCallback } from 'react';
import {
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Button,
  View
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { IProduct } from '../../store/actions/product/IProduct';
import { TouchableOpacity } from 'react-native';
import {
  decrementProductCounterAction,
  dellProductActionCart,
  incrementProductCounterAction,
  addProductActionCart
} from '../../store/actions/productCart';
import { useDispatch } from 'react-redux';
import styles from './styles';
import { loggers } from 'redux-act';

interface CartScreenProps {
  item: IProduct;
  onPress: () => void;
}

const CartItem = ({item, onPress}: CartScreenProps): ReactElement => {

  const dispatch = useDispatch();

  const handlerDeleteCartItem = useCallback(() => {
    const dataProductsId = item.id;
    dispatch(dellProductActionCart(dataProductsId));
  }, [dispatch]);

  const handlerIncrementItem = useCallback(() => {
    // const dataProductsId = item.id;
    dispatch(addProductActionCart({product: item}));
  }, [dispatch]);

  const handlerDecrementItem = useCallback(() => {
    // const dataProductsId = item.id;
    dispatch(addProductActionCart({product: item, count: -1}));
  }, [dispatch]);

  return (
    <ListItem thumbnail>
      <Left>
        <TouchableOpacity onPress={onPress}>
          {/*<Thumbnail square source={{uri: 'https://clipart-best.com/img/pizza/pizza-clip-art-45.png'}}/>*/}
          <Thumbnail square source={{uri: item.image.original}}/>
        </TouchableOpacity>
      </Left>
      <Body>
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <View style={styles.description}>
            <View>
              <Text style={styles.descriptionWeight}>{item.runtime} g </Text>
              <Text style={styles.descriptionPrice}>{item.weight} $ </Text>
            </View>
            <View style={styles.btnWrap}>
              <Button transparent onPress={handlerDecrementItem}>
                <MaterialCommunityIcons name={'minus-circle'} style={styles.iconMinus}/>
              </Button>
              <Text style={styles.counter}>{item.count}</Text>
              <Button transparent onPress={handlerIncrementItem}>
                <MaterialCommunityIcons name={'plus-circle'} style={styles.iconPlus}/>
              </Button>
              <Button transparent onPress={handlerDeleteCartItem}>
                <MaterialCommunityIcons name={'delete'} style={styles.iconDel}/>
              </Button>
            </View>
          </View>
        </View>
      </Body>
    </ListItem>
  );
};

export default CartItem;
