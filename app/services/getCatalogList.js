import axios from 'axios';
import {HOST_URL, PATH_URL, PORT, ROUTE_PREFIX} from '../../config'

const getCatalogList = async() => {
    /* http://localhost:3000/api/v1/catalog */
    const catalogList = await axios.get(`http://localhost:3000/api/v1/catalog`, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => response)
    return catalogList
}

export default getCatalogList