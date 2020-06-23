import React, {Component} from 'react';
import {View, FlatList, Text, Modal, Image, TouchableOpacity, Alert} from 'react-native';
import { Picker } from '@react-native-community/picker'

import styles from './styles';

import  { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import { loadCharacters, loadLetters, searchByLetter, setModalVisible } from '../store/actions/actions';

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
        this,props.setModalVisible(false);
     }

     _renderItem = ({item}) => {
        return  (
            <Hero {...item} />
        )
    }

    _onModalPress = async () => {
        await this.props.setModalVisible(false);
    }

    _onRenderModal = _ =>  {
        const hero = this.props.hero;
        const visivel = this.props.isVisible;
        const defaultDesc = 'Description not found';
        return (
          <View>
            {
              hero ? <Modal
              animationType="slide"
              style={styles.fundo}
              visible={visivel} >
                <Image 
                  source={{uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`}} 
                  style={styles.imageDesc}
                  resizeMethod='resize'
                  resizeMode='stretch'
                />
                <View style={styles.viewText}>
                    <Text style={styles.textHero}>{hero.name}</Text>
                    <Text style={styles.textDesc}>{hero.description !== ''? hero.description : defaultDesc}</Text>
                </View>
                <View style={styles.viewButton}>
                    <TouchableOpacity style={styles.button} onPress={() => this._onModalPress()}>
                        <Text style={{textAlign: 'center', fontSize: 18, padding: 10, color: '#FFF'}}>Voltar</Text>
                    </TouchableOpacity>
                </View>
                
            </Modal>
            : false
            }
            
          </View>
          
        );
      } 
     
    render() {
        const heroes = this.props.content.characters;
        const letras = this.props.content.letters;
        
        return (
            <View style={styles.back}>
                {this._onRenderModal()}
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

const mapStateToProps = state => ({ content: state.content, hero: state.content.hero, isVisible: state.content.isVisible});
const mapDispatchToProps = dispatch => 
(bindActionCreators({ loadCharacters, loadLetters, searchByLetter, setModalVisible }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
