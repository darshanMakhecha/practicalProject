// MainNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { screenName } from '../utils/enum';
import Home from '../screen/Home';
import Reels from '../screen/Reels';
import Profile from '../screen/Profile';
import { Image, View } from 'react-native';
import Post from '../screen/Post';
import { image } from '../assets';
import { Colors } from '../utils/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={screenName.HOME} component={Home} />

  </Stack.Navigator>
);

const ReelsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={screenName.REELS} component={Reels} />
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={screenName.PROFILE} component={Profile} />
    <Stack.Screen name={screenName.POST} component={Post} />

  </Stack.Navigator>
);


const BottomTabs = () => (
<Tab.Navigator
  screenOptions={({ route }) => ({
    headerShown: false,
    tabBarShowLabel: false,
    tabBarIcon: ({ focused }) => {
      let iconSource;
      let iconStyle = {
        width: 24,
        height: 24,
      
      };

      switch (route.name) {
        case screenName.HOME:
          iconSource = image.homeIcon;
          break;
        case screenName.REELS:
          iconSource = image.reelsIcon;
          iconStyle = {
            ...iconStyle,
            width: 28,
            height: 28, 
          };
          break;
        case screenName.PROFILE:
          iconSource = image.profileIcon;
          break;
        default:
          iconSource = homeIcon;
      }

      return(
        <View style={{ alignItems: 'center' }}>
        <Image source={iconSource} style={iconStyle} resizeMode="contain" />
        {focused && (
          <View
            style={{
              width: 6,
              height: 6,
              borderRadius: 3,
              backgroundColor: Colors.Red,
              marginTop: 2,
            }}
          />
        )}
      </View>
      );
    },
  })}
>
  <Tab.Screen name={screenName.HOME} component={HomeStack}    />
  <Tab.Screen name={screenName.REELS} component={ReelsStack}   />
  <Tab.Screen name={screenName.PROFILE} component={ProfileStack} />
  
</Tab.Navigator>
);

const MainNavigator = ({ refer }) => (
  <NavigationContainer ref={refer}>
    <BottomTabs />
  </NavigationContainer>
);

export default MainNavigator;
