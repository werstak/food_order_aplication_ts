import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { scale } from 'react-native-size-matters';

interface IStyles {
  container: ViewStyle;
  title: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    paddingTop: scale(20),
    paddingHorizontal: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: scale(10),
  },
});

export default styles;
