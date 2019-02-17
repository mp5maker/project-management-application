import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { isEmpty } from 'lodash'

import { EmployeeListAction } from '../Actions/EmployeeAction'

import EmployeeForm from '../Common/EmployeeForm'

import { FormList } from '../Constants/FormList'

import Loading from '../Layouts/Loading'

import { DefaultListState } from '../Constants/DefaultListState'

import Navbar from '../Layouts/Navbar'
import Table from '../Layouts/Table'

import Error404 from '../Pages/Error404'

import { ObjectCreator } from '../Utilities/ObjectCreator'
import { Search } from '../Utilities/Search'

class EmployeeList extends Component  {
    constructor(props) {
        super(props)
        this.state = { ...DefaultListState, searchResult: []}
        this.giveKeywords = this.giveKeywords.bind(this)
    }

    giveKeywords(event) {
        const { value } = event.target
        const { payload } = this.state
        const { data } = this.props.list.payload
        const searchResult = Search({collection: payload, keyword: value, property: 'name'})
        this.setState({
            searchResult: !isEmpty(searchResult) ? searchResult : data
        })
    }

    componentWillMount() {
        this.props.EmployeeListAction()
    }

    componentDidUpdate(prevProps, prevStates) {
        if (this.props.list !== prevProps.list && this.props.list !== undefined) {
            const { data, loading, error } = this.props.list.payload
            this.setState({
                payload: data,
                loading: loading,
                error: error,
                searchResult: data,
            })
        }
    }

    render() {
        const { payload, error, loading, searchResult } = this.state
        const properties = ['id', 'name', 'designation', 'joining_date', 'department']
        const headers = ObjectCreator({ properties: properties, propertyValue: ['id', 'name', 'designation', 'joining date', 'department']})
        const headersClass = ObjectCreator({ properties: properties, propertyValue: ['id', 'name', 'designation', 'joining_date', 'department']})
        const bodyClass = headersClass

        return (
            <div className="content">
                <Navbar
                    giveKeywords={this.giveKeywords}
                    createFormId={FormList.createEmployeeForm}
                    filterFormId={FormList.filterEmployeeForm} />
                <EmployeeForm />
                {
                    loading ? <Loading /> : ''
                }
                {
                    !isEmpty(payload) ?
                    <div className="table-list">
                        <Table
                            payload={searchResult}
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