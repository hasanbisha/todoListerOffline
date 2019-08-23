import React, { Component } from 'react'
import { Text, View, TextInput, Switch, TouchableHighlight, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { getTodo, editTodo } from '../actions/TodoActions'

class EditTodo extends Component {
    state = {
        name: '',
        completed: false,
        id: ''
    }
    
    componentDidMount() {
        this.props.getTodo(this.props.match.params.id)
        setTimeout(() => {
            this.setState({
                name: this.props.todo.name,
                completed: this.props.todo.completed,
                id: this.props.todo.id
            })
        }, 50);
    }
    
    render() {
        changeText = (text) => {
            this.props.todo.name = text
            this.setState({name: text})
        }

        changeComplete = (val) => {
            this.props.todo.completed = val
            this.setState({completed: val})
        }

        return (
            <View style={styles.container}>
                <Text style={styles.fieldName}> Todo Name </Text>
                <TextInput
                    style={styles.inputText}
                    value={this.props.todo.name}
                    onChangeText={(val) => changeText(val)} 
                />
                <View style={{marginBottom: 20}}>
                    <Text style={styles.fieldName}> Is Completed </Text>
                    <Switch 
                        value={this.props.todo.completed}
                        trackColor='#F2D4AE'
                        thumbColor='#F27052'
                        onValueChange={(val) => changeComplete(val)}
                    />
                </View>
                <TouchableHighlight
                    style={styles.submitButton}
                    onPress={() => {
                        this.props.editTodo(this.state);
                        this.props.history.push('/');
                    }}                
                    underlayColor='#F27052'
                >
                    <Text style={{textAlign: 'center', color: '#f2f2f2'}}>UPDATE TODO</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

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
    },
})

const mapStateToProps = (state) => ({
    todo: state.todos.todo
})

export default connect(mapStateToProps, { getTodo, editTodo })(EditTodo)
