import React, { ReactElement, useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Card,
  CardItem,
  Text,
  Button,
} from 'native-base';
import { IProduct } from '../../store/actions/product/IProduct';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { addProductActionCart, dellProductActionCart } from '../../store/actions/productCart';

interface CategoryProductItemProps {
  item: IProduct;
  handlerNav: () => void;
  onPress: () => void;
}

const CategoryProductItem = ({item, handlerNav, onPress}: CategoryProductItemProps): ReactElement => {

  const dispatch = useDispatch();
  const handlerAddProductsCart = useCallback(() => {
    dispatch(addProductActionCart({product: item}));
    // console.log('handlerAddCart item -', addProductActionCart(dataProducts));
  }, [dispatch]);

  return (
    <Card>
      <TouchableOpacity onPress={onPress}>
        <CardItem cardBody>
          <Image source={{uri: item.image.original}} style={styles.image}/>
        </CardItem>
      </TouchableOpacity>
      <CardItem>
        <View style={styles.container}>
          <Text style={styles.title}>{item.name}</Text>
          <View style={styles.description}>
            <View>
              <Text style={styles.descriptionWeight}>{item.runtime} g</Text>
              <Text style={styles.descriptionPrice}>{item.weight} $</Text>
              {/*<Text style={styles.descriptionPrice}>{item.summary.replace(/<[^>]+>/g, '')} </Text>*/}
            </View>
            <View style={styles.btnWrap}>
              <Button transparent onPress={handlerAddProductsCart}>
                <MaterialCommunityIcons name={'plus-circle'} style={styles.icon}/>
              </Button>
            </View>
          </View>
        </View>
      </CardItem>
    </Card>
  );
};

export default CategoryProductItem;
