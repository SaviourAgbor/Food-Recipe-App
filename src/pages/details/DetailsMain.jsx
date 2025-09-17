import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/Context";
import { useContext, useEffect, useState } from "react";

export default function Details() {
  const { id } = useParams();
  const { recipeDetailsData, setRecipeDetailsData, favorites, setFavorites, addToFavorites } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const data = await response.json();

        if (data?.data?.recipe) {
          setRecipeDetailsData(data?.data?.recipe);
        }
      } catch (e) {
        console.log(e);
      }
    }
    getRecipeDetails();
    console.log(recipeDetailsData)
  }, []);

  const isFavorite = favorites?.some(
    (item) => item.id === recipeDetailsData?.id
  );

  // 👉 Toggle favorites
  const toggleFavorite = () => {
    if (!recipeDetailsData) return;
    if (isFavorite) {
      setFavorites(favorites.filter((item) => item.id !== recipeDetailsData.id));
    } else {
      setFavorites([...favorites, recipeDetailsData]);
    }
  };
  
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="row-start-2 md:row-start-1 ">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailsData?.image_url}
            alt="Recipe Item"
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div>
        <p className="text-cyan-700 text-sm font-medium">
          {recipeDetailsData?.publisher}
        </p>
        <h2 className="text-2xl font-bold text-black truncate">
          {recipeDetailsData?.title}
        </h2>
        <button onClick={() => {
          addToFavorites(recipeDetailsData)
        } } className="rounded-lg uppercase font-medium tracking-wider mt-3 inline-block p-3 px-8 shadow-md bg-black text-white hover:cursor-pointer hover:scale-101 duration-300">
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>

        <div>
          <span className="font-semibold text-black text-2xl">Ingredients</span>
          <ul className="list-disc list-inside mt-5 flex flex-col">
            {recipeDetailsData?.ingredients &&
              recipeDetailsData?.ingredients.length > 0 &&
              recipeDetailsData?.ingredients.map((item, index) => (
                <li key={index} className="text-gray-600">
                  {item.quantity} {item.unit} {item.description}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
