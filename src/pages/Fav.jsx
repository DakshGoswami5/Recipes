import { useContext } from "react"
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";


const Fav = () => {
    const favourite = JSON.parse(localStorage.getItem("fav") || []);

  const renderrecipes = favourite.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
  return (
    <div className="flex flex-wrap">
      {favourite.length>0 ? renderrecipes : "No favourite found"}
    </div>
  )
}

export default Fav