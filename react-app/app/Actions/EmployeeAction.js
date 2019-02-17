import { ActionList } from '../Constants/ActionList'
import { ApiHelper } from '../Api/Routes'


const EmployeeListAction = () => (dispatch) => {
    ApiHelper.getUserList()
    .then((response) => {
        dispatch({
            type: ActionList.employeeList,
            payload: response.data,
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
    ApiHelper.getUserDetail({id})
    .then((response) => {
        dispatch({
            type: ActionList.employeeDetails,
            payload: response.data,
            error: false,
            loading: false,
        })
    })
    .catch((error) => {
        dispatch({
            type: ActionList.employeeDetails,
            payload: error.response,
            error: false,
            loading: false,
        })
    })
}

export { EmployeeListAction, EmployeeDetailsAction }