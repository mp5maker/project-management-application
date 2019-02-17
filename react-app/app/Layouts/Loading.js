import React, { Component } from 'react'

class Loading extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="loading">
                <div className="spinner"></div>
            </div>
        )
    }
}

export default Loading