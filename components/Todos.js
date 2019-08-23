import React, { Component } from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, Text, ScrollView } from 'react-native'

import { connect } from 'react-redux';
import { getTodos, removeAllTodos } from '../actions/TodoActions';

import Todo from './Todo'

class Todos extends Component {
    componentDidMount() {
        console.log(this.props.user.accessToken)
    }

    render() {
        const { todos } = this.props.todos;

        return (
            <ScrollView style={styles.container}>
                <TouchableWithoutFeedback  
                    onPress={() => this.props.history.push('/createTodo')}
                >
                    <Text style={styles.createTodo}>Create Todo</Text>
                </TouchableWithoutFeedback>
                {todos.map((todo, index) => (
                    <View style={styles.TodoBox}>
                        <Todo  key={todo.id} todo={todo} history={this.props.history}/>
                    </View>
                ))}

                {/* <Button 
                    title='Remove all todos'
                    onPress={() => this.props.removeAllTodos()}
                /> */}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30
    },
    createTodo: {
        width: 100,
        marginTop: 35,
        paddingHorizontal: 8,
        paddingVertical: 12,
        fontSize: 16,
        lineHeight: 18,
        textAlign:'center',
        // Border
        borderColor: '#F27052',
        borderWidth: 1,
        borderRadius: 8,
        // Colors
        backgroundColor: '#F27052',
        color: '#f2f2f2',
        // Alignment
        alignSelf: 'flex-end'        
    },
    TodoBox: {
        backgroundColor: '#F2D4AE',
        borderColor: '#F2D4AE',
        borderRadius: 5,
        marginTop: 20
    }
})

const mapStateToProps = (state) =>{
    return {
        todos: state.todos,
        user: state.user
    }
}

export default connect(mapStateToProps, { getTodos, removeAllTodos, })(Todos)
