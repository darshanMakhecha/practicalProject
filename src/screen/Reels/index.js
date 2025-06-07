import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {Colors} from '../../utils/colors';
import {ScrollView} from 'react-native-gesture-handler';
import {icons} from '../../assets';
import {getAsyncStorageData, setAsyncStorageData} from '../../utils/global';
import {asyncStoragKey} from '../../utils/enum';
// import style from './styles';

const Reels = ({navigation, route}) => {
 


  return (
    <View style={{flex:1}}>
     <Text>Reels Screen</Text>
    </View>
  );
};

export default Reels;
