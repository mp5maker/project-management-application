import { combineReducers } from 'redux'

import { EmployeeReducer } from '../Reducers/EmployeeReducer'

const RootReducer = combineReducers({
    user: EmployeeReducer
})

export { RootReducer }