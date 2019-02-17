import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { keys } from 'lodash'

import { FormList } from '../Constants/FormList'

import { En } from '../Constants/En'

class EmployeeForm extends Component  {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
        this.cancel = this.cancel.bind(this)
        this.onChangeForm = this.onChangeForm.bind(this)
        this.state = {
            name: null,
            designation: null,
            joining_date: null,
            department: null,

        }
    }

    onChangeForm(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    submit(event) {
        event.preventDefault()
        const stateProperties = keys(this.state)
        // console.log(filterState)
    }

    cancel(event) {
        event.preventDefault()
        const requiredId = document.getElementById(FormList.createEmployeeForm) 
        if (requiredId) {
            requiredId.classList.remove('active')
            return
        }
        return
    }

    render() {
        const properClass = FormList.createEmployeeForm
        const properId = FormList.createEmployeeForm
        return (
            <div className={`${properClass} custom-modal top`} id={properId}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">
                            <span>
                                { En['ADD'] } &nbsp;
                            </span>
                            <span className="hide-tablet-down">
                                { En['EMPLOYEE'] }
                            </span>
                        </h2>
                    </div>
                    <form className="modal-body">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="employee-name">
                                       { En['NAME']}
                                    </label>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        name="name" 
                                        id="employee-name"
                                        onChange={this.onChangeForm}
                                        placeholder="Enter Name"/>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="employee-designation">
                                        {En['DESIGNATION']}
                                    </label>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        name="designation" 
                                        id="employee-designation"
                                        onChange={this.onChangeForm}
                                        placeholder="Enter Designation"/>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="employee-joining-date">
                                        {En['JOINING_DATE']}
                                    </label>
                                    <input 
                                        type="date" 
                                        className="form-control"
                                        name="joining_date" 
                                        id="employee-date"
                                        onChange={this.onChangeForm}
                                        placeholder="Enter Date"/>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="employee-department">
                                       { En['DEPARTMENT']}
                                    </label>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        name="department" 
                                        id="employee-department"
                                        onChange={this.onChangeForm}
                                        placeholder="Enter Department"/>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="modal-footer">
                        <button 
                            className="btn btn-primary" 
                            type="button" 
                            onClick={this.submit}>
                            { En['SUBMIT'] }
                        </button>
                        <button 
                            className="btn btn-danger" 
                            type="button" 
                            onClick={this.cancel}>
                            { En['CANCEL'] }
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        employee: state.employee
    }
}

const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm)