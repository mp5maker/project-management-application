import React, { Component, Fragment } from 'react'
import { connect} from 'react-redux'

import { Table } from '../Layouts/Table'

class EmployeeList extends Component  {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="content">
                hello
                <Table />
            </div>
                // payload={payload}
                // headers={headers}
                // properties={properties}
                // bodyClass={bodyClass}
                // headersClass={headersClass}/>
        )
    }
}

export default EmployeeList