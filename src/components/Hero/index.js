/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, TouchableOpacity, Image, Text} from 'react-native';

import  { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import {loadHeroDetails} from '../../store/actions/actions';

import styles from './styles';

const Hero = props => {
  return (
    <TouchableOpacity
      onPress={()=>props.onItemPress(props.hero)}
      style={styles.item}
    >
      <Image style={styles.image}
        resizeMethod="resize"
        resizeMode="stretch"
        source={{uri: `${props.thumbnail.path}.${props.thumbnail.extension}` }}
      />
      <Text style={styles.text}>{props.name}</Text>
    </TouchableOpacity>
  );
};


const mapDispatchToProps = dispatch => (bindActionCreators({ loadHeroDetails }, dispatch));
const mapStateToProps = state => ({hero: state.content.hero});

export default connect(mapStateToProps, mapDispatchToProps)(Hero);
