/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';

import  { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import {setHeroDetails} from '../../store/actions/actions';

import styles from './styles';

class Hero extends Component {
  _onItemPress = async () => {
    await this.props.setHeroDetails(this.props);
    // this.props.navigation.navigate('Description');
    console.log(this.props)
  } 
  render(){
    return (
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
    );
  }
  
};


const mapDispatchToProps = dispatch => (bindActionCreators({ setHeroDetails }, dispatch));
const mapStateToProps = state => ({hero: state.content.hero});

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
