import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'

import { EmployeeListAction } from '../Actions/EmployeeAction'

import Loading from '../Layouts/Loading'

import { DefaultListState } from '../Constants/DefaultListState'

import Navbar from '../Layouts/Navbar'
import Table from '../Layouts/Table'

import Error404 from '../Pages/Error404'

import { ObjectCreator } from '../Utilities/ObjectCreator'

class EmployeeList extends Component  {
    constructor(props) {
        super(props)
        this.state = DefaultListState
    }

    componentWillMount() {
        this.props.EmployeeListAction()
    }

    componentDidUpdate(prevProps) {
        if (this.props.list !== prevProps.list && this.props.list !== undefined) {
            const { data, loading, error } = this.props.list.payload
            this.setState({
                payload: data,
                loading: loading,
                error: error,
            })
        }
    }

    render() {
        const { payload, error, loading } = this.state
        const properties = ['id', 'name', 'designation', 'joining_date', 'department']
        const headers = ObjectCreator({ properties: properties, propertyValue: ['id', 'name', 'designation', 'joining date', 'department']})
        const headersClass = ObjectCreator({ properties: properties, propertyValue: ['id', 'name', 'designation', 'joining_date', 'department']})
        const bodyClass = headersClass

        return (
            <div className="content">
                <Navbar />
                {
                    loading ? <Loading /> : ''
                }
                {
                    !isEmpty(payload) ?
                    <div className="table-list">
                        <Table
                            payload={payload}
                            headers={headers}
                            properties={properties}
                            bodyClass={bodyClass}
                            headersClass={headersClass}
                        />
                    </div>
                    : <Fragment></Fragment>
                }
                {
                    error ? <Error404 /> : ''
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.employee
    }
}

const mapDispatchToProps = { EmployeeListAction }


export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList)