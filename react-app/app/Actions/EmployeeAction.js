import { ActionList } from '../Constants/ActionList'

import { ApiHelper } from '../Api/Routes'


const EmployeeListAction = () => (dispatch) => {
    ApiHelper.getEmployeeList()
    .then((response) => {
        dispatch({
            type: ActionList.employeeList,
            payload: response,
            error: false,
            loading: false,
        })
    })
    .catch((error) => {
        dispatch({
            type: ActionList.employeeList,
            payload: [],
            error: error.response,
            loading: false
        })
    })
}

const EmployeeDetailsAction = ({id}) => (dispatch) => {
    ApiHelper.getEmployeeDetails({id})
    .then((response) => {
        dispatch({
            type: ActionList.employeeDetails,
            payload: response,
            error: false,
            loading: false,
        })
    })
    .catch((error) => {
        dispatch({
            type: ActionList.employeeDetails,
            payload: [],
            error: error.response,
            loading: false,
        })
    })
}

export { EmployeeListAction, EmployeeDetailsAction }