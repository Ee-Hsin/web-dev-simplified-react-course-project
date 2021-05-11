import React, {useState, useEffect} from 'react';
import RecipeList from './RecipeList';
import RecipeEdit from './RecipeEdit';
import '../css/app.css';
import { v4 as uuidv4 } from 'uuid';

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';

function App() {

  //SETTING OUR STATES:
  //We need recipes at top app Level so that later, our edit components can access it.
  const [recipes, setRecipes] = useState(sampleRecipes);
  //We need a selectedRecipeId state to determine what recipe we want to edit and whether we should be showing it or not.
  const [selectedRecipeId, setSelectedRecipeId] = useState(); 
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId); //Using the selectedRecipeId to get
  //the selected recipe.

  //useEffect to restore past state from local storage
  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON != null){
      setRecipes(JSON.parse(recipeJSON))
    }
  }, [])

  //useEffect to persist state
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  },[recipes])

  //Compiling the Recipe context values (the functions are below)
  const RecipeContextValue = {
    handleRecipeDelete: handleRecipeDelete, 
    handleRecipeAdd: handleRecipeAdd,
    handleRecipeSelect: handleRecipeSelect,
    handleRecipeChange: handleRecipeChange
  }

  function handleRecipeChange(id, recipe){
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex(r => r.id === id);
    newRecipes[index] = recipe;
    setRecipes(newRecipes)
  }

  function handleRecipeSelect(id){
    setSelectedRecipeId(id)
  }

  //function to delete recipe
  function handleRecipeDelete(id) {
    setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== id))
  }
  //function to add recipe
  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        {id: uuidv4(), name: 'Name', amount: '1 Tbs'}
      ]
    }
    setRecipes(prevRecipes => [...prevRecipes, newRecipe])
  }

  return (
    <div>
      <RecipeContext.Provider value={RecipeContextValue}>
        <RecipeList 
          recipes={recipes}
        />
        {selectedRecipe && <RecipeEdit recipe={selectedRecipe}/>}
      </RecipeContext.Provider>
    </div>
  );
}

//Sample recipes to start the app off with.
const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1.Put Salt on Chicken\n2.Put Chicken in oven\n3.Eat Chicken',
    ingredients: [{
      id: 1,
      name: 'Chicken',
      amount: '2 pounds'
    },{
      id: 2,
      name: 'Paprika',
      amount: '2 Tbs'
    }]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: '1.Put Salt on Pork\n2.Put Pork in oven\n3.Eat Pork',
    ingredients: [{
      id: 1,
      name: 'Pork',
      amount: '2 pounds'
    },{
      id: 2,
      name: 'Paprika',
      amount: '2 Tbs'
    }]
  }
];

export default App;
