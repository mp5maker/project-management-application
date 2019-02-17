import React, { Component, Fragment } from 'react'

import { En } from '../Constants/En'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.create = this.create.bind(this)
        this.filter = this.filter.bind(this)
        this.search = this.search.bind(this)
    }

    create() {
        const requiredId = document.getElementById(this.props.createFormId)
        if (requiredId) {
            requiredId.classList.add('active')
            return
        }
        return
    }

    filter() {
        const requiredId = document.getElementById(this.props.filterFormId) 
        if (requiredId) {
            requiredId.classList.add('active')
            return
        }
        return
    }

    search(event) {
        if (this.props.giveKeywords) {
            this.props.giveKeywords(event)
        }
    }

    render() {
        return (
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <input className="search" type="text" onChange={this.search}/>
                        <button className="btn btn-primary" type="button" onClick={this.create}>
                            { En['CREATE'] }
                        </button>
                        <button className="btn btn-info" type="button" onClick={this.filter}>
                            { En['FILTER'] }
                        </button>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar