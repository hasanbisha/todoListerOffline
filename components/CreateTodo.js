import React, { Component } from 'react';
import { Text, View, TextInput, Button, StyleSheet, TouchableHighlight } from 'react-native';

import { connect } from 'react-redux';
import { addTodo } from '../actions/TodoActions';

class CreateTodo extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            todoName: ''
        }
    }
    
    updateTodo = (name) => {
        this.setState({todoName: name})
    }

    submitTodo = () => {
        this.props.addTodo(this.state.todoName);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.fieldName}> Todo Name </Text>
                <TextInput
                    style={styles.inputText}
                    onChangeText={(text) => this.updateTodo(text)} 
                />
                <TouchableHighlight
                    style={styles.submitButton}
                    onPress={() => {
                        this.props.addTodo(this.state.todoName)
                        this.props.history.push('/');
                    }}                
                    underlayColor='#F27052'
                >
                    <Text style={{textAlign: 'center', color: '#f2f2f2'}}>ADD TODO</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const mapStateToProps = state => ({})

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30
    },
    fieldName: {
        color: '#F27052',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 15
    },
    inputText: {
        height: 50,
        backgroundColor: '#F2D4AE',
        padding: 10,
        // Border
        borderColor: '#F2D4AE',
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 20,
        color: '#F27052',
        marginBottom: 20
    }, 
    submitButton: {
        backgroundColor: '#F27052',
        borderColor: '#F2D4AE',
        borderWidth: 1,
        borderRadius: 15,
        padding: 10
    }
})

export default connect(mapStateToProps, { addTodo })(CreateTodo)
