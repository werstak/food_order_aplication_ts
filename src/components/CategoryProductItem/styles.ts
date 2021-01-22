import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { scale } from 'react-native-size-matters';
import { COLOR } from '../../constants/color';

interface IStyles {
  image: TextStyle;
  container: ViewStyle;
  description: ViewStyle;
  title: TextStyle;
  btnWrap: ViewStyle;
  descriptionWeight: TextStyle;
  descriptionPrice: TextStyle;
  icon: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  image: {
    flex: 1,
    height: 200,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
  },
  container: {
    flexDirection: 'column',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 0,
    paddingLeft: 0,
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  btnWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptionWeight: {
    fontSize: 18,
    fontWeight: 'normal',
    textAlign: 'left',
    color: COLOR.gray,
  },
  descriptionPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: COLOR.green,
  },
  icon: {
    color: COLOR.red,
    fontSize: scale(30),
  },
});

export default styles;
