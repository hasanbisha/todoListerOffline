import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, StyleSheet, AsyncStorage } from 'react-native'

import { connect } from 'react-redux'
import { signUp } from '../actions/UserActions';
import { getTodos } from '../actions/TodoActions';

export class SignUp extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    submitUser = () => {
        this.props.signUp(this.state, this.props.history)
        // this.props.getTodos();
    }
    
    render() {
        const { name, email, password } = this.state
        const { error, accessToken } = this.props.user

        return (
            <View style={styles.container}>
            {error !== '' && error !== undefined ?
                <View style={styles.errorBox}>
                    <Text>{error}</Text> 
                </View>
                :    <React.Fragment />
            }
                <View style={styles.inputDiv}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput 
                        style={styles.textBox}
                        onChangeText={(name) => this.setState({ name: name })}
                    />
                </View>
                <View style={styles.inputDiv}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput 
                        keyboardType='email-address'
                        style={styles.textBox}
                        onChangeText={(email) => this.setState({ email: email })}
                    />
                </View>
                <View style={styles.inputDiv}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput 
                        style={styles.textBox}
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({ password: password })}
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.submitUser()}
                >
                    <Text style={styles.buttonText} > Sign Up </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        padding: 30,
        flexDirection: 'column'
    },
    inputDiv: {
        marginBottom: 20
    },
    label: {
        color: '#F2B263',
        fontSize: 24,
        marginBottom: 4
    }, 
    textBox: {
        backgroundColor: '#F2D4AE',
        color: '#F27052',
        padding: 8,
        fontSize: 24,
        borderRadius: 5
    }, 
    button: {
        backgroundColor: '#F27052',
        alignSelf: 'stretch',
        borderRadius: 5,
        marginTop: 100,
    },
    buttonText: {
        color: '#F2F2F2',
        fontSize: 22,
        alignSelf: 'center',
        paddingVertical: 10
    },
    errorBox: {
        padding: 30,
        backgroundColor: '#F62E2E',
        textAlign: 'center'
    }
})

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, { signUp, getTodos })(SignUp)
