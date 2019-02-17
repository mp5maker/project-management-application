import { reduce, keys } from 'lodash'

const prefix = ""

const routes = {
    root: '/',
    employeeList: '/employee',
    employeeDetails: '/employee/:id',
    projectList: '/projects',
    projectDetails: '/projects/:id',
}

const Routes = reduce(keys(routes), (newObj, path) => {
    return { ...newObj, [path]: prefix + routes[path] }
}, {})

const RouteDetails = ({route, id}) => {
    return routes[route].replace(':id', id)
}

export { Routes, RouteDetails }