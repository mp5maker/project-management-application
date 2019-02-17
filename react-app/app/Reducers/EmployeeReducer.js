import { InitState } from '../Constants/DefaultReducerState'
import { ActionList } from '../Constants/ActionList'

const EmployeeReducer = (state=InitState, action) => {
    switch(action.type) {
        case ActionList.employeeList:
            return action
        case ActionList.employeDetails:
            return action
        default: return state
    }
}

export { EmployeeReducer }