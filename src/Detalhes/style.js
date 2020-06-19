import {
    StyleSheet, 
    Dimensions
} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('screen').width
const SCREEN_HEIGHT = (Dimensions.get('screen').height)/2
const styles = StyleSheet.create({
    fundo:{
        backgroundColor: '#000',
        
    },
    viewText:{
        alignItems: 'center'
    },
    image:{
        width:SCREEN_WIDTH, 
        height:SCREEN_HEIGHT,
    },
    textHero:{
        padding:10, 
        fontSize:20,
        fontWeight: 'bold',
        color:'red',
        backgroundColor: '#FFF',
        width: '95%',
        textAlign: 'center',
        margin: 10
        
    },
    textDesc:{
        padding:20,
        fontSize: 18,
        color:'#FFF',
        textAlign: 'justify',
        borderColor: '#FFF',
        borderWidth: 2,
        borderRadius: 5,
        width: '95%',
        margin: 10,
    },
    scrolDesc:{
        height: '5%'
    }
})
export default styles;