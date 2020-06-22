import React, {Component} from 'react';
import {View, FlatList, Text, Picker} from 'react-native';

import styles from './styles';

import  { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import { loadCharacters, loadLetters, searchByLetter } from '../store/actions/actions';

import Hero from '../components/Hero';

class Home extends Component {
    
     static navigationOptions = {
        headerTitle: 'Marvel Heroes',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 26
            },
        headerStyle:{
            backgroundColor: 'red',
        },
        headerTintColor: '#FFF', 
     }

     constructor(props) {
        super(props);
        this.props.loadCharacters();
        this.props.loadLetters();
     }

     _renderItem = ({item}) => {
        return  (
            <Hero {...item} />
        )
    }
    
    
    _onItemPress = () => {
        this.props.navigation.navigate('Description')
    } 
    render() {
        const heroes = this.props.content.characters;
        const letras = this.props.content.letters;
        
        return (
            <View style={styles.back}>
                <View style={styles.viewPicker}>
                    <Text style={styles.textPicker}>Starts With: </Text>
                        {letras ? 
                            <Picker
                                style={styles.picker}
                                textStyle={{fontSize: 22, fontWeight:'bold'}}
                                selectedValue={letras}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.props.searchByLetter(itemValue)
                                }
                            >
                                <Picker.Item label="LETTER" value="" />
                                {letras.letters.map(letra =>
                                    <Picker.Item label={letra.letter.toUpperCase()} 
                                    value={letra.letter}  
                                    key={letra.id}
                                    />)
                                }  
                            </Picker>
                            : false
                        }    
                </View>
                {
                    heroes ? 
                        <FlatList 
                            style={styles.flat}
                            data={heroes.data.data.results}
                            renderItem={this._renderItem}
                            keyExtractor={(item) => String (item.id)}
                            ItemSeparatorComponent={()=> <View style={styles.container} />}
                        />
                    : false
                }
            </View>
        );
    };
}

const mapStateToProps = state => ({ content: state.content });
const mapDispatchToProps = dispatch => (bindActionCreators({ loadCharacters, loadLetters, searchByLetter }, dispatch));
export default connect(mapStateToProps, mapDispatchToProps)(Home);
