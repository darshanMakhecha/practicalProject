import { Dimensions, Platform } from 'react-native';

export const screenWidth = Dimensions.get('window').width;

export const screenHeight = Dimensions.get('window').height;

export const isAndroid = Platform.OS === 'android';

export const isIOS = Platform.OS === 'ios';
