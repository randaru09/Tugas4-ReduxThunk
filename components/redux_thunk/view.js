import React from 'react';
import {  View, Text, FlatList } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import {connect} from 'react-redux';
import {tambah, kurang, ubah} from './action';

const renderItem = ({ item }) => (
  <View style = { styles.item }>
    <View>
      <Text>{ item.from_loc } - { item.to_loc }</Text>
    </View>
    <View>
      <MaterialIcons name = "flight" size={24} color="#5CA454" style={styles.plane} />
    </View>
    <View style = { styles.info }>
      <Text style = { styles.plane_type }>{ item.plane_type }</Text>
      <Text style = { styles.date_info }>{ item.time }</Text>
    </View>    
  </View>
);

class Counter extends React.Component{
    
    constructor(props){
        super(props);
        console.log(this.props.counter);
    }

    render(){
        return (
            <View style={styles.card}>
              <FlatList
                data={this.props.counter.value}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                
              />
            </View>
        );
    }
}

const mapStateToProps=state=>{
    return {
        counter: state.counter,
    };
}

const mapDispatchToProps = dispatch => {
	return{
        TambahValue : () => {
            dispatch(tambah());
        },

        decreaseTheValue : () => {
            dispatch(kurang());
        },

        modifyTheValue : () => {
            dispatch(ubah());
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Counter);