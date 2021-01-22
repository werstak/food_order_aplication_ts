import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { scale } from 'react-native-size-matters';

interface IStyles {
  container: ViewStyle;
  descriptionWrap: ViewStyle;
  descriptionTitle: TextStyle;
  descriptionPrice: TextStyle;
  descriptionPriceDiscount: TextStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    marginTop: scale(10),
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  descriptionWrap: {
    marginTop: scale(2),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    marginBottom: scale(30),
  },
  descriptionTitle: {
    fontSize: scale(13),
  },
  descriptionPrice: {
    fontWeight: 'bold',
    fontSize: scale(13),
    paddingLeft: scale(20),
  },
  descriptionPriceDiscount: {
    fontSize: scale(13),
    paddingLeft: scale(20),
  },
});

export default styles;
