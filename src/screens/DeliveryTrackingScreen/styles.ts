import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { scale } from 'react-native-size-matters';
import { COLOR } from '../../constants/color';

interface IStyles {
  container: ViewStyle;
  containerMap: ViewStyle;
  title: TextStyle;
  containerBottomWrap: ViewStyle;
  containerBottom: ViewStyle;
  containerInformer: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerMap: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  title: {
    marginBottom: scale(30),
  },
  containerBottomWrap: {
    position: 'absolute',
    zIndex: scale(1),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: scale(20),
  },
  containerBottom: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '90%',
  },
  containerInformer: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: scale(100),
    backgroundColor: COLOR.white,
    borderRadius: scale(20),
    marginBottom: scale(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default styles;
