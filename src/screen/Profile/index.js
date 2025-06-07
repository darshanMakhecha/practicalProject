import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Dimensions,
  FlatList,
  Alert,
} from 'react-native';
import styles from './styles';
import axios from 'axios';
import { ApiEndPoint } from '../../utils/app_api_constant';
import { image } from '../../assets';
import { screenName } from '../../utils/enum';
import { Colors } from '../../utils/colors';

const ProfileData = {
  id: '1',
  username: 'MonNom',
  displayName: 'MonIdentifiant',
  avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
  bio: 'La description de mon profil',
  stats: {
    posts: 153,
    followers: 209,
    following: 109,
  },
  mediaGrid: [
    'https://picsum.photos/id/1011/300/300',
    'https://picsum.photos/id/1012/300/300',
    'https://picsum.photos/id/1013/300/300',
    'https://picsum.photos/id/1014/300/300',
    'https://picsum.photos/id/1015/300/300',
    'https://picsum.photos/id/1016/300/300',
    'https://picsum.photos/id/1017/300/300',
    'https://picsum.photos/id/1018/300/300',
    'https://picsum.photos/id/1019/300/300',
  ],
};

const Profile = ({ navigation }) => {

  useEffect(() =>{
    fetchUserProfile()
  },[])

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(ApiEndPoint.profileData);
      console.log('Fetched profileData  :', response?.data?.id);
    } catch (error) {
      console.error(error);
    }
  };

  const onImagePress = (data) => {
    let wholeData = {
      data:ProfileData,
      selectedImage : data
    }
    navigation.navigate(screenName.POST,{data:wholeData});
  }
  const renderPost = ({ item }) => (
    <TouchableOpacity style={styles.postItem} activeOpacity={0.8} onPress={() => onImagePress(item)}>
      <Image source={{ uri: item }} style={styles.postImage} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />

      <View style={styles.header}>
        <Text style={styles.username}>{ProfileData?.username}</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.profileSection}>
          <View style={styles.profileTop}>
            <View>
            <Image
              source={{ uri: ProfileData?.avatar }}
              style={styles.profileImage}
            />
            <Image
              source={image.plus}
              style={styles.plusIconStyle}
            />
            </View>
            <View style={styles.statsContainer}>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>{ProfileData?.stats?.posts}</Text>
                <Text style={styles.statLabel}>Publications</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>{ProfileData?.stats?.followers}</Text>
                <Text style={styles.statLabel}>Followers</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>{ProfileData?.stats?.following}</Text>
                <Text style={styles.statLabel}>Suivis</Text>
              </View>
            </View>
          </View>

          <View style={styles.profileInfo}>
            <Text style={styles.displayName}>{ProfileData?.displayName}</Text>
            <Text style={styles.bio}>{ProfileData?.bio}</Text>
          </View>

        </View>

        <View style={styles.postsGrid}>

          <FlatList
            data={ProfileData?.mediaGrid}
            scrollEnabled={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderPost}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default Profile;