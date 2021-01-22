import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Card,
  CardItem,
  Text,
  Button, Container, Content,
} from 'native-base';
import styles from './styles';
import IProduct from '../../store/actions/product/IProduct';
import FooterTabsBadge from '../../components/FooterTabsBadge';
import { useNavigation } from '@react-navigation/core';
import any = jasmine.any;

interface ProductScreenProps {
  item: IProduct;
}

const ProductScreen = ({ item }: ProductScreenProps): ReactElement =>  {
  // console.log('item ProductScreen -', item);
  const handlerAddCart = () => {
    console.log('КЛАЦ ProductScreen');
  };

  // const navigation = useNavigation<any>();
  // const item = navigation.state.params;
  // console.log(item);
  // const { item } = this.props.navigation.state.params
  console.log('item', item);

  return (
    <Container>
      <Content>
        <Card>
          <CardItem cardBody>
            <Image source={{uri: 'https://clipart-best.com/img/pizza/pizza-clip-art-101.png'}} style={styles.image}/>
          </CardItem>
          <CardItem>
            <View style={styles.container}>
              <Text style={styles.title}>Pizza Hawaiian</Text>
              <View style={styles.description}>
                <View>
                  <Text style={styles.descriptionWeight}>500 g </Text>
                  <Text style={styles.descriptionPrice}>20 $ </Text>
                </View>
                <Button transparent onPress={handlerAddCart}>
                  <MaterialCommunityIcons name={'plus-circle'} style={styles.icon}/>
                </Button>
              </View>
            </View>
          </CardItem>
          <CardItem>
            <View style={styles.detalisWrap}>
              <Text style={styles.detalis}>
                Detalis:
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolore enim expedita in ipsa
                iure magni nostrum ratione? Eveniet ipsum iusto omnis quasi quia quo quod ratione sint tenetur
                voluptatum.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolore enim expedita in ipsa
                iure magni nostrum ratione? Eveniet ipsum iusto omnis quasi quia quo quod ratione sint tenetur
                voluptatum.
              </Text>
            </View>
          </CardItem>
        </Card>
      </Content>
      <FooterTabsBadge/>
    </Container>

  );
};

export default ProductScreen;
