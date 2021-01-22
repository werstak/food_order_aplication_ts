import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { scale } from 'react-native-size-matters';
import { COLOR } from '../../constants/color';

interface IStyles {
  orderWrap: ViewStyle;
  title: TextStyle;
  orderBtn: TextStyle;
  textBtn: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  orderWrap: {
    alignItems: 'center',
    marginBottom: scale(30),
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  textBtn: {
    fontWeight: 'bold',
  },
  orderBtn: {
    width: '90%',
    marginTop: scale(30),
    justifyContent: 'space-between',
    color: COLOR.white,
    backgroundColor: COLOR.green,
  },
});

export default styles;
