import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    back:{
        height: "100%",
        alignItems: 'center',
        backgroundColor: '#000'
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
        paddingLeft: '5%'
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

})
export default styles;