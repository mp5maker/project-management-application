import { reduce } from 'lodash'

const Search = ({ collection, keyword, property }) => {
    return reduce(collection, (newArr, item) => {
        if (parseInt(item[property].toLowerCase().indexOf(keyword.toLowerCase())) > - 1) {
            return [...newArr, item]
        }
        return newArr
    }, [])
}

export { Search }