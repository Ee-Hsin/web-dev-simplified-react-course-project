import React from 'react'
import Creators from './Creators';

export default function CreatorList({creators}) {
    
    //Doing it outside the JSX just to show (sometimes it is simpler)
    const creatorElements = creators.map(creator => {
        return <Creators key={creator.id} {...creator}/>
    })

    return (
        <div className="ingredient-grid">
            {creatorElements}
        </div>
    )
}
