import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Routes } from '../Constants/Routes'

import Sidebar from '../Layouts/Sidebar'

import EmployeeList from '../Pages/EmployeeList'
import EmployeeDetails from '../Pages/EmployeeDetails'

import ProjectList from '../Pages/ProjectList'
import ProjectDetails from '../Pages/ProjectDetails'

import Error404 from '../Pages/Error404'

/**
 * Heart of the app where the frontend routes are manipulated
 */
class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <div className="wrapper">
                        <div className="sidebar-container">
                            <Sidebar />
                        </div>
                        <Switch>
                            {/* Default Page */}
                            <Route exact path={Routes.root} component={EmployeeList} />

                            {/* Employee */}
                            <Route path={Routes.employeeDetails} component={EmployeeDetails} />
                            <Route path={Routes.employeeList} component={EmployeeList}/>

                            {/* Employee */}
                            <Route path={Routes.projectDetails} component={ProjectDetails} />
                            <Route path={Routes.projectList} component={ProjectList}/>

                            {/* Error Page */}
                            <Route component={Error404} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Fragment>
        )
    }
}

export default App