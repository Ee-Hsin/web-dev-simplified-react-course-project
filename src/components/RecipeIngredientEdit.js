import React from 'react'

export default function RecipeIngredientEdit(props) {

    const {name, amount, id, handleIngredientChange, removeIngredient} = props;
    
    return (
        <>
          <input className="recipe-edit__input" type="text" value={name} onInput={e => handleIngredientChange(id,{name: e.target.value})}/>  
          <input className="recipe-edit__input" type="text" value={amount} onInput={e => handleIngredientChange(id,{amount: e.target.value})}/> 
          <button className="btn btn--danger" onClick={() => removeIngredient(id)}>&times;</button>  
        </>
    )
}
