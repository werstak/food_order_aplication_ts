import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { scale } from 'react-native-size-matters';
import { COLOR } from 'constants/color';

interface IStyle {
  matchParent: ViewStyle;
  iconLocation: TextStyle;
}

const styles: IStyle = {
  matchParent: {
    flex: 1,
  },
  iconLocation: {
    color: COLOR.red,
    fontSize: scale(25),
  },
};

export default StyleSheet.create(styles);
