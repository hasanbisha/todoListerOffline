import { SIGN_UP, ERROR } from './Types'
import axios from 'axios'
import { AsyncStorage } from 'react-native'

export const signUp = (user, history) => dispatch => {
    // axios({
    //     method: 'POST',
    //     url: 'http://192.168.0.59:5000/user/test',
    //     data: {
    //         name: user.name,
    //         email: user.email,
    //         password: user.password
    //     }
    // }).then(res => {
    //     // AsyncStorage.setItem('access_token', res.data.token)
    //     //     .then(err => {
    //     //         if(!err) {
    //     //             dispatch({
    //     //                 type: SIGN_UP,
    //     //                 payload: res.data.token
    //     //             })
    //     //             history.push('/home')
    //     //         }
    //     //     });  
    //     console.log(res);
    // });
    axios({
        method: "POST",
        url: 'http://192.168.0.59:5000/user/register',
        data: {
            name: user.name,
            email: user.email,
            password: user.password
        }
    })
    .then(res => {
        dispatch({
            type: ERROR,
            payload: res.data.message
        })

        if(res.data.token) {
            AsyncStorage.setItem('accessToken', res.data.token);

            dispatch({
                type: SIGN_UP,
                payload: res.data.token
            })

            history.push('/home');
        }
    })
}