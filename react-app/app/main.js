import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import App from './App/App'

import { RootReducer } from './Reducers/RootReducer'


const store = createStore(RootReducer, applyMiddleware(thunk))

// Root Level of the Single Page App
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react-app')
)