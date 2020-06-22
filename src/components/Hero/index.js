/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Text, Alert, Modal} from 'react-native';

import  { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import {setHeroDetails, setModalVisible} from '../../store/actions/actions';

import styles from './styles';

class Hero extends Component {
  constructor(props){
    super(props);
    this.props.setModalVisible(false);
  }
  _onItemPress = async _ => {
    await this.props.setHeroDetails(this.props);
    this.props.setModalVisible(true);
    const isVisivel = this.props.modalVisible.toString();
    Alert.alert('Teste', isVisivel );
    console.log(this.props);
  }
  _onRenderModal = _ => {
    const hero = this.props.hero;
    const defaultDesc = 'Description not found';
    return (
      <View>
        {
          hero ? <Modal
          animationType="slide"
          visible={this.props.modalVisible} >
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
            <TouchableOpacity onPress={() => this.props.setModalVisible(false)}>
              <Text>Voltar</Text>
            </TouchableOpacity>
        </Modal>
        : false
        }
        
      </View>
      
    );
  } 
  render(){
    return (
      <View>
        {this._onRenderModal()}
        <TouchableOpacity
          onPress={ this._onItemPress }
          style={styles.item}
        >
          <Image style={styles.image}
            resizeMethod="resize"
            resizeMode="stretch"
            source={{uri: `${this.props.thumbnail.path}.${this.props.thumbnail.extension}` }}
          />
          <Text style={styles.text}>{this.props.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
    
};


const mapDispatchToProps = dispatch => (bindActionCreators({ setHeroDetails, setModalVisible }, dispatch));
const mapStateToProps = state => ({hero: state.content.hero, modalVisible: state.content.isVisible});

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
