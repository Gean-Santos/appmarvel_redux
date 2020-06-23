import {StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width
const SCREEN_HEIGHT = (Dimensions.get('screen').height)/2

const styles = StyleSheet.create({
    back:{
        height: "100%",
        alignItems: 'center',
        backgroundColor: '#000',
    },
    flat:{
        backgroundColor: '#000',
        borderTopWidth: 2,
        borderTopColor: 'red',
        width:'100%'
    },
    container:{
        borderWidth: 1,
        borderColor: 'red',
    }, 
    viewPicker:{
        flexDirection: 'row',
        backgroundColor: '#000',
        width: '100%',
        height:'7%',
        alignItems: 'center', 
        // justifyContent: 'center',
        // borderWidth: 1,
        // borderRadius: 5,
        // borderColor: 'red',
        marginVertical: 10,
        paddingLeft: '5%',
    },
    picker:{
        width: '37%',
        color: '#FFF',
        paddingLeft: '10%',
        borderWidth:1,
        borderRadius: 10,
        borderColor:'red',
        height: '80%',
        marginLeft: '4%',
    },
    textPicker:{
        color: '#FFF',
        fontSize:20,
        fontWeight: 'bold',
    },

    fundo:{
        backgroundColor: '#000',
        
      },
    viewText:{
        alignItems: 'center',
      },
    imageDesc:{
        width:SCREEN_WIDTH, 
        height:SCREEN_HEIGHT,
      },
    textHero:{
        padding:10, 
        fontSize:20,
        fontWeight: 'bold',
        color:'red',
        backgroundColor: '#000',
        width: '95%',
        textAlign: 'center',
        margin: 10,   
    },
    textDesc:{
        padding:20,
        fontSize: 18,
        color:'#000',
        textAlign: 'justify',
        borderColor: 'red',
        backgroundColor: '#FFF',
        borderWidth: 2,
        borderRadius: 5,
        width: '95%',
        margin: 10,
    },
    scrolDesc:{
        height: '5%',
    },
    viewButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'red', 
        width: '70%', 
        justifyContent: 'center',
        borderRadius: 5,
    }
})
export default styles;