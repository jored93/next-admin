import React from 'react'

const index = (props) => {
    return (
        <input 
            type={props.type}
            placeholder={props.placeholder} 
            name={props.name}
            id={props.name}
        />
    )
}

export default index