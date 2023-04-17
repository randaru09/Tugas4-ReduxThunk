import React from 'react';
import {  View, Text, TouchableOpacity } from "react-native";
import {connect} from 'react-redux';
import {tambah, kurang, ubah} from './action';

class Counter extends React.Component{
    
    constructor(props){
        super(props);
        console.log(this.props.counter);
    }

    render(){
        return (
            <View style={styles.card}>
                <Text>
                    Banyak Data : {this.props.counter.value.length} Data Dengan Isi Random
                </Text>
                <TouchableOpacity onPress={ () => this.props.increaseTheValue() }>
                  <Text style = { styles.search }>
                    Tambah Data
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => this.props.decreaseTheValue() }>
                  <Text style = { styles.search }>
                    Hapus Data
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => this.props.modifyTheValue() }>
                  <Text style = { styles.search }>
                    Ubah Data
                  </Text>
                </TouchableOpacity>
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
        increaseTheValue : () => {
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