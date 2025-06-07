import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import { screenWidth } from '../../utils/helper';
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  username: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.black ,
  },
  profileSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  profileTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
  },
  statLabel: {
    fontSize: 13,
    color: Colors.black,
    marginTop: 2,
  },
  displayName: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black,
    marginBottom: 2,
  },
  bio: {
    fontSize: 14,
    color: Colors.black,
    lineHeight: 18,
  },
  postsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 1,
  },
  postItem: {
    width: (screenWidth - 4) / 3,
    height: (screenWidth - 4) / 3,
    padding: 1,
  },
  postImage: {
    width: '100%',
    height: '100%',
    borderRadius: 0,
  },
  plusIconStyle:{
    position:"absolute",
    height:25,
    width:25,
    bottom:0,
    right:20
  }
});


export default styles;
