import { StyleSheet} from 'react-native';
import { screenWidth } from '../../utils/helper';
import { Colors } from '../../utils/colors';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  storyItem: {
    alignItems: 'center',
    marginRight: 15,
    width: 70,
  },
  storyAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 3,
  },
  storyUsername: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
  postContainer: {
    marginTop:10
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:10
  },
  postAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  postUsername: {
    fontWeight: 'bold',
    fontSize: 14,
    flex: 1,
  },
  postImage: {
    width: screenWidth,
    height: 350,
    resizeMode: 'cover',
    right:10
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.white,
    marginHorizontal: 3,
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap:10
  },
  icon: {
    fontSize: 22,
    marginRight: 15,
  },
  likesText: {
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginBottom: 4,
  },
  captionText: {
    marginHorizontal: 10,
    fontSize: 14,
  },
  timestampText: {
    marginHorizontal: 10,
    marginTop: 4,
    fontSize: 12,
    color: Colors.Gray,
  },
  icon:{
    height:20,width:20,resizeMode:"contain"
  }
});

export default styles;
