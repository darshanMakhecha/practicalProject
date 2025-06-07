import { StyleSheet } from 'react-native';
import { Colors, colors } from '../utils/colors';
import { fontFamily, hp, wp } from '../utils/helper';

const style = StyleSheet.create({
  bottomBarContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: Colors.DodgerBlue,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      height: 5,
      width: 5,
    },
  },
  bottomBarButtonStyle: {
    flex: 1,
    paddingVertical: hp(23),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomBarImageButtonStyle: {
    tintColor: Colors.white,
    height: hp(18),
    width: wp(18),
  },
  bottomBarTextButtonStyle: {fontSize: 12, fontFamily: fontFamily.montserrat },
});

export default style;
