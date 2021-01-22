import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { scale } from 'react-native-size-matters';
import { COLOR } from '../../constants/color';

interface IStyles {
  container: ViewStyle;
  backgroundContent: ViewStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  backgroundContent: {
    backgroundColor: COLOR.grayLight,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: scale(30),
  },

});

export default styles;
