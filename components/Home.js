import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.primaryText}>Welcome to TodoLister</Text>
                <Text style={styles.secondaryText}>Work on your agenda anyplace you want</Text>
                <TouchableOpacity
                    activeOpacity={0.75}
                    style={styles.logInButton}
                    onPress={() => {
                        this.props.history.push('/login')
                    }}
                >
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.75}
                    style={styles.signUpButton}
                    onPress={() => {
                        this.props.history.push('/signUp')
                    }}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        padding: 30
    },
    primaryText: {
        color: '#F27052',
        textAlign: 'center',
        width: 185,
        fontSize: 40,
        alignSelf: 'center',
        marginTop: 40
    }, 
    secondaryText: {
        color: '#F2B263',
        fontWeight: '100',
        textAlign: 'center',
        width: 260,
        fontSize: 32,
        alignSelf: 'center',
        marginTop: 25
    },

    logInButton: {
        backgroundColor: '#F2B263',
        alignSelf: 'stretch',
        borderRadius: 5,
        marginTop: 140
    },
    signUpButton: {
        backgroundColor: '#F27052',
        alignSelf: 'stretch',
        borderRadius: 5,
        marginTop: 20
    },
    buttonText: {
        color: '#F2F2F2',
        fontSize: 22,
        alignSelf: 'center',
        paddingVertical: 10
    }
});

export default Home
