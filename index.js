/**
 * @format
 */

import React from 'react'
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import allReducers from './allReducer';
import App from './App';

const store = createStore(allReducers)

class Index extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}

AppRegistry.registerComponent('LinkTeam', () => Index);
