import React, { Component, Fragment } from 'react'

import { En } from '../Constants/En'


/**
 * Top Navigation Bar Layout
 */
class Navbar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <input className="something" type="text"/>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar