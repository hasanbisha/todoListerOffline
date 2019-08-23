import React, { Component } from 'react';
import { Text, View, StyleSheet, Animated, TouchableHighlight, Alert, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable'

import { connect } from 'react-redux';
import { removeAllTodos, completeTodo, deleteTodo, getTodos } from '../actions/TodoActions';

const LeftActions = (props) => {
    const scale = props.dragX.interpolate({
        inputRange: [-100, 0],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    })
    return (
        <View style={styles.leftAction}>
            <Animated.Text style={[styles.actionText, { transform: [{ scale: scale }] }]}>Edit</Animated.Text>
        </View>
    )
}

export const RightActions = (props) => {
    const scale = props.dragX.interpolate({
        inputRange: [-100, 0],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    })

    return (
        <View style={styles.rightAction}>
            <Animated.Text style={[styles.actionText, { transform: [{ scale: scale }] }]}>Delete</Animated.Text>
        </View>
    )
}

class Todo extends Component {
    state = {
        id: this.props.todo.id,
        name: this.props.todo.name,
        completed: this.props.todo.completed,
        menuIsOpen: false,
    }

    componentDidMount() {
        todoId = this.props.todo.id
    }
    
    render() {
        const { id, name, completed } = this.state;

        return (
            <View>
                <TouchableOpacity 
                    onPress={() => this.setState({ menuIsOpen: !this.state.menuIsOpen })}
                >
                    <Swipeable
                        renderLeftActions={(progress, dragX) => <LeftActions progress={progress} dragX={dragX} />}
                        onSwipeableLeftOpen={() => this.props.history.push(`/editTodo/${id}`)}
                        renderRightActions={(progress, dragX) => <RightActions progress={progress} dragX={dragX} />}
                        ref={Swipeable.openLeft}
                        onSwipeableRightOpen={() => {
                            Swipeable.close
                            Alert.alert(
                                'Are you sure you want to delete this todo',
                                'Press OK to continue',
                                [
                                  {
                                    text: 'Cancel',
                                    onPress: () => {
                                        this.props.getTodos()
                                    },
                                  },
                                  {
                                    text: 'OK', 
                                    onPress: () => this.props.deleteTodo(id),
                                },
                                ],
                                {cancelable: false},
                            );
                        }}
                    >
                        <View style={styles.TodoBox}>
                            <Text style={ completed ? styles.Todo : styles.CompletedTodo}> {name} </Text>
                        </View>
                    </Swipeable>
                </TouchableOpacity>
                
                <View style={this.state.menuIsOpen==true ? styles.ActionMenu : {display: 'none'} }>
                    <TouchableHighlight 
                        style={styles.ActionButton}
                        onPress={() => this.props.deleteTodo(id)}
                        underlayColor='#F27052'
                    >
                        <Text style={{color: '#f2f2f2', textAlign: 'center'}}>Delete</Text>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        style={styles.ActionButton}
                        onPress={() => {
                            this.setState({ completed: !completed }) ;
                            this.props.completeTodo(id)
                        }}
                        underlayColor='#F27052'
                    >
                    <Text style={{color: '#f2f2f2', textAlign: 'center'}}>{completed ? 'Uncheck' : 'Complete'}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight 
                        style={styles.ActionButton}
                        onPress={() => this.props.history.push(`/editTodo/${id}`)}
                        underlayColor='#F27052'
                    >
                        <Text style={{color: '#f2f2f2', textAlign: 'center'}}>Edit todo</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    TodoBox: {
        backgroundColor: '#F2D4AE',
        borderColor: '#F2D4AE',
        borderRadius: 5,
    },
    Todo: {
        fontSize: 22,
        color: '#F27052',
        paddingHorizontal: 75,
        paddingVertical: 10,
        textDecorationLine: 'line-through',
        textAlign: 'center'
    },
    CompletedTodo: {
        fontSize: 22,
        color: '#F27052',
        paddingHorizontal: 75,
        paddingVertical: 10,
        textDecorationLine: 'none',
        textAlign: 'center'
    },
    ActionMenu: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        flexWrap: 'nowrap'
    },
    ActionButton: {
        backgroundColor: '#F2B263',
        padding: 6,
        width: 100,
    },
    leftAction: {
        backgroundColor: '#96B9D9',
        justifyContent: 'center',
        flex: 1,
        borderRadius: 5,
    },
    rightAction: {
        backgroundColor: '#F27052',
        justifyContent: 'center',
        flex: 1,
        borderRadius: 5,
        alignItems: 'flex-end'
    },
    actionText: {
        color: '#f2f2f2',
        fontWeight: '600',
        padding: 20,
    }
})

export default connect(() => {}, { removeAllTodos, deleteTodo, completeTodo, getTodos })(Todo)
