import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { scale } from 'react-native-size-matters';
import { COLOR } from '../../constants/color';

interface IStyles {
  container: ViewStyle;
  deliveryWrap: ViewStyle;
  DateTimePicker: ViewStyle;
  title: TextStyle;
  tabsWrap: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    backgroundColor: COLOR.grayLight,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  deliveryWrap: {
    alignItems: 'center',
    marginBottom: scale(30),
  },
  DateTimePicker: {
    // marginTop: scale(15),
    // marginBottom: scale(15),
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: scale(5),
  },
  tabsWrap: {
    alignItems: 'center',
    // marginTop: scale(10),
    // marginBottom: scale(20),
    // marginLeft: scale(20),
    // marginRight: scale(20),
  },
});

export default styles;
