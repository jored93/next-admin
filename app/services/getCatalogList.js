import axios from 'axios';

const getCatalogList = async() => {
    const catalogList = await axios.get(`http://localhost:3000/api/v1/catalog`, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => response)
    return catalogList
}

export default getCatalogList