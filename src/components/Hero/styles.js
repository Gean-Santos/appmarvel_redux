import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'red',
  },
  image:{
    height: 60, 
    width: 60, 
    borderRadius: 20,
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
})