import React, { Component } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import styles from './style';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
class Description extends Component {
    static navigationOptions = {
        
        headerTitle: 'Description',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 26
            },
        headerStyle:{
            backgroundColor: 'red',
        },
        headerTintColor: '#FFF',
        
    }

    render() {
        const { hero } = this.props;
        const defaultDesc = 'Description not found';
        return (
           <ScrollView style={styles.fundo}>
               <Image 
                    source={{uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`}} 
                    style={styles.image}
                    resizeMethod='resize'
                    resizeMode='stretch'
                />
                <View style={styles.viewText}>
                    <Text style={styles.textHero}>{hero.name}</Text>
                    <Text style={styles.textDesc}>{hero.description !== ''? hero.description : defaultDesc}</Text>
                </View>
           </ScrollView> 
        );
    }
}

const mapStateToProps = state => ({ hero: state.content.hero });

export default connect(mapStateToProps)(Description);