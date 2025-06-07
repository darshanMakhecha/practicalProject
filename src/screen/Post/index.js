import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../utils/colors'
import { image } from '../../assets';
import styles from './style';

const Post = ({ navigation, route }) => {
  const { data, selectedImage } = route?.params;

  console.log("check new post", data,selectedImage);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white, padding: 10 }}>
      <TouchableOpacity onPress={() => navigation?.goBack()} style={{ height: 25, width: 25 ,marginTop:10}}>
        <Image source={image.back} style={{ height: "100%", width: "100%" }} />
      </TouchableOpacity>
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <Image source={{ uri: data?.data?.avatar }} style={styles.postAvatar} />
          <Text style={styles.postUsername}>{data?.data?.displayName}</Text>
        </View>
        <Image source={{ uri: data?.selectedImage }} style={styles.postImage} />
        <View style={styles.actionsRow}>
          <Image source={image.heart_fill} style={styles.icon} />
          <Image source={image.comment} style={styles.icon} />
          <Image source={image.share} style={styles.icon} />
          <View style={{ flex: 1 }} />
          <Image source={image.bookmark} style={styles.icon} />
        </View>
        <Text style={styles.likesText}>100 Likes</Text>

        <Text style={styles.captionText}>
          <Text style={styles.postUsername}>{data?.displayName} </Text>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
        </Text>

        <Text style={styles.timestampText}>
          30 minutes ago
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Post