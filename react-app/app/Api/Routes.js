import axios from '../Api/axios'

// Fake Rest Api
const JsonServer = "http://localhost:3000"
const ApiHelper = {
    getEmployeeList: () => axios.get(`${JsonServer}/employee`),
    getEmployeeDetails: ({id}) => axios.get(`${JsonServer}/employee/${id}`),
}

export { ApiHelper }