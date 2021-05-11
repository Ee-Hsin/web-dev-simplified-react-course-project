import React from 'react';
import Ingredient from './Ingredient';

export default function IngredientList({ ingredients }) {

    //Doing it outside the JSX just to show (sometimes it is simpler)
    const ingredientElements = ingredients.map(ingredient => {
        return <Ingredient key={ingredient.id} {...ingredient}/>
    })

    return (
        <div className="ingredient-grid">
            {ingredientElements}
        </div>
    )
}
