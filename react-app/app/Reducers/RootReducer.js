import { combineReducers } from 'redux'

import { EmployeeReducer } from '../Reducers/EmployeeReducer'

const RootReducer = combineReducers({
    employee: EmployeeReducer
})

export { RootReducer }