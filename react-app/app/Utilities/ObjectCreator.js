import React from 'react'
import { reduce, isObject } from 'lodash'

const ObjectCreator = ({ properties, propertyValue, allSame = null }) => {
    return (reduce(properties, (newObject, prop, key) => {
        if (isObject(allSame)) {
            const { data } = allSame
            return { ...newObject, [prop]: data }
        }
        return { ...newObject, [prop]: propertyValue[key] }
    }, {}))
}

export { ObjectCreator }