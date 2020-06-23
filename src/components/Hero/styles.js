import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width
const SCREEN_HEIGHT = (Dimensions.get('screen').height)/2

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'red',
  },
  image:{
    height: 60, 
    width: 60, 
    borderRadius: 35,
  },
  text:{
    marginLeft: 20,
    color: '#FFF',
    fontSize: 16
  },
  item:{
    flexDirection:'row', 
    padding: 10, 
    alignItems:'center',
    backgroundColor: '#000',
  },
});