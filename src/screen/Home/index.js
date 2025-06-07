import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import moment from 'moment';
import axios from 'axios';
import styles from './styles';
import { ApiEndPoint } from '../../utils/app_api_constant';
import { Colors } from '../../utils/colors';
import { image } from '../../assets';

const screenWidth = Dimensions.get('window').width;

const stories = [
  {
    id: '1',
    username: 'sabanok...',
    avatar:
      'https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg',
    isViewed: false,
  },
  {
    id: '2',
    username: 'blue_bouy',
    avatar:
      'https://img.freepik.com/free-psd/view-cute-brown-white-pet-dog_23-2150179459.jpg',
    isViewed: false,
  },
  {
    id: '3',
    username: 'waggles',
    avatar:
      'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg',
    isViewed: true,
  },
  {
    id: '4',
    username: 'steve.loves',
    avatar:
      'https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg',
    isViewed: true,
  },
  {
    id: '5',
    username: 'Wolf',
    avatar:
      'https://img.freepik.com/free-psd/view-cute-brown-white-pet-dog_23-2150179459.jpg?semt=ais_hybrid&w=740',
    isViewed: true,
  },
];

const posts = [
  {
    id: '1',
    user: {
      username: 'Ruffles',
      avatar:
        'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?semt=ais_hybrid&w=740',
    },
    media: [
      'https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?semt=ais_hybrid&w=740',
      'https://img.freepik.com/free-psd/view-cute-brown-white-pet-dog_23-2150179459.jpg?semt=ais_hybrid&w=740',
      'https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg',
    ],
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    likes: 100,
    isLiked: true,
    createdAt: '2025-05-29T09:00:00Z',
  },
  {
    id: '2',
    user: {
      username: 'John',
      avatar:
        'https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small/happy-young-cute-illustration-face-profile-png.png',
    },
    media: [
      'https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg',
      'https://img.freepik.com/free-psd/view-cute-brown-white-pet-dog_23-2150179459.jpg?semt=ais_hybrid&w=740',
      'https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?semt=ais_hybrid&w=740',
    ],
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    likes: 100,
    isLiked: false,
    createdAt: '2025-05-29T09:00:00Z',
  },
  {
    id: '3',
    user: {
      username: 'Doe John',
      avatar:
        'https://static.vecteezy.com/system/resources/thumbnails/027/312/306/small/portrait-of-a-dj-with-headphone-isolated-essential-workers-avatar-icons-characters-for-social-media-and-networking-user-profile-website-and-app-3d-render-illustration-png.png',
    },
    media: [
      'https://img.freepik.com/free-psd/view-cute-brown-white-pet-dog_23-2150179459.jpg?semt=ais_hybrid&w=740',
      'https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg',
      'https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?semt=ais_hybrid&w=740',
    ],
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    likes: 100,
    isLiked: false,
    createdAt: '2025-05-29T09:00:00Z',
  },
  {
    id: '4',
    user: {
      username: 'Chris',
      avatar:
        'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?semt=ais_hybrid&w=740',
    },
    media: [
      'https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg',
      'https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?semt=ais_hybrid&w=740',
      'https://img.freepik.com/free-psd/view-cute-brown-white-pet-dog_23-2150179459.jpg?semt=ais_hybrid&w=740',
    ],
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    likes: 100,
    isLiked: false,
    createdAt: '2025-05-29T09:00:00Z',
  },
  {
    id: '5',
    user: {
      username: 'Martin',
      avatar:
        'https://static.vecteezy.com/system/resources/thumbnails/027/312/306/small/portrait-of-a-dj-with-headphone-isolated-essential-workers-avatar-icons-characters-for-social-media-and-networking-user-profile-website-and-app-3d-render-illustration-png.png',
    },
    media: [
      'https://img.freepik.com/free-psd/view-cute-brown-white-pet-dog_23-2150179459.jpg?semt=ais_hybrid&w=740',
      'https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?semt=ais_hybrid&w=740',
      'https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg',
    ],
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    likes: 100,
    isLiked: false,
    createdAt: '2025-05-29T09:00:00Z',
  },
];

const Home = ({navigation}) => {
  const [storiesData, setStoriesData] = useState(null);
  const [postData, setPostData] = useState(null);
  const [activeIndices, setActiveIndices] = useState({});

  useEffect(() => {
    fetchStories();
    fetchPostData();
  }, []);

  const fetchStories = async () => {
    try {
      const response = await axios.get(ApiEndPoint.storyAPI);
      setStoriesData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPostData = async () => {
    try {
      const response = await axios.get(ApiEndPoint.postDataAPI);
      console.log('Fetched postData:', response.data);
      setPostData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const RenderStoryItem = ({ item }) => (
    <View style={styles.storyItem}>
      <Image
        source={{ uri: item.avatar }}
        style={[
          styles.storyAvatar,
          { borderColor: item.isViewed ? Colors.lightColor : Colors.Red },
        ]}
      />
      <Text style={styles.storyUsername} numberOfLines={1}>
        {item.username}
      </Text>
    </View>
  );

  const renderDots = (media, postId) => {
    const activeIndexForPost = activeIndices[postId] || 0;
    return (
      <View style={styles.dotContainer}>
        {media.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { opacity: index === activeIndexForPost ? 1 : 0.3 },
            ]}
          />
        ))}
      </View>
    );
  };

  const PostMediaCarousel = ({ media, postId }) => {
    const handleScroll = (event) => {
      const contentOffsetX = event.nativeEvent.contentOffset.x;
      const index = Math.round(contentOffsetX / screenWidth);
      
      setActiveIndices((prev) => ({
        ...prev,
        [postId]: index,
      }));
    };

    return (
      <>
        <FlatList
          data={media}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => `${postId}_${index}`}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.postImage} />
          )}
          getItemLayout={(data, index) => ({
            length: screenWidth,
            offset: screenWidth * index,
            index,
          })}
        />
        {renderDots(media, postId)}
      </>
    );
  };

  const RenderPostItem = ({ post }) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image source={{ uri: post.user.avatar }} style={styles.postAvatar} />
        <Text style={styles.postUsername}>{post.user.username}</Text>
      </View>

      <PostMediaCarousel media={post.media} postId={post.id} />

      <View style={styles.actionsRow}>
      <Image source={post?.isLiked ? image.heart_fill : image.heart} style={styles.icon} />
        <Image source={image.comment} style={styles.icon} />
        <Image source={image.share} style={styles.icon} />
        <View style={{ flex: 1 }} />
        <Image source={image.bookmark} style={styles.icon} />
      </View>

      <Text style={styles.likesText}>{post.likes} Likes</Text>

      <Text style={styles.captionText}>
        <Text style={styles.postUsername}>{post.user.username} </Text>
        {post.caption}
      </Text>

      <Text style={styles.timestampText}>
        {moment(post.createdAt).fromNow()}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <FlatList
        ListHeaderComponent={
          <View style={{ marginTop: 10 }}>
            <FlatList
              data={stories}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <RenderStoryItem item={item} />}
              contentContainerStyle={{ paddingHorizontal: 10 }}
            />
          </View>
        }
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RenderPostItem post={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Home;

