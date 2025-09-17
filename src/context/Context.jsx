import { createContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParams, setSearchParams] = useState("coconut");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const navigate = useNavigate();

  async function handleSubmit(e) {
     if(e) e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`
      );
      const data = await response.json();

      if (data?.data?.recipes?.length) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParams("");
        navigate("/")
      } else {
        setRecipeList([]);
        setLoading(false);
        setSearchParams("");
        navigate("/")
      }
    } catch (e) {
      setLoading(false);
      setSearchParams("");
      console.log(e);
    }
  }

  useEffect(() => {
    handleSubmit();
  }, []);

  function addToFavorites(favoriteItem) {
    const index = favorites.findIndex((item) => item.id === favoriteItem.id);
    if (index === -1) {
      setFavorites([...favorites, favoriteItem]);
    } else {
      favorites.splice(index, 1);
      setFavorites([...favorites]);
    }
  }
  console.log(favorites);

  return (
    <GlobalContext.Provider
      value={{
        searchParams,
        setSearchParams,
        handleSubmit,
        recipeList,
        loading,
        recipeDetailsData,
        setRecipeDetailsData,
        addToFavorites,
        favorites,
        setFavorites
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
