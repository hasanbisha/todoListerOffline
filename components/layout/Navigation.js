import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

const Navigation = ({location, history}) => {
    return (
        <View style={styles.navigation}>
            {location.pathname !== '/' ?
                <TouchableHighlight 
                    style={styles.goBack} 
                    underlayColor='#F27052'
                    onPress={() => history.push('/')}
                >
                    <Text style={{textAlign: 'center'}}>
                        <Ionicons name='ios-arrow-back' size={56} color='#f2f2f2'/>
                    </Text>
                </TouchableHighlight>
                :
                <Text style={styles.brandName}>Todo Lister</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    navigation: {
        height: 65,
        backgroundColor: '#F2B263',
        display: 'flex',
        justifyContent: 'center'
    },
    brandName: {
        color: '#F2F2F2',
        fontSize: 26,
        lineHeight: 29,
        fontWeight: 'bold',
        alignSelf: 'center',
        width: 150
    },
    goBack: {
        width: 26,
        borderRadius:50,
        width: 50
    }
})

export default Navigation
