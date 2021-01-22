import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { scale } from 'react-native-size-matters';
import { COLOR } from '../../constants/color';

interface IStyles {
  container: ViewStyle;
  title: TextStyle;
  iconTab: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    marginBottom: scale(30),
  },
  iconTab: {
    color: COLOR.white,
    fontSize: scale(25),
    marginRight: scale(10),
  },
});

export default styles;
