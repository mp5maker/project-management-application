import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { map } from 'lodash'

import { Routes} from '../Constants/Routes'
import { En } from '../Constants/En'

import { NavLinkCreator } from '../Utilities/NavLinkCreator'

const SidebarList = [
    {
        icon: 'fa fa-users',
        route: Routes.employeeList,
        name: En['EMPLOYEE'],
        defaultActive: true,

    },
    {
        icon: 'fa fa-tasks',
        route: Routes.projectList,
        name: En['PROJECTS'],
        defaultActive: false,
    }
]



class Sidebar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="sidebar">
                <SidebarHeader />
                <SidebarContent />
                <SidebarFooter />
            </div>
        )
    }
}

class SidebarHeader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="sidebar-header">
                <h4>
                    { En['PROJECT_MANGAGEMENT_APPLICATION'] }
                </h4>
            </div>
        )
    }
}

class SidebarContent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="sidebar-content">
                <ul>
                    {
                        map(SidebarList, (sidebar, key) => {
                            return (
                                <li key={key}>
                                    { NavLinkCreator(sidebar) }  
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

class SidebarFooter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="sidebar-footer">
                <span className="copyright">
                    { En['PROJECT_MANGAGEMENT_APPLICATION']}

                </span>
            </div>
        )
    }
}

export default withRouter(Sidebar)