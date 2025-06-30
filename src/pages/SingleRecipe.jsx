import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {

  const { data , setdata } = useContext(recipecontext);
  const navigate = useNavigate();
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);


    const { register , handleSubmit , reset } = useForm({
      defaultValues: {
        title: recipe?.title,
        chef: recipe?.chef,
        image: recipe?.image,
        desc: recipe?.desc,
        ingr: recipe?.ingr,
        inst: recipe?.inst,
      },
    });

    const UpdateHandler = (recipe) => {
      const index = data.findIndex((recipe) => params.id == recipe.id);
      const copydata = [...data];
      copydata[index] = { ...copydata[index], ...recipe};
      setdata(copydata);
      localStorage.setItem("recipe", JSON.stringify(copydata));

      toast.success("Recipe updated!")
    };
  
  const DeleteHandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);
    setdata(filterdata);
    localStorage.setItem("recipe", JSON.stringify(filterdata));

    toast.success("recipe deleted!");
    navigate("/recipes");
  }


    const [favourite, setfavourite] = useState(JSON.parse(localStorage.getItem("fav")) || []);


    const FavHandler = () => {
      const copyfav = [...favourite];
      copyfav.push(recipe);
      setfavourite(copyfav);
      localStorage.setItem("fav", JSON.stringify(copyfav));
    }

    const UnFavHandler = () => {
      const filterfav = favourite.filter((f) => f.id != recipe?.id);
      setfavourite(filterfav);
      localStorage.setItem("fav", JSON.stringify(filterfav));
    }

    useEffect(() => {
      console.log("SingleRecipe.jsx Mounted");

  
      return() => {
        console.log("SingleRecipe.jsx Unmounted")
      }
    }, [favourite]); // this [] stops unneccessary updates
    

  return (
    recipe ? 
    <div className="w-full flex">
      <div className="relative left w-1/2 p-10">
      {favourite.find((f) => f.id == recipe?.id) ? (
        <i 
        onClick={UnFavHandler} 
        className="right-[5%] absolute text-3xl text-red-400 ri-heart-fill">
        </i>
        
      ) : (
          <i 
        onClick={FavHandler} 
        className="right-[5%] absolute text-3xl text-red-400 ri-heart-line">
        </i>
      )}
        

        

        <h1 className="text-5xl font-black">{recipe.title}</h1>
        <img className="h-[20vh]" src={recipe.image} alt="" />
        <h1>{recipe.chef}</h1>
        <p>{recipe.desc}</p>
      </div>

      <form className="w-1/2 p-2" onSubmit={handleSubmit(UpdateHandler)}>
        <input 
            className="block border-b outline-0 p-2"
            {...register("image")} 
            type="url" 
            placeholder="Enter Image Url"
        />
        <small 
        className="text-red-400">This is how the error is shown
        </small>
        <input 
            className="block border-b outline-0 p-2"
            {...register("title")} 
            type="text" 
            placeholder="Recipe Title" 
        />

        <input 
            className="block border-b outline-0 p-2"
            {...register("chef")} 
            type="text" 
            placeholder="Chef Name" 
        />
        
        <textarea 
            className="block border-b outline-0 p-2"
            {...register("desc")}
            placeholder="//start from here" 
        ></textarea>
        
        <textarea 
            className="block border-b outline-0 p-2"
            {...register("ingr")} 
            placeholder="//write ingredients separated by comma" 
        ></textarea>
        
        <textarea 
            className="block border-b outline-0 p-2"
            {...register("inst")} 
            placeholder="//write instructions separated by comma" 
        ></textarea>

        <select 
            className="block border-b outline-0 p-2"
            {...register("category")} 
        >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="supper">Supper</option>
            <option value="dinner">Dinner</option>
        </select>
        <button className="mt-5 block bg-blue-900 px-4 py-2 rounded">
          Update Recipe
        </button>
        <button onClick={DeleteHandler} className="mt-5 block bg-red-900 px-4 py-2 rounded">
          Delete Recipe
        </button>
    </form>
      
    </div> : "Loading..."
  );
}

export default SingleRecipe