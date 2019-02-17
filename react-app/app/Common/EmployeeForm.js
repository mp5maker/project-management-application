import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { FormList } from '../Constants/FormList'

import { En } from '../Constants/En'

class EmployeeForm extends Component  {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
        this.cancel = this.cancel.bind(this)
    }

    submit(event) {
        event.preventDefault()
        console.log(event)
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
                            Hello
                        </div>
                    </form>
                    <div className="modal-footer">
                        <button 
                            className="btn btn-primary" 
                            type="button" 
                            onClick={this.submit}>
                            { En['CREATE'] }
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