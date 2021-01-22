import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { scale } from 'react-native-size-matters';
import { COLOR } from '../../constants/color';

interface IStyles {
  container: ViewStyle;
  title: TextStyle;
  iconNav: TextStyle;
  image: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: 200,
    flex: 1,
    // marginLeft: 50,
    // marginRight: 50,
    // marginTop: 10,
    backgroundColor: COLOR.gray,
    alignItems: 'center',
  },
  title: {
    marginBottom: scale(30),
  },
  iconNav: {
    color: COLOR.gray,
    fontSize: scale(25),
    marginRight: scale(10),
  },
});

export default styles;
