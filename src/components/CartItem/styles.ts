import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { scale } from 'react-native-size-matters';
import { COLOR } from '../../constants/color';

interface IStyles {
  description: ViewStyle;
  detalisWrap: ViewStyle;
  btnWrap: ViewStyle;
  title: TextStyle;
  counter: TextStyle;
  detalis: TextStyle;
  descriptionWeight: TextStyle;
  descriptionPrice: TextStyle;
  iconPlus: TextStyle;
  iconDel: TextStyle;
  iconMinus: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  detalisWrap: {
    flexDirection: 'column',
  },
  btnWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 0,
    paddingLeft: 0,
  },
  counter: {
    fontSize: 20,
    marginLeft: 10,
    width: scale(21),
    textAlign: 'center',
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginRight: 20,
  },
  descriptionWeight: {
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'left',
    color: COLOR.gray,
  },
  descriptionPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    color: COLOR.green,
  },
  detalis: {
    color: COLOR.blue,
    fontSize: scale(18),
  },
  iconPlus: {
    color: COLOR.green,
    fontSize: scale(25),
    marginLeft: 10,
    marginRight: 10,
  },
  iconDel: {
    color: COLOR.red,
    fontSize: scale(25),
  },
  iconMinus: {
    color: COLOR.gray,
    fontSize: scale(25),
  },
});

export default styles;
