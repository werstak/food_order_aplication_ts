import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { useMappedState } from 'redux-react-hook';

const TabDeliveryOne = (): ReactElement => {
  const { totalPrice } = useMappedState(state => ({
    totalPrice: state.productsCart.totalPrice,
  }));
  return (
    <View style={styles.container}>
      <View style={styles.descriptionWrap}>
        <Text style={styles.descriptionTitle}>Discount for self-export:</Text>
        <Text style={styles.descriptionPriceDiscount}>500 $</Text>
      </View>
      <View style={styles.descriptionWrap}>
        <Text style={styles.descriptionTitle}>Preliminary order value:</Text>
        <Text style={styles.descriptionPrice}>{totalPrice} $</Text>
      </View>
    </View>
  );
};

export default TabDeliveryOne;
