import { combineReducers } from 'redux'

import { EmployeeReducer } from '../Reducers/UserReducer'

const RootReducer = combineReducers({
    user: EmployeeReducer
})

export { RootReducer }