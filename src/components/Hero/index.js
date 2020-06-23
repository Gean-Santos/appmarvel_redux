/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Text, Alert} from 'react-native';

import  { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import {setHeroDetails, setModalVisible} from '../../store/actions/actions';

import styles from './styles';

class Hero extends Component {
  constructor(props){
    super(props);
  }
  _onItemPress = async () => {
    await this.props.setHeroDetails(this.props);
    this.props.setModalVisible();
  }
  render(){
    return (
      <View>
        <TouchableOpacity
          onPress={ () => this._onItemPress() }
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
const mapStateToProps = state => ({hero: state.content.hero});

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
