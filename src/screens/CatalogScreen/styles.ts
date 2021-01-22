import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { scale } from 'react-native-size-matters';
import { COLOR } from '../../constants/color';

interface IStyles {
  container: ViewStyle;
  iconCatalog: TextStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  iconCatalog: {
    color: COLOR.blue,
    fontSize: scale(25),
  },
  title: {
    marginBottom: scale(30),
  },
});

export default styles;
