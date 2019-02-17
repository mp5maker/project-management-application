import { InitState } from '../Constants/DefaultReducerState'
import { ActionList } from '../Constants/ActionList'

const EmployeeReducer = (state=InitState, action) => {
    switch(action.type) {
        case ActionList.employeeListAction:
            return action
        case ActionList.employeeDetailsAction:
            return action
        default: return state
    }
}

export { EmployeeReducer }