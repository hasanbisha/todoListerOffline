import React, { Component } from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import {NativeRouter as Router, Switch, Route} from 'react-router-native';

import { Provider } from 'react-redux'
import store from './store';

import Todos from './components/Todos';
import CreateTodo from './components/CreateTodo';
import EditTodo from './components/EditTodo';
import Navigation from './components/layout/Navigation';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (
      <Router>
        <View style={styles.container}>
          <Provider store={store}>
            <Switch>
              <Route exact path='/' render={props => (
                <React.Fragment>
                  <Navigation {...props} />
                  <Home {...props} />
                </React.Fragment>
              )} />
              <Route exact path='/login' render={props => (
                <React.Fragment>
                  <Navigation {...props} />
                  <Login {...props} />
                </React.Fragment>
              )} />
              <Route exact path='/signUp' render={props => (
                <React.Fragment>
                  <Navigation {...props} />
                  <SignUp {...props} />
                </React.Fragment>
              )} />
              <Route exact path='/home' render={props => (
                <React.Fragment>
                  <Navigation {...props} />
                  <Todos {...props} />
                </React.Fragment>
              )} />
              <Route exact path='/createTodo' render={props => (
                <React.Fragment>
                  <Navigation {...props} />
                  <CreateTodo {...props} />
                </React.Fragment>
              )} />
              <Route exact path='/editTodo/:id' render={props => (
                <React.Fragment>
                  <Navigation {...props} />
                  <EditTodo {...props} />
                </React.Fragment>
              )} />
            </Switch>
          </Provider>
        </View>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? 31 : 0,
    backgroundColor: '#F2F2F2',
    flex: 1 
  }
})

export default App
