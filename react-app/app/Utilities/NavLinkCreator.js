import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinkCreator = ({ icon, name, route}) => {
    return (
        <NavLink to={route} activeClassName="active">
            <span className="icon">
                <i className={`${icon} fa-fw`}></i>
            </span>
            <span className="name">
                { name }
            </span>
        </NavLink>
    )
}

export { NavLinkCreator }