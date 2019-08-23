import React, { Component } from 'react'
import { Text, View, TouchableOpacity, TextInput, StyleSheet, AsyncStorage } from 'react-native'

export class SignUp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputDiv}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput 
                        style={styles.textBox}
                    />
                </View>
                <View style={styles.inputDiv}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput 
                        style={styles.textBox}
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.buttonText} > Log In </Text>
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
        marginTop: 200,
    },
    buttonText: {
        color: '#F2F2F2',
        fontSize: 22,
        alignSelf: 'center',
        paddingVertical: 10
    }
})

export default SignUp
