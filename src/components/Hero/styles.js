import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width
const SCREEN_HEIGHT = (Dimensions.get('screen').height)/2

export default StyleSheet.create({
  image:{
    height: 60, 
    width: 60, 
    borderRadius: 80,
  },
  text:{
    marginLeft: 20,
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  item:{
    flexDirection:'row', 
    padding: 10, 
    alignItems:'center',
    backgroundColor: 'red',
    borderRadius: 5,
    margin: 10,
  },
});