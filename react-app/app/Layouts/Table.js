import React, { Component, Fragment } from 'react'

class Table extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { payload, headers, properties, bodyClass, headersClass } = this.props

        return (
            <Fragment>
                <table>
                    <TableHead
                        data={payload}
                        headers={headers}
                        properties={properties}
                        headersClass={headersClass} />
                    <TableBody
                        data={payload}
                        headers={headers}
                        properties={properties}
                        bodyClass={bodyClass} />
                </table>
            </Fragment>
        )
    }
}

class TableHead extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { headers, properties, headersClass } = this.props

        return (
            <thead>
                <tr>
                    {
                        _.map(properties, (value, key) => {
                            return (
                                <th
                                    key={key}
                                    className={headers[value].toLowerCase().replace(" ", "-") + " " + (headersClass ? headersClass[value] : "")}>
                                    {headers[value]}
                                </th>
                            )
                        })
                    }
                </tr>
            </thead>
        )
    }
}

class TableBody extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { data, headers, properties, bodyClass } = this.props
        return (
            <tbody>
                {
                    _.map(data, (value, key) => {
                        return (
                            <tr key={key} onContextMenu={this.onContextMenu}>
                                {
                                    _.map(properties, (innerValue, innerKey) => {
                                        return (
                                            <td
                                                className={innerValue.toLowerCase().replace(" ", "-") + " " + (bodyClass ? bodyClass[innerValue] : "")}
                                                key={innerKey}
                                                data-head={headers[innerValue]}>
                                                {value[innerValue]}
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        )
    }
}

export { Table }