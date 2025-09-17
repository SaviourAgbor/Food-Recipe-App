import { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import RecipeItem from "../../components/RecipeItem";

export default function Favorites() {
  const { favorites } = useContext(GlobalContext);
  // console.log(favorites);
  
  return <div className='flex flex-wrap gap-5 justify-center items-center mx-auto'>
        { 
          favorites && favorites.length > 0 ? 
          favorites.map((item) => (
            <RecipeItem key={item.id} item={item} />
          )) : <div>
          <p className='text-center mt-10 text-xl font-extrabold'>No favorites added yet.</p>
          </div>
        }
      </div>
}
