import React from 'react'

export default function Creators({firstName, lastName, id}) {
    return (
        <div>
            <span>{firstName} </span>
            <span>{lastName}</span>
        </div>
    )
}
