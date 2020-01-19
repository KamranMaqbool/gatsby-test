import React from 'react'

export default function header(props) {
    return (
        <div>
            <h1 style={{color:`teal`}}>{props.headerText}</h1>
        </div>
    )
}
