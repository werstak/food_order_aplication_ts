import React, { ReactElement, useCallback, useEffect } from 'react';

import { Container, Content } from 'native-base';
import FooterTabsBadge from '../../components/FooterTabsBadge';
import CategoryProductItem from '../../components/CategoryProductItem';
import styles from './styles';
import SearchBar from '../../components/SearchBar';
import { getProductAction } from '../../store/actions/product';
import { useDispatch, useSelector } from 'react-redux';
import { ICombinedState } from '../../store/reducers';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../../navigation';
import { RouteProp, useNavigation } from '@react-navigation/core';

export type CategoryListProps = {
  navigation: StackNavigationProp<StackParamList, 'CategoryList'>;
  route: RouteProp<StackParamList, 'CategoryList'>;
};

const CategoryListScreen = (): ReactElement => {
  const navProduct = useCallback(() => {
    navigation.push('Product');
  }, [navigation]);

  const navigation = useNavigation<any>();

  const dispatch = useDispatch();
  const getProducts = useCallback(() => {
    dispatch(getProductAction());
  }, [dispatch]);

  const { products } = useSelector((state: ICombinedState) => state.products);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Container>
      <SearchBar />
      <Content style={styles.backgroundContent}>
        {products.map((item) => {
          return <CategoryProductItem
            key={item.id}
            item={item}
            handlerNav={navProduct}
            // onPress={() => console.log('Product')}
            // onPress={() => navigation.navigate('Product')}
            onPress={() => navigation.navigate('Product', {item})}
          />
        })}
      </Content>
      <FooterTabsBadge />
    </Container>
  );
};

export default CategoryListScreen;
