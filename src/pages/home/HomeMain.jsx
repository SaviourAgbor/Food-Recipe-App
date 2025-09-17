import { useContext } from 'react'
import { GlobalContext } from '../../context/Context'
import RecipeItem from '../../components/RecipeItem'

export default function Home() {
  const {recipeList, loading} = useContext(GlobalContext)

    if(loading) return <div className='text-center mt-10 text-xl font-extrabold'>Loading...</div> 

  return (
    <div className=' flex flex-wrap gap-5 justify-center items-center mx-auto'>
      { 
        recipeList && recipeList.length > 0 ? 
        recipeList.map((item) => (
          <RecipeItem key={item.id} item={item} />
        )) : <div>
        <p className='text-center mt-10 text-xl font-extrabold'>Nothing to show, please search something.</p>
        </div>
      }
    </div>
  )
}
